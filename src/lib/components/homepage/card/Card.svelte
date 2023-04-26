<script>
	import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';
	import { db } from '$lib/firebase/firebase.client';
	import { Trash, Star } from 'phosphor-svelte';
	import { doc, deleteDoc } from 'firebase/firestore';

	export let recipe;
	export let totalAverage;
	export let profile;

	let grade = 0;
	let wheightedRating = 0;
	let minVotes = 3;
	export let bg_color;
	onValue(ref(realDB, 'recipes-grade/' + recipe.id), (snapshot) => {
		if (snapshot.val()) {
			grade = 0;
			wheightedRating = 0;
			grade = snapshot.val().average;
			const numberVotes = Object.values(snapshot.val().stars).length;
			wheightedRating = (
				(numberVotes / (numberVotes + minVotes)) * grade +
				(1 / (numberVotes + minVotes)) * totalAverage
			).toFixed(1);
		}
	});

	const removeRecipe = () => {
		console.log('remove');
		console.log(recipe.id);
		deleteDoc(doc(db, 'recipes', recipe.id));

		window.location.reload();
	};
	/*
		weighted-rating = (v / (v + m)) * R + (m / (v + m)) * C
		dove:
		R = la media dei voti per l'elemento (es. la media dei voti di un prodotto)
		v = il numero di voti per l'elemento (es. il numero di voti ricevuti per un prodotto)
		m = il numero minimo di voti richiesti per apparire nella classifica (può essere scelto a piacere)
		C = la media dei voti di tutti gli elementi (es. la media dei voti di tutti i prodotti)
	*/
</script>

<!-- The button to open modal -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="remove" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">
			You are going to <strong>permanently</strong> remove your recipe!
		</p>
		<div class="modal-action">
			<label for="" on:click={removeRecipe} on:keyup class="btn">Yes</label>
			<label for="remove" class="btn">No</label>
		</div>
	</div>
</div>

<!-- change text font after implementation of the new font-->

{#if profile == true}
	<label
		for="remove"
		class="trash p-1 text-red-700 flex items-center justify-center absolute z-50 left-28 right-1 top-36"
	>
		<Trash size={24} />
	</label>
{/if}

<a class="rounded-3xl flex flex-col items-center -mb-16 z-10" href="/recipes/{recipe.id}">
	<img
		src={recipe.cover}
		alt="img"
		class="rounded-3xl h-32 w-32 object-cover z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
	/>
	<div class="card bg-{bg_color} z-0 w-40 h-40 flex justify-end -translate-y-16">
		<div class="body px-4 pb-1 text-accent-content flex flex-col gap-y-2 -translate-y-1">
			<div class="title flex justify-between gap-x-1">
				<div class="flex flex-col overflow-hidden text-ellipsis">
					<h1 class="font-bold text-lg truncate">
						{recipe.data.title}
					</h1>
					<div class="flex flex-row gap-x-1">
						<h1 class="font-semibold text-xs">Chef</h1>
						<h1 class="font-medium text-xs truncate">
							{recipe.data.author}
						</h1>
					</div>
				</div>
			</div>
			<div class="valutation flex justify-between items-center">
				<p class="text-2xl font-semibold leading-none">
					{#if recipe.data.difficulty == 'easy'}
						<div class="text-green-800">•</div>
					{:else if recipe.data.difficulty == 'medium'}
						<div class="text-amber-500">••</div>
					{:else}
						<div class="text-red-600">•••</div>
					{/if}
				</p>
				<div class="flex flex-row text-xs font-poppins font-normal items-center">
					{wheightedRating}
					<div class="text-xs text-yellow-500"><Star weight="fill" /></div>
				</div>
			</div>
		</div>
	</div>
</a>
