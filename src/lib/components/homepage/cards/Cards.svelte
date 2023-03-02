<script>
	import RecipesFound from '../recipesFound/recipesFound.svelte';
	import { recipes, pressed } from '../../../../routes/stores/store';
	import Card from '$lib/components/homepage/card/Card.svelte';
</script>

<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
	<div class="pl-2 flex flex-col gap-4 md:flex-row">
		{#each $recipes as recipe}
			{#if $recipes.indexOf(recipe) % 2 == 0}
				<Card {recipe} />
			{/if}
		{/each}
	</div>

	<div class="pr-4 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
		<!--<RecipesFound />-->
		{#each $recipes as recipe}
			{#if $recipes.indexOf(recipe) % 2 != 0}
				<Card {recipe} />
			{/if}
		{/each}
	</div>
</div>
