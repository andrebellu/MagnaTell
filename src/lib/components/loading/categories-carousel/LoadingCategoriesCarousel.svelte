<div class="carousel carousel-center space-x-2 py-4 px-4 bg-transparent">
	{#each [1, 2, 3, 4, 5, 6] as x}
    <div class="flex flex-col carousel-item w-20 h-32 animate-pulse bg-gray-200 dark:bg-accent rounded-box"></div>
    <span class="sr-only">Loading...</span>
	{/each}
</div>