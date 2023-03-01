<script>
	import Carousel from '$lib/components/homepage/carousel/Carousel.svelte';

	import LoadingCarousel from '$lib/components/loading/carousel/LoadingCarousel.svelte';

	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	import { db } from '$lib/firebase/firebase.client';

	import { recipes, categories, pressed } from '../../stores/store';

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
	<div>
		<!-- {#if $categories.length == 0}
			<div role="status" class="max-w-sm animate-pulse">
				<div class="h-8 w-32 mt-5 mx-4 bg-gray-200 rounded-full dark:bg-accent" />
				<span class="sr-only">Loading...</span>
			</div>
			<LoadingCategoriesCarousel />
		{:else}
			<h1 class="text-3xl font-cormorant font-bold pt-4 px-4">Categories</h1>
			<div class="carousel carousel-center space-x-2 py-4 px-4 bg-trasparent">
				{#each $categories as category}
					<CategoriesCarousel {category} />
				{/each}
			</div>
		{/if} -->
	</div>
</div>
