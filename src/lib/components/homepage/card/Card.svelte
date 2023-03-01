<script>
	export let recipe;
</script>

<a
	class="card w-40 h-40 card-bordered bg-white rounded-3xl border-4 border-accent"
	href="/recipes/{recipe.id}"
>
	<img src={recipe.data.cover} alt="img" class="rounded-t-3xl h-20 object-cover" />
	<div class="body px-2 py-1 outline-4 text-accent-content">
		<div class="title flex items-center justify-between mb-2">
			<h1 class="font-semibold truncate text-lg overflow-hidden text-ellipsis mr-2">
				{recipe.data.title}
			</h1>
			<div class="flex flex-row text-sm font-poppins">
				4,8
				<div class="material-icons text-sm text-yellow-500">grade</div>
			</div>
		</div>
		<div class="pong flex items-center justify-between flex-row-reverse">
			<p class="text-3xl font-semibold leading-none">
				{#if recipe.data.difficulty == 'easy'}
					<div class="text-green-600">•</div>
				{:else if recipe.data.difficulty == 'medium'}
					<div class="text-amber-500">••</div>
				{:else}
					<div class="text-red-600">•••</div>
				{/if}
			</p>
			<h2 class="text-xs truncate mr-4">@{recipe.data.author}</h2>
		</div>
	</div>
</a>
