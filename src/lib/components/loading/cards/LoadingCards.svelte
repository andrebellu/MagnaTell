<script>
  import LoadingCard from '$lib/components/loading/card/LoadingCard.svelte';
  import LoadingFilters from '$lib/components/loading/filters/LoadingFilters.svelte';
</script>

<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
		<div class="pl-2 flex flex-col gap-4 md:flex-row">
      {#each [1, 2, 3, 4, 5, 6] as x}
        <LoadingCard />
      {/each}
		</div>

		<div class="pr-2 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
			<LoadingFilters />
      {#each [1, 2, 3, 4, 5, 6] as x}
        <LoadingCard />
      {/each}
		</div>
</div>

<!-- <div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
  <div class="pl-2 flex flex-col gap-4 md:flex-row">
    {#each [1, 2, 3, 4, 5, 6] as x}
      <LoadingCard />
    {/each}
  </div>
  <div class="pr-4 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
    {#each [1, 2, 3, 4, 5, 6] as x}
      <LoadingCard />
    {/each}
  </div>
</div> -->