<script>
	import { recipes } from '../../../../routes/stores/store';
	import Card from '$lib/components/homepage/card/Card.svelte';
	import Filters from '$lib/components/homepage/filters/Filters.svelte';
	import LoadingFilters from '$lib/components/loading/filters/LoadingFilters.svelte';
	import LoadingCards from '$lib/components/loading/cards/LoadingCards.svelte';
</script>

<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
	{#if $recipes.length == 0}
		<LoadingCards />
	{:else}
		<div class="pl-2 flex flex-col gap-4 md:flex-row">
			{#each $recipes as recipe}
				{#if $recipes.indexOf(recipe) % 2 == 0}
					<Card {recipe} />
				{/if}
			{/each}
		</div>

		<div class="pr-2 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
			<Filters />
			{#each $recipes as recipe}
				{#if $recipes.indexOf(recipe) % 2 != 0}
					<Card {recipe} />
				{/if}
			{/each}
		</div>
	{/if}
</div>
