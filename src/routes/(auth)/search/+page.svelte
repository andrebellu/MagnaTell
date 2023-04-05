<script>
	import Card from '$lib/components/homepage/card/Card.svelte';

	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';

	import { recipes, searched, pressed, categories, active } from '../../stores/store';
	import CategoriesCarousel from '$lib/components/homepage/categories-carousel/CategoriesCarousel.svelte';

	import LoadingCategoriesCarousel from '$lib/components/loading/categories-carousel/LoadingCategoriesCarousel.svelte';

	import { storage } from '$lib/firebase/firebase.client';
	import { ref, getDownloadURL } from 'firebase/storage';

	let search;
	let cover;

	onMount(async () => {
		recipes.set([]);
		categories.set([]);
		pressed.set('');
		active.set('');

		const querySnapshot = await getDocs(collection(db, 'recipes'));
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			try {
				await getDownloadURL(ref(storage, 'recipes-covers/' + querySnapshot.docs[i].id)).then(
					(url) => {
						cover = url;
					}
				);
			} catch {
				cover = '/no-image.jpg';
			}
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
					name: doc.data().name,
					icon: doc.data().icon
				}
			]);
		});
	});

	pressed.subscribe((value) => {
		if ($pressed && (search == undefined || search == '')) {
			searched.set($recipes.filter((recipe) => recipe.data.category.includes($pressed)));
		} else if ($pressed && search) {
			handleSearch();
		} else if (!$pressed && search) {
			handleSearch();
		} else if (!$pressed && (search == undefined || search == '')) {
			searched.set({});
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
	{#if $recipes.length == 0}
		<div class="flex flex-col w-full items-center justify-center">
			<div class="flex h-9 w-32 my-4 rounded-full bg-accent animate-pulse" />
			<div class="flex bg-accent w-full h-10 rounded-lg animate-pulse" />
		</div>
	{:else}
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
	{/if}
</div>

<div class="filters">
	{#if $categories.length == 0}
		<LoadingCategoriesCarousel />
	{:else}
		<div class="carousel carousel-center space-x-2 py-4 px-4 bg-trasparent">
			{#each $categories as category}
				<CategoriesCarousel {category} />
			{/each}
		</div>
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
