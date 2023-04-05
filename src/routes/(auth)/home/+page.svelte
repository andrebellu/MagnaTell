<script>
	import Carousel from '$lib/components/homepage/carousel/Carousel.svelte';
	import LoadingCarousel from '$lib/components/loading/carousel/LoadingCarousel.svelte';

	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	import { db } from '$lib/firebase/firebase.client';

	import { recipes, categories } from '../../stores/store';
	import Cards from '../../../lib/components/homepage/cards/Cards.svelte';

	import { storage } from '$lib/firebase/firebase.client';
	import { ref, getDownloadURL } from 'firebase/storage';
	import LoadingFilters from '../../../lib/components/loading/filters/LoadingFilters.svelte';

	let cover;

	onMount(async () => {
		recipes.set([]);
		categories.set([]);

		const querySnapshot = await getDocs(collection(db, 'recipes'));
		for (let i = 0; i < querySnapshot.docs.length; i++) {
			try {
				await getDownloadURL(ref(storage, 'recipes-covers/' + querySnapshot.docs[i].id)).then(
					(url) => {
						cover = url;
					}
				);
			} catch {
				cover = '/no-image.jpg';
			}
			recipes.update((recipes) => [
				...recipes,
				{
					id: querySnapshot.docs[i].id,
					data: querySnapshot.docs[i].data(),
					cover
				}
			]);
		}

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
		{#if $recipes.length == 0}
			<div class="flex bg-accent animate-pulse h-8 w-44 my-4 rounded-3xl" />
		{:else}
			<h1 class="text-3xl font-cormorant font-bold py-4">Recommended</h1>
		{/if}
		<Cards />
	</div>
</div>
