<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';
	import LoadingRecipe from '../../../../lib/components/loading/recipe/LoadingRecipe.svelte';

	import { storage } from '$lib/firebase/firebase.client';
	import { getDownloadURL, ref } from 'firebase/storage';

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
		if (link.includes('youtube')) {
			link = link.replace('watch?v=', 'embed/');
		} else if (!link.includes('https://') && !link.includes('http://')) {
			link = 'https://' + link;
		}
	});
</script>

{#if recipe.title === undefined}
	<LoadingRecipe />
{:else}
	<div class="recipe p-4">
		<h1 class="text-5xl text-center font-bold">{recipe.title}</h1>

		<div class="flex flex-row justify-center">
			{#each categories as category}
				<span class="badge badge-primary font-bold mx-1 my-2">{category}</span>
			{/each}
		</div>

		<img src={cover} alt={recipe.title} class="w-full h-40 object-cover rounded-xl mb-2" />

		<h1 class="text-3xl font-bold pt-3 pb-1">General Informations</h1>
		<h1><strong>Author:</strong> {recipe.author}</h1>
		<h1>
			<strong>Difficulty:</strong>
			{String(recipe.difficulty).charAt(0).toUpperCase() + String(recipe.difficulty).slice(1)}
		</h1>
		<h1><strong>Portions:</strong> {recipe.portions}</h1>
		<h1><strong>Preparation time:</strong> {recipe.time} min</h1>

		<h2 class="text-2xl font-bold pt-3 pb-1">Description:</h2>
		<h1>{recipe.description}</h1>

		<h1 class="text-3xl font-bold pt-6 pb-1">Ingredients:</h1>
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

		<h1 class="text-3xl font-bold pt-6 pb-1">Steps:</h1>

		{#if steps.length > 0}
			{#each steps as step}
				{#if step}
					<h1><strong>{step.number}</strong> {step.text}</h1>
				{/if}
			{/each}
		{:else}
			<h1>{recipe.steps}</h1>
		{/if}

		{#if link}
			<h1 class="text-3xl font-bold pt-6 pb-1">Useful links:</h1>
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
{/if}
