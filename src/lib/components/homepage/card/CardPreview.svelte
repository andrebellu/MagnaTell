<script>
	export let recipe;
	export let cover;

	console.log(recipe);

	let user = JSON.parse(
		localStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
	);
</script>

<!-- change text font after implementation of the new font-->

<div class="rounded-3xl flex flex-col items-center -mb-16">
	<img
		src={cover}
		alt="img"
		class="rounded-3xl h-32 w-32 object-cover z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
	/>
	<div class="card bg-accent z-0 w-40 h-40 flex justify-end -translate-y-16">
		<div class="body px-4 pb-1 text-accent-content flex flex-col gap-y-2 -translate-y-1">
			<div class="title flex justify-between gap-x-1">
				<div class="flex flex-col overflow-hidden text-ellipsis">
					<h1 class="font-bold text-lg truncate">
						{recipe.title}
					</h1>
					<div class="flex flex-row gap-x-1">
						<h1 class="font-semibold text-xs">Chef</h1>
						<h1 class="font-medium text-xs truncate">{user.displayName}</h1>
					</div>
				</div>
				<div class="material-symbols-outlined text-lg">bookmark</div>
			</div>
			<div class="valutation flex justify-between items-center">
				<p class="text-2xl font-semibold leading-none">
					{#if recipe.difficulty == 'easy'}
						<div class="text-green-800">•</div>
					{:else if recipe.difficulty == 'medium'}
						<div class="text-amber-500">••</div>
						<div class="text-red-600">•••</div>
					{/if}
				</p>
				<div class="flex flex-row text-xs font-poppins font-normal">
					4,8
					<div class="material-icons text-xs text-yellow-500">grade</div>
				</div>
			</div>
		</div>
	</div>
</div>
