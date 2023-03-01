<script>
	import { recipesFound } from "../../../../routes/stores/store";
</script>

<div class="card w-40 h-10 card-bordered border-4 border-accent bg-white flex rounded-full flex-row justify-between items-center">
	<h2 class="card-title pl-2 font-semibold font-poppins text-accent-content text-sm">Recipes found</h2>
	<div class="card w-10 h-10 bg-accent rounded-full flex justify-center items-center translate-x-1">
		<h2 class="card-title text-accent-content font-bold font-poppins text-lg">{$recipesFound}</h2>
	</div>
</div>
