<script>
	import Carousel from '$lib/components/homepage/carousel/Carousel.svelte';
	import LoadingCarousel from '$lib/components/loading/carousel/LoadingCarousel.svelte';

	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	import { db } from '$lib/firebase/firebase.client';

	import { recipes, categories } from '../../stores/store';
	import Cards from '../../../lib/components/homepage/cards/Cards.svelte';

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
</script>

<div class="homepage">
	<div class="car">
		{#if $recipes.length == 0}
			<LoadingCarousel />
		{:else}
			<Carousel />
		{/if}
	</div>

	<div class="cards pb-4 px-4">
		<h1 class="text-3xl font-cormorant font-bold py-4">Recommended</h1>

		<Cards />
	</div>
</div>
