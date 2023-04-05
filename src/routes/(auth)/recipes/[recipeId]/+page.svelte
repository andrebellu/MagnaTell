<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { deleteDoc, doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import LoadingRecipe from '../../../../lib/components/loading/recipe/LoadingRecipe.svelte';

	import { storage, auth } from '$lib/firebase/firebase.client';
	import { getDownloadURL, ref } from 'firebase/storage';

	import Stars from '../../../../lib/components/recipe/rating/Stars.svelte';

	const recipeId = $page.params.recipeId;
	let recipe = {};
	let ingredients = [];
	let categories = [];
	let steps = [];
	let link = '';
	let cover;

	onMount(async () => {
		const querySnapshot = await getDoc(doc(db, 'recipes', recipeId));
		recipe = querySnapshot.data();
		try {
			await getDownloadURL(ref(storage, 'recipes-covers/' + recipeId)).then((url) => {
				cover = url;
			});
		} catch {
			cover = '/no-image.jpg';
		}
		ingredients = recipe.ingredients;

		categories = recipe.category;

		steps = recipe.steps.split(/(\d\.\s)/g);
		steps.shift();
		steps = steps.map((step, index) => {
			if (index % 2 == 0) {
				return {
					number: step,
					text: steps[index + 1]
				};
			}
		});

		link = recipe.link;

		console.log(link);
		if (link.includes('youtube')) {
			link = link.replace('watch?v=', 'embed/');

			if (link.includes('&')) {
				link = link.split('&')[0];
				console.log(link);
			}
		} else if (!link.includes('https://') && !link.includes('http://')) {
			link = 'https://' + link;
		}

		console.log(link);
	});

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
				<h1 class="text-3xl font-bold">{recipe.title}</h1>

				<h1>{recipe.author}</h1>

				<div class="flex flex-row justify-center">
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

				{#if steps.length > 0}
					{#each steps as step}
						{#if step}
							<h1><strong>{step.number}</strong> {step.text}</h1>
						{/if}
					{/each}
				{:else}
					<h1>{recipe.steps}</h1>
				{/if}
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
