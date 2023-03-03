<script>
	import Card from '$lib/components/homepage/card/Card.svelte';

	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';

	import { recipes, searched, pressed, categories } from '../../stores/store';
	import CategoriesCarousel from '$lib/components/homepage/categories-carousel/CategoriesCarousel.svelte';

	import LoadingCategoriesCarousel from '$lib/components/loading/categories-carousel/LoadingCategoriesCarousel.svelte';

	import { storage } from '$lib/firebase/firebase.client';
	import { ref, getDownloadURL } from 'firebase/storage';

	let search;
	let cover;

	onMount(async () => {
		recipes.set([]);
		categories.set([]);

		const querySnapshot = await getDocs(collection(db, 'recipes'));
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			try{
				await getDownloadURL(ref(storage, 'recipes-covers/' + querySnapshot.docs[i].id)).then((url) => { cover = url});
			}catch{
				cover = "/no-image.svg"
			}
			console.log("cover: " + cover)
			recipes.update((recipes) => [
				...recipes,
				{
					id: querySnapshot.docs[i].id,
					data: querySnapshot.docs[i].data(),
					cover
				}
			]);
		}

		const categoriesQuery = await getDocs(collection(db, 'categories'));
		categoriesQuery.forEach((doc) => {
			categories.update((categories) => [
				...categories,
				{
					id: doc.id,
					name: doc.data().name
				}
			]);
		});
	});

	pressed.subscribe((value) => {
		if ($pressed && (search == undefined || search == '')) {
			searched.set($recipes.filter((recipe) => recipe.data.category.includes($pressed)));
		} else if ($pressed && search) {
			handleSearch();
		}
	});

	const handleSearch = () => {
		if ($pressed) {
			searched.set(
				$recipes.filter(
					(recipe) =>
						recipe.data.category.includes($pressed) &&
						recipe.data.title.toLowerCase().includes(search.toLowerCase())
				)
			);
		} else {
			searched.set(
				$recipes.filter((recipe) => recipe.data.title.toLowerCase().includes(search.toLowerCase()))
			);
		}
	};
</script>

<div class="search px-4">
	<h1 class="text-center text-4xl py-4 font-cormorant font-bold">Search</h1>
	<input
		type="text"
		bind:value={search}
		on:input={handleSearch}
		placeholder="Search for a recipe"
		class="input input-bordered outline-none focus:outline-none input-sm border-2 border-accent bg-white w-full h-10 px-3 text-base placeholder-gray-600 rounded-lg focus:shadow-outline"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				handleSearch();
			}
		}}
	/>
</div>

<div class="filters">
	{#if $categories.length == 0}
		<div role="status" class="max-w-sm animate-pulse">
			<div class="h-8 w-32 mt-5 mx-4 bg-gray-200 rounded-full dark:bg-accent" />
			<span class="sr-only">Loading...</span>
		</div>
		<LoadingCategoriesCarousel />
	{:else}
		<div class="carousel carousel-center space-x-2 py-4 px-2 bg-trasparent">
			{#each $categories as category}
				<CategoriesCarousel {category} />
			{/each}
		</div>
		{#if !$pressed}
			<h1
				class="text-sm font-poppins text-center font-bold mb-0 text-gray-400 align-bottom opacity-50"
			>
				<p class="material-symbols-outlined text-gray-500 align-middle opacity-50">light</p>
				tip: click on a category to filter recipes
			</h1>
		{/if}
	{/if}
</div>

<div class="cards pb-4">
	<div class="search flex flex-row flex-wrap justify-center gap-y-4 gap-x-4 pt-4 pb-4">
		{#if $searched.length > 0}
			{#each $searched as recipe}
				<Card {recipe} />
			{/each}
		{:else if $searched.length < 1}
			<h1 class="opacity-0 hidden">No recipes found</h1>
		{/if}
	</div>
</div>
