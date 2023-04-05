<div class="carousel carousel-center px-4 py-2 space-x-4 ">
	{#each [1, 2, 3, 4, 5, 6] as x}
		<div
			class="flex flex-col carousel-item w-80 h-40 animate-pulse bg-accent rounded-box"
		/>
		<span class="sr-only">Loading...</span>
	{/each}
</div>
