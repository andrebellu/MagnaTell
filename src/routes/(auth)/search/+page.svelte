<script>
	import { recipes, searched } from '../../stores/store';
	import Card from '$lib/components/homepage/card/Card.svelte';

	let search;

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
		{#if $searched.length > 0}
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
