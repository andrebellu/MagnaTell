<script>
	import { active } from './../../stores/store.js';
	import { authHandlers, defaultAvatar } from '../../stores/authStore';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { myRecipes } from '../../stores/store';

	import Card from '$lib/components/homepage/card/Card.svelte';

	import { collection, query, where, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';

	import { sendEmailVerification } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase.client';

	import { storage } from '$lib/firebase/firebase.client';
	import { ref, getDownloadURL } from 'firebase/storage';

	import { ForkKnife, BookmarkSimple, GearSix } from 'phosphor-svelte';

	let user;
	let cover;

	let confirmDelete;
	let deleteButton;

	$: if (confirmDelete === 'CONFIRM') {
		deleteButton = '';
	} else {
		deleteButton = 'btn-disabled btn-outline text-error';
	}

	onMount(async () => {
		user = JSON.parse(
			localStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
		);
		myRecipes.set([]);

		const q = query(collection(db, 'recipes'), where('uid', '==', user.uid));

		const querySnapshot = await getDocs(q);
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			try {
				if (querySnapshot.docs[i].data().hasCover) {
					await getDownloadURL(ref(storage, 'recipes-covers/' + querySnapshot.docs[i].id)).then(
						(url) => {
							cover = url;
						}
					);
				} else {
					cover = '/no-image.jpg';
				}
			} catch {
				cover = '/no-image.jpg';
			}
			myRecipes.update((myRecipes) => [
				...myRecipes,
				{
					id: querySnapshot.docs[i].id,
					data: querySnapshot.docs[i].data(),
					cover
				}
			]);
		}
	});

	const logout = async () => {
		await authHandlers.logout();
		goto('/login');
	};

	async function sendVerificationEmail() {
		const r = await sendEmailVerification(auth.currentUser);
	}

	async function changePassword() {
		// TODO: Implement change password
	}

	async function deleteAccount() {
		await authHandlers.deleteUserRating();
		await authHandlers.deleteUserImage();
		await authHandlers.deleteUserRecipes(user);
		await authHandlers.deleteAccount();
	}
</script>

{#if user}
	<div class="flex justify-items-stretch pl-8 pt-5 pb-10">
		{#if user.photoURL}
			<img src={user.photoURL} alt="Profile pic" class="w-24 h-24 rounded-full" />
		{:else}
			<img src={defaultAvatar} alt="Profile pic" class="w-24 h-24 rounded-full" />
		{/if}
		<div class="self-center justify-self-start pl-5">
			<p class="italic font-inter">Chef</p>
			<h2 class="text-xl font-bold font-inter">
				{user.displayName || user.email}
			</h2>
		</div>
	</div>

	<div class="bg-accent rounded-[2.50rem] w-screnn h-screen">
		<div class="buttons flex justify-center pt-10">
			<button
				id="recipes"
				class="profile-b hover:bg-secondary bg-primary active:bg-secondary rounded-l-full rounded-r-[281.25rem] group"
				><ForkKnife
					weight="fill"
					size={30}
					class="text-secondary group-hover:text-primary group-active:text-primary"
				/></button
			>
			<button
				id="favourites"
				class="profile-b hover:bg-secondary bg-primary active:bg-secondary rounded-xl group"
				><BookmarkSimple
					weight="fill"
					size={30}
					class="text-secondary group-hover:text-primary group-active:text-primary"
				/></button
			>
			<button
				id="recipes"
				class="profile-b hover:bg-secondary bg-primary active:bg-secondary rounded-r-full rounded-l-[281.25rem] group"
				><GearSix
					weight="fill"
					size={30}
					class="text-secondary group-hover:text-primary group-active:text-primary"
				/></button
			>
		</div>
	</div>

	<!--- Email verificatio section
		<div class="email flex justify-center flex-col">
			<p id="email" class="py-2 rounded-md flex flex-col justify-center text-center">
				{user.email}{user.emailVerified ? '✔' : '❌'}
				{#if !user.emailVerified}
					<button on:click={sendVerificationEmail} class="btn btn-accent btn-xs mt-2"
						>Send verification email</button
					>
				{/if}
			</p>
		</div>
		-->
	<!---
		!!Change Password section!!
		{#if user === 'password'}
			<div class="password">
				<p
					class="btn btn-ghost border-gray-200"
					on:click={changePassword}
					on:keydown={changePassword}
				>
					Change password
				</p>
			</div>
		{/if}
		!!Delete account section!!
		<button on:click={logout} class="btn btn-primary rounded-xl">Logout</button>

		<label for="deleteAccountModal" class="btn btn-outline mt-4 btn-error btn-xs rounded-full"
			>Delete account</label
		>

		!!Confirm delete modal!!
		<input type="checkbox" id="deleteAccountModal" class="modal-toggle" />
		<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h1 class="font-bold text-xl">Are you sure you want to delete your account?</h1>
				<p class="pt-4 font-bold text-error">
					If you delete your account all your recipes will be deleted as well.
				</p>
				<p class="pb-4 font-bold underline underline-offset-2 text-error">
					The action cannot be reversed!
				</p>

				<p class="">To delete your account type CONFIRM</p>
				<input
					type="text"
					class="confirmDelete input input-bordered w-full"
					placeholder="CONFIRM"
					bind:value={confirmDelete}
				/>

				<div class="modal-action">
					<label
						for="deleteAccountModal"
						class="deleteButton btn btn-error {deleteButton}"
						on:click={deleteAccount}
						on:keydown={deleteAccount}>Delete</label
					>
					<label for="deleteAccountModal" class="btn">Cancel</label>
				</div>
			</div>
		</div>
		-->
	<!---
		!!Recipes display section!!
		{#if $myRecipes.length === 0}
			<p class="text-2xl font-bold text-center mb-4 mt-8 font-cormorant">You have no recipes</p>
		{:else}
			<div class="recipes pb-4">
				<h2 class="text-2xl font-bold text-center mb-4 mt-8 font-cormorant">My recipes</h2>
				<div class="layout flex flex-wrap gap-4 justify-center">
					{#each $myRecipes as recipe}
						<Card {recipe} />
					{/each}
				</div>
			</div>
		{/if}
		-->
{/if}

<style>
	.profile-b {
		height: 3.25rem;
		width: 6.875rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
	}
</style>
