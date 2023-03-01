import { auth } from '$lib/firebase/firebase.client';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification, getIdToken } from 'firebase/auth';
import { goto } from '$app/navigation';
import { request } from '$lib/firebase/fetch'

import { db } from '$lib/firebase/firebase.client';
import { doc, setDoc } from "firebase/firestore";

export const defaultAvatar = 'https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=' + Math.random();

export const authHandlers = {
	login: async (email, password) => {
		const userCredential = await signInWithEmailAndPassword(auth, email, password)
			.catch((error) => {
				if (error.code === 'auth/account-exists-with-different-credential') {
					alert('You have already signed up with a different auth provider for that email.');
				} else {
					alert('The email or password is incorrect');
				}
			});

		const idToken = userCredential._tokenResponse.idToken;
		await request('/api/cookies', "POST", { idToken });
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
		await request('/api/cookies', "POST", { idToken });

		await setDoc(doc(db, 'users', auth.currentUser.uid), {
			username: auth.currentUser.displayName,
			email: auth.currentUser.email,
			createdAt: new Date().toISOString(),
		});
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
		await auth.currentUser.delete()
			.then(() => {
				alert('Account deleted');
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
