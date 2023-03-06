<script>
	import { recipes } from '../../../../routes/stores/store';
	import CardCarousel from '$lib/components/homepage/carousel/CardCarousel.svelte';
</script>

<div class="carousel carousel-center px-4 py-2 space-x-4">
	{#each $recipes as recipe}
		<CardCarousel {recipe} />
	{/each}
</div>