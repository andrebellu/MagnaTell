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

	import Cube from "phosphor-svelte/lib/Cube";

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

<Cube class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size="64" />

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
