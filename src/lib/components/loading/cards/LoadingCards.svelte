<script>
  import LoadingCard from '$lib/components/loading/card/LoadingCard.svelte';
</script>

<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">
  <div class="pl-2 flex flex-col gap-4 md:flex-row">
    {#each [1, 2, 3, 4, 5, 6] as x}
      <LoadingCard />
    {/each}
  </div>
  <div class="pr-4 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">
    <div class="w-40 h-10 animate-pulse bg-gray-200 rounded-3xl dark:bg-accent"></div>
    {#each [1, 2, 3, 4, 5, 6] as x}
      <LoadingCard />
    {/each}
  </div>
</div>