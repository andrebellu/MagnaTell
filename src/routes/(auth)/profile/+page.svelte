<script>
	import { active, mySavedRecipes } from './../../stores/store.js';
	import { authHandlers, defaultAvatar } from '../../stores/authStore';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { myRecipes } from '../../stores/store';

	import Cards from '../../../lib/components/homepage/cards/Cards.svelte';

	import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';

	import { ProviderId, sendEmailVerification } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase.client';

	import { storage } from '$lib/firebase/firebase.client';
	import { ref, getDownloadURL } from 'firebase/storage';

	import {
		ForkKnife,
		BookmarkSimple,
		GearSix,
		CheckCircle,
		XCircle,
		Pencil,
		Warning,
		SmileySad
	} from 'phosphor-svelte';
	import Card from '../../../lib/components/homepage/card/Card.svelte';

	let user;
	let cover;
	let page = 'recipes';
	let totalAverage = 0;

	let confirmDelete;
	let deleteButton;

	let bg_color = 'primary';

	let savedRecipesId = [];

	let profile = true;

	$: if (confirmDelete === 'CONFIRM') {
		deleteButton = '';
	} else {
		deleteButton = 'btn-disabled btn-outline text-error';
	}

	onMount(async () => {
		myRecipes.set([]);
		mySavedRecipes.set([]);
		savedRecipesId = [];

		user = JSON.parse(
			sessionStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
		);

		const q = query(collection(db, 'recipes'), where('uid', '==', user.uid));
		let querySnapshot = await getDocs(q);
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

		// Get saved recipes' id
		const q2 = query(collection(db, 'users'), where(documentId(), '==', user.uid));
		let querySnapshot2 = await getDocs(q2);
		savedRecipesId = querySnapshot2.docs[0].data().savedRecipes;

		// get saved recipes' data
		for (let i = 0; i < savedRecipesId.length; i++) {
			const q3 = query(collection(db, 'recipes'), where(documentId(), '==', savedRecipesId[i]));
			let querySnapshot3 = await getDocs(q3);
			try {
				if (querySnapshot3.docs[0].data().hasCover) {
					await getDownloadURL(ref(storage, 'recipes-covers/' + querySnapshot3.docs[0].id)).then(
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
			mySavedRecipes.update((mySavedRecipes) => [
				...mySavedRecipes,
				{
					id: querySnapshot3.docs[0].id,
					data: querySnapshot3.docs[0].data(),
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

	<div class="bg-accent rounded-[2.50rem] w-screen h-screen">
		<div class="buttons flex justify-center pt-10">
			<button
				on:click={() => (page = 'recipes')}
				class:active={page == 'recipes'}
				id="recipes"
				class="profile-b md:hover:bg-secondary bg-primary [&.active]:bg-secondary rounded-l-full rounded-r-[281.25rem] group"
				><ForkKnife
					weight="fill"
					size={30}
					class="text-secondary md:group-hover:text-primary group-[&.active]:text-primary"
				/></button
			>
			<button
				on:click={() => (page = 'favorites')}
				class:active={page == 'favorites'}
				id="favourites"
				class="profile-b md:hover:bg-secondary bg-primary [&.active]:bg-secondary rounded-xl group"
				><BookmarkSimple
					weight="fill"
					size={30}
					class="text-secondary md:group-hover:text-primary group-[&.active]:text-primary"
				/></button
			>
			<button
				on:click={() => (page = 'settings')}
				class:active={page == 'settings'}
				id="recipes"
				class="profile-b md:hover:bg-secondary bg-primary [&.active]:bg-secondary rounded-r-full rounded-l-[281.25rem] group"
				><GearSix
					weight="fill"
					size={30}
					class="text-secondary md:group-hover:text-primary group-[&.active]:text-primary"
				/></button
			>
		</div>

		<div class="pt-5 pb-20">
			{#if page == 'recipes'}
				<div class="flex flex-wrap flex-row justify-center">
					{#each $myRecipes as recipe}
						<div class="card p-2">
							<Card {recipe} {bg_color} {totalAverage} {profile} />
						</div>
					{/each}
				</div>
			{:else if page == 'favorites'}
				{#if $mySavedRecipes.length > 0}
					{#each $mySavedRecipes as recipe}
						<div class="card p-2">
							<Card {recipe} {bg_color} {totalAverage} />
						</div>
					{/each}
				{:else}
					<div class="flex flex-col items-center justify-center">
						<p class="text-2xl font-bold">You have no saved recipes</p>
						<p class="text-xl">Go to the recipes page and save some!</p>
					</div>
				{/if}
			{:else if page == 'settings'}
				<div class="settings px-6">
					<h1 class="text-3xl font-cormorant font-bold">Settings</h1>

					<div class="email flex items-center gap-x-1 mt-2">
						<p>E-mail</p>
						{#if user.emailVerified}
							<CheckCircle weight="fill" size={25} class="text-green-500" />
						{:else}
							<button
								on:click={sendVerificationEmail}
								class="btn btn-secondary btn-xs text-white normal-case rounded-xl">Verify</button
							>
							<XCircle weight="fill" size={25} class="text-red-500" />
						{/if}
					</div>
					<div class="flex justify-center flex-col">
						<p id="email" class="font-extrabold">
							{user.email}
						</p>
					</div>

					{#if user.providerData[0].providerId != "google.com"}
						<div class="password flex items-center gap-x-1 mt-2">
							<p>Password</p>
							<button
								on:click={changePassword}
								class="bg-primary p-2 text-white normal-case rounded-full"
								><Pencil size={10} class="text-white" /></button
							>
						</div>
						<div class="flex justify-center flex-col">
							<p id="email" class="font-extrabold">**********</p>
						</div>
					{/if}
					<div class="warning-zone flex flex-col justify-center items-center gap-2 mt-5">
						<Warning weight="fill" size={30} class="" />

						<h1 class="text-3xl font-cormorant font-bold">Warning zone</h1>
						<p>Delete profile</p>
						<div
							class="button bg-secondary p-2 text-white normal-case rounded-full w-16 text-center flex justify-center items-center"
						>
							<label for="deleteAccountModal" class="absolute bg-red text-transparent text-2xl py-2"
								>Delete</label
							>
							<SmileySad weight={'fill'} size={30} class="text-primary text-center" />
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<!-- <div class="email flex justify-center flex-col">
			<p id="email" class="py-2 rounded-md flex flex-col justify-center text-center">
				{user.email}{user.emailVerified ? '✔' : '❌'}
				{#if !user.emailVerified}
					<button on:click={sendVerificationEmail} class="btn btn-accent btn-xs mt-2"
						>Send verification email</button
					>
				{/if}
			</p>
		</div> -->
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
