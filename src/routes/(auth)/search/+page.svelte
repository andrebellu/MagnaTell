<script>
	import { recipes, categories, searched } from '../../stores/store';

	import Card from '$lib/components/homepage/card/Card.svelte';
	import LoadingCards from '$lib/components/loading/cards/LoadingCards.svelte';

	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase.client';


	let search;

	onMount(async () => {
		recipes.set([]);
		categories.set([]);

		const querySnapshot = await getDocs(collection(db, 'recipes'));
		querySnapshot.forEach((doc) => {
			recipes.update((recipes) => [
				...recipes,
				{
					id: doc.id,
					data: doc.data()
				}
			]);
		});

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

	const handleSearch = () => {
		searched.set(
			$recipes.filter((recipe) => recipe.data.title.toLowerCase().includes(search.toLowerCase()))
		);
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

	<div class="search flex flex-row flex-wrap justify-center gap-y-4 gap-x-4 pt-4 pb-4">
		{#if $recipes.length == 0}
			<LoadingCards />
		{:else if $searched.length > 0}
			{#each $searched as recipe}
				<Card {recipe} />
			{/each}
		{:else if $searched.length < 1}
			<h1 class="opacity-0 hidden">No recipes found</h1>
			{#each $recipes as recipe}
				<Card {recipe} />
			{/each}
		{/if}
	</div>
</div>
