<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { deleteDoc, doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import LoadingRecipe from '../../../../lib/components/loading/recipe/LoadingRecipe.svelte';
	import BookmarkSimple from 'phosphor-svelte/lib/BookmarkSimple';

	import { storage, auth } from '$lib/firebase/firebase.client';
	import { getDownloadURL, ref } from 'firebase/storage';

	import Stars from '../../../../lib/components/recipe/rating/Stars.svelte';

	import { getDocs, query, collection, where, documentId, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';

	import { getIdToken } from 'firebase/auth';
	import { request } from '$lib/firebase/fetch';
	auth.onAuthStateChanged(() => {
		if (auth.currentUser) {
			try {
				getIdToken(auth.currentUser, true)
					.then((token) => {
						request ('api/cookies', "POST", { token })
						sessionStorage.setItem('user', JSON.stringify(auth.currentUser));
					})
					.catch((error) => {
						console.log('error: ', error);
					});
			} catch (error) {
				console.log('error 2: ', error);
			}
		}
	});

	const recipeId = $page.params.recipeId;
	let recipe = {};
	let ingredients = [];
	let categories = [];
	let steps = [];
	let link = '';
	let cover;
	let user;

	let marked = false;
	let savedRecipesId = [];

	onMount(async () => {
		savedRecipesId = [];

		user = JSON.parse(sessionStorage.getItem('user'));

		const querySnapshot = await getDoc(doc(db, 'recipes', recipeId));
		recipe = querySnapshot.data();
		try {
			if (recipe.hasCover) {
				await getDownloadURL(ref(storage, 'recipes-covers/' + recipeId)).then((url) => {
					cover = url;
				});
			} else {
				cover = '/no-image.jpg';
			}
		} catch {
			cover = '/no-image.jpg';
		}
		ingredients = recipe.ingredients;

		categories = recipe.category;

		link = recipe.link;

		steps = recipe.steps;

		if (link.includes('youtube')) {
			link = link.replace('watch?v=', 'embed/');

			if (link.includes('&')) {
				link = link.split('&')[0];
			}
		} else if (!link.includes('https://') && !link.includes('http://')) {
			link = 'https://' + link;
		}

		const q2 = query(collection(db, 'users'), where(documentId(), '==', user.uid));
		let querySnapshot2 = await getDocs(q2);
		savedRecipesId = querySnapshot2.docs[0].data().savedRecipes;
		if (savedRecipesId.includes(recipeId)) {
			marked = true;
		}
	});

	async function saveRecipe () {
		await updateDoc(doc(db, 'users', user.uid), {
			savedRecipes: arrayUnion(recipeId)
		});
		marked = true;
	}

	async function unsaveRecipe () {
		await updateDoc(doc(db, 'users', user.uid), {
			savedRecipes: arrayRemove(recipeId)
		});
		marked = false;
	}

	const recipesDelete = () => {
		const ref = doc(db, 'recipes', recipeId);
		deleteDoc(ref);
		goto('/home');
	};
</script>

{#if recipe.title === undefined}
	<LoadingRecipe />
{:else}
	<div class="recipe p-4 flex flex-col justify-center h-full">
		<div class="title flex">
			<img src={cover} alt={recipe.title} class="w-32 h-32 object-cover rounded-xl mb-2" />
			<div class="flex flex-col ml-4">
				<div class="flex flex-row items-center">
					<h1 class="text-3xl font-bold text-ellipsis truncate w-48">{recipe.title}</h1>
					{#if marked == false }
						<button class="text-3xl" on:click={saveRecipe}><BookmarkSimple /></button>
					{:else}
						<button class="text-3xl" on:click={unsaveRecipe}><BookmarkSimple weight="fill" /></button>
					{/if}
				</div>

				<h1>{recipe.author}</h1>

				<div class="flex flex-row">
					{#each categories as category}
						<span class="badge badge-primary font-bold my-2 mr-2">{category}</span>
					{/each}
				</div>

				<div><Stars /></div>
			</div>
		</div>

		<div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-96">
			<div class="carousel-item flex flex-col w-full" id="general">
				<h1 class="text-3xl font-bold pb-1">Infos</h1>
				<h1>
					<strong>Difficulty:</strong>
					{String(recipe.difficulty).charAt(0).toUpperCase() + String(recipe.difficulty).slice(1)}
				</h1>
				<h1><strong>Portions:</strong> {recipe.portions}</h1>
				<h1><strong>Preparation time:</strong> {recipe.time} min</h1>

				<h2 class="text-2xl font-bold pt-3 pb-1">Description:</h2>
				<h1>{recipe.description}</h1>
			</div>

			<div class="carousel-item flex flex-col w-full" id="ingredients">
				<h1 class="text-3xl font-bold pb-1">Ingredients:</h1>
				<div class="ingredients pt-1">
					{#each ingredients as ingredient}
						<div class="grid grid-cols-2 grid-rows-1 gap-2">
							<h1 class="font-semibold">
								• {String(ingredient.ingredient).charAt(0).toUpperCase() +
									String(ingredient.ingredient).slice(1)}
							</h1>
							<h1>{ingredient.quantity}</h1>
						</div>
					{/each}
				</div>
			</div>

			<div class="carousel-item flex flex-col w-full" id="steps">
				<h1 class="text-3xl font-bold pb-1">Steps:</h1>

				{#each steps as step, i}
					<div class="flex flex-row items-start my-1">
						<div
							class="bg-secondary rounded-full h-8 aspect-square text-white text-center p-1 mr-2"
						>
							{i + 1}.
						</div>
						<div class="mb-2">{step}</div>
					</div>
				{/each}
			</div>

			<div class="carousel-item flex flex-col w-full" id="links">
				{#if link}
					<h1 class="text-3xl font-bold pb-1">Useful links:</h1>
				{/if}

				{#if link.includes('youtube')}
					<iframe
						src={link}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="w-full h-64 rounded-xl"
					/>
				{:else}
					<a href={link} class="btn">Link</a>
				{/if}
			</div>
		</div>

		<ul class="steps mt-4">
			{#if $page.url.hash === '' || $page.url.hash === '#general'}
				<a class="step step-primary" href="#general">General</a>
			{:else}
				<a class="step" href="#general">General</a>
			{/if}

			{#if $page.url.hash === '#ingredients'}
				<a class="step step-primary" href="#ingredients">Ingredients</a>
			{:else}
				<a class="step" href="#ingredients">Ingredients</a>
			{/if}

			{#if $page.url.hash === '#steps'}
				<a class="step step-primary" href="#steps">Steps</a>
			{:else}
				<a class="step" href="#steps">Steps</a>
			{/if}

			{#if $page.url.hash === '#links'}
				<a class="step step-primary" href="#links">Links</a>
			{:else}
				<a class="step" href="#links">Links</a>
			{/if}
		</ul>
	</div>
{/if}
