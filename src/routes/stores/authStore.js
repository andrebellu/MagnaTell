import { auth } from '$lib/firebase/firebase.client';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification, getIdToken, deleteUser } from 'firebase/auth';
import { goto } from '$app/navigation';
import { request } from '$lib/firebase/fetch'

import { db } from '$lib/firebase/firebase.client';
import { doc, getDocs, setDoc, query, collection, where, deleteDoc, documentId } from "firebase/firestore";

import { realDB, storage } from '$lib/firebase/firebase.client';
import { get, ref as refReal, remove } from "firebase/database";
import { deleteObject, ref as refStorage } from "firebase/storage";

export const defaultAvatar = 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=' + Math.random();

export const authHandlers = {
	login: async (email, password, remember) => {
		const userCredential = await signInWithEmailAndPassword(auth, email, password)
			.catch((error) => {
				if (error.code === 'auth/account-exists-with-different-credential') {
					alert('You have already signed up with a different auth provider for that email.');
				} else {
					alert('The email or password is incorrect');
				}
			});

		const idToken = userCredential._tokenResponse.idToken;
		const refreshToken = userCredential._tokenResponse.refreshToken;
		await request('/api/cookies', "POST", { idToken, remember, refreshToken });
	},

	signup: async (email, password, username) => {
		const userRecord = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
			if (error.code === 'auth/email-already-in-use') {
				alert('Email already in use');
			}
		});

		await setDoc(doc(db, 'users', userRecord.user.uid), {
			username: username,
			email: email,
			createdAt: new Date().toISOString(),
		});

		await updateProfile(userRecord.user, {
			displayName: username
		});

		const idToken = await getIdToken(userRecord.user, true);
		const refreshToken = userRecord._tokenResponse.refreshToken;
		await request('/api/cookies', "POST", { idToken });

		sendEmailVerification(userRecord.user)
			.then(() => {
				console.log('Email sent');
			})
			.catch((error) => {
				console.log(error);
			});
	},

	logout: async () => {
		await signOut(auth);
		await request('/api/cookies', "DELETE");
	},

	loginGoogle: async () => {
		const userGoogle = await signInWithPopup(auth, new GoogleAuthProvider())
			.catch((error) => {
				console.log(error.customData);
			});

		const idToken = userGoogle._tokenResponse.idToken;
		const refreshToken = userGoogle._tokenResponse.refreshToken;
		const remember = true;
		await request('/api/cookies', "POST", { idToken, remember, refreshToken });

		const q = query(collection(db, 'users'), where(documentId(), '==', auth.currentUser.uid));
		let querySnapshot = await getDocs(q);
		if (querySnapshot.length != 1) {
			await setDoc(doc(db, 'users', auth.currentUser.uid), {
				username: auth.currentUser.displayName,
				email: auth.currentUser.email,
				createdAt: new Date().toISOString(),
			});
		}
	},

	resetPassword: async () => {
		await sendPasswordResetEmail(auth, auth.currentUser.email)
			.then(() => {
				alert('Password reset email sent\nCheck your inbox (and spam folder)');
			})
			.catch((error) => {
				console.log(error);
			});
	},

	sendVerificationEmail: async () => {
		await sendEmailVerification(auth.currentUser)
			.then(() => {
				alert('Verification email sent\nCheck your inbox (and spam folder)');
			})
			.catch((error) => {
				console.log(error);
			});
	},

	deleteAccount: async () => {
		await deleteDoc(doc(db, 'users', auth.currentUser.uid))	
			.catch((error) => {
				console.log(error);
			});

			await deleteUser(auth.currentUser)
			.then(() => {
				alert('Account deleted');
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	},

	deleteUserRecipes: async () => {
		const querySnapshot = await getDocs(query(collection(db, 'recipes'), where('uid', '==', auth.currentUser.uid)));
		querySnapshot.forEach(async (doc) => {
			await deleteDoc(doc.ref);
		});
	},

	deleteUserRating: async () => {
		let recKeys = [];

		get(refReal(realDB, 'recipes-grade/')).then((snapshot) => {
			if(snapshot.exists()){
				recKeys = Object.keys(snapshot.val());
			}
			recKeys.forEach((key) => {
				remove(refReal(realDB, 'recipes-grade/' + key + '/stars/' + auth.currentUser.uid));
			})
		});
	},

	deleteUserImage: async () => {
		const querySnapshot = await getDocs(query(collection(db, 'recipes'), where('uid', '==', auth.currentUser.uid)));
		querySnapshot.forEach(async (doc) => {
			deleteObject(refStorage(storage, 'recipes-covers/' + doc.id));
		})
	}
};
