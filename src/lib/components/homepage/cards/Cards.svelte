<script>
	import { recipes } from '../../../../routes/stores/store';
	import Card from '$lib/components/homepage/card/Card.svelte';
	import Fire from 'phosphor-svelte/lib/Fire';
	import Eye from 'phosphor-svelte/lib/Eye';
	import TrendUp from 'phosphor-svelte/lib/TrendUp';
</script>

<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
	<div class="pl-2 flex flex-col gap-4 md:flex-row">
		{#each $recipes as recipe}
			{#if $recipes.indexOf(recipe) % 2 == 0}
				<Card {recipe}/>
			{/if}
		{/each}
	</div>

	<div class="pr-2 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
		<div class="filters flex gap-x-1 py-2">
			<span class="badge rounded-r-lg p-4 text-xl text-secondary">
				<Fire/>
			</span>
			<span class="badge rounded-lg p-4 text-xl text-secondary"> <Eye /> </span>
			<span class="badge rounded-l-lg p-4 text-xl text-secondary"> <TrendUp /> </span>
		</div>
		{#each $recipes as recipe}
			{#if $recipes.indexOf(recipe) % 2 != 0}
				<Card {recipe}/>
			{/if}
		{/each}
	</div>
</div>
