<script>
	import { realDB } from '$lib/firebase/firebase.client';
	import { onValue, ref } from 'firebase/database';
	export let recipe;
	import BookmarkSimple from 'phosphor-svelte/lib/BookmarkSimple';
	import Star from 'phosphor-svelte/lib/Star';

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

<!-- change text font after implementation of the new font-->

<a class="rounded-3xl flex flex-col items-center -mb-16" href="/recipes/{recipe.id}">
	<img
		src={recipe.cover}
		alt="img"
		class="rounded-3xl h-32 w-32 object-cover z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
	/>
	<div class="card bg-accent z-0 w-40 h-40 flex justify-end -translate-y-16">
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
				<div class="text-lg"><BookmarkSimple /></div>
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
					{grade}
					<div class="text-xs text-yellow-500"><Star weight="fill" /></div>
				</div>
			</div>
		</div>
	</div>
</a>
