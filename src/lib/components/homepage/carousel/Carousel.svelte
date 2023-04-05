<script>
	import { recipes } from '../../../../routes/stores/store';
	import CardCarousel from '$lib/components/homepage/carousel/CardCarousel.svelte';
	import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';

	let totalAverage = 0;

	onValue(ref(realDB, 'recipes-grade/'), (snapshot) => {
		if (snapshot.val()) {
			totalAverage = 0;
			const recipes = Object.values(snapshot.val())
			recipes.forEach((r) => {
				if(r.average!=undefined){
					totalAverage += r.average;
				}
			});
			totalAverage /= recipes.length
		}
	});
</script>

<div class="carousel carousel-center px-4 py-2 space-x-4">
	{#each $recipes as recipe}
		<CardCarousel {recipe} {totalAverage} />
	{/each}
</div>