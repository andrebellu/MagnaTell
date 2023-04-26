<script>
    import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';
	export let recipe;
	export let totalAverage;
	import Star from 'phosphor-svelte/lib/Star';

	let grade = 0;
	let wheightedRating = 0;
	let minVotes = 3;

	onValue(ref(realDB, 'recipes-grade/' + recipe.id), (snapshot) => {
		if (snapshot.val()) {
			grade = 0;
			wheightedRating = 0;
			grade = snapshot.val().average;
			const numberVotes = Object.values(snapshot.val().stars).length;
			wheightedRating = ((numberVotes / (numberVotes + minVotes)) * grade + (1 / (numberVotes + minVotes)) * totalAverage).toFixed(1);
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

<div class="carousel-home" style="background:url({recipe.cover})">
    <a href="/recipes/{recipe.id}">
        <div class="carousel-home bg-gradient-to-t from-secondary to-transparent">
            <div class="px-4 pb-4 text-white flex flex-col-reverse w-full">
                <div class="flex justify-between items-center">
                    <div class="text-sm font-poppins">{recipe.data.category.join(', ')}</div>
                    <div class="flex flex-row text-sm text-white font-poppins items-center">
                        {wheightedRating}
                        <div class="text-sm text-yellow-500"><Star weight="fill" /></div>
                    </div>
                </div>
                <div class="text-2xl font-bold font-cormorant leading-6">{recipe.data.title}</div>
            </div>
        </div>
    </a>
</div>

<style>
	.carousel-home {
		background-size: cover !important;
		background-position: center !important;
	}
</style>