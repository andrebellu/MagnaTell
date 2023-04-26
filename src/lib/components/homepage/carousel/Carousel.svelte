<script>
	import { recipes, featuredRecipes } from '../../../../routes/stores/store';
	import CardCarousel from '$lib/components/homepage/carousel/CardCarousel.svelte';
	import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';

	let totalAverage = 0;

	onValue(ref(realDB, 'recipes-grade/'), (snapshot) => {
		if (snapshot.val()) {
			totalAverage = 0;
			const recipes = Object.values(snapshot.val());
			recipes.forEach((r) => {
				if (r.average != undefined) {
					totalAverage += r.average;
				}
			});
			totalAverage /= recipes.length;
		}
	});

	let grade = 0;
	let wheightedRating = 0;
	let minVotes = 3;

	onValue(ref(realDB, 'recipes-grade/'), (snapshot) => {
		featuredRecipes.set([]);
		if (snapshot.val()) {
			for (let i = 0; i < $recipes.length; i++) {
				grade = 0;
				wheightedRating = 0;
				grade = snapshot.val()[$recipes[i].id].average;
				const numberVotes = Object.values(snapshot.val()[$recipes[i].id].stars).length;
				wheightedRating = (
					(numberVotes / (numberVotes + minVotes)) * grade +
					(1 / (numberVotes + minVotes)) * totalAverage
				).toFixed(1);
				featuredRecipes.update((featuredRecipe) => [
					...featuredRecipe,
					{
						id: $recipes[i].id,
						data: $recipes[i].data,
						cover: $recipes[i].cover,
						rating: wheightedRating
					}
				])
			}
		}
	});
	/*
		weighted-rating = (v / (v + m)) * R + (m / (v + m)) * C
		dove:
		R = la media dei voti per l'elemento (es. la media dei voti di un prodotto)
		v = il numero di voti per l'elemento (es. il numero di voti ricevuti per un prodotto)
		m = il numero minimo di voti richiesti per apparire nella classifica (può essere scelto a piacere)
		C = la media dei voti di tutti gli elementi (es. la media dei voti di tutti i prodotti)
	*/
</script>

<div class="carousel carousel-center px-4 py-2 space-x-4">
	{#each $recipes as recipe}
		
			<CardCarousel {recipe} {totalAverage} />
	{/each}
</div>
