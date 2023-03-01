<!-- <div class="flex">
  <div role="status" class="max-w-sm animate-pulse">
    <div class="h-40 w-40 bg-gray-200 rounded-3xl dark:bg-accent"></div>
    <span class="sr-only">Loading...</span>
  </div>
</div> -->

<div role="status" class="recipe p-4 animate-pulse">
  <div class="flex flex-row justify-center">
    <div class="h-12 w-64 bg-gray-200 rounded-3xl dark:bg-accent"></div>
  </div>

  <div class="flex flex-row justify-center">
    {#each [1, 2] as category}
      <div class="h-5 w-16 bg-gray-200 rounded-3xl dark:bg-accent mx-1 my-2"></div>
    {/each}
  </div>

  <div class="w-full h-40 bg-gray-200 dark:bg-accent rounded-xl mb-2" />

  <div class="w-80 h-8 bg-gray-200 rounded-3xl dark:bg-accent mt-6 mb-1"></div>
  <div class="w-32 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  <div class="w-36 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  <div class="w-28 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  <div class="w-44 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  
  <div class="w-32 h-5 bg-gray-200 rounded-3xl dark:bg-accent mt-7 mb-1"></div>
  <div class="w-full h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  <div class="w-full h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  <div class="w-full h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-2 mb-1"></div>
  
  <div class="w-44 h-8 bg-gray-200 rounded-3xl dark:bg-accent mt-8 mb-1"></div>
  <div class="ingredients pt-1">
    {#each [1, 2, 3, 4] as ingredient}
      <div class="grid grid-cols-2 grid-rows-1 gap-2">
        <div class="w-24 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-1 mb-1"></div>
        <div class="w-12 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-1 mb-1"></div>
      </div>
    {/each}
  </div>

  <div class="w-44 h-8 bg-gray-200 rounded-3xl dark:bg-accent mt-7 mb-2"></div>

  {#each [1, 2, 3] as step}
    <div class="w-64 h-4 bg-gray-200 rounded-3xl dark:bg-accent mt-1 mb-2"></div>
  {/each}
  
  <div class="w-44 h-8 bg-gray-200 rounded-3xl dark:bg-accent mt-8 mb-1"></div>
</div>