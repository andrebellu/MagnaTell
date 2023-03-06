<script>
    import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';
	export let recipe;

	let grade = 0;
	onValue(ref(realDB, 'recipes-grade/' + recipe.id), (snapshot) => {
		if (snapshot.val()) {
			grade = 0;
			const stars = Object.values(snapshot.val().stars)
			stars.forEach((star) => {
				grade += star;
			});
			grade = (grade / stars.length).toFixed(1);
		}
	});
</script>

<div class="carousel-home" style="background:url({recipe.cover})">
    <a href="/recipes/{recipe.id}">
        <div class="carousel-home bg-gradient-to-t from-secondary to-transparent">
            <div class="px-4 pb-4 text-white flex flex-col-reverse w-full">
                <div class="flex justify-between items-center">
                    <div class="text-sm font-poppins">{recipe.data.category.join(', ')}</div>
                    <div class="flex flex-row text-sm text-white font-poppins">
                        {grade}
                        <div class="material-icons text-sm text-yellow-500">grade</div>
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