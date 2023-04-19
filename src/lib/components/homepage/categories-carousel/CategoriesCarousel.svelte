<script>
	import { pressed } from '../../../../routes/stores/store';
	import { recipes } from '../../../../routes/stores/store';
	import { recipesFound, active } from '../../../../routes/stores/store';
	import Leaf from 'phosphor-svelte/lib/Leaf';
	import Brandy from 'phosphor-svelte/lib/Brandy';
	import FishSimple from 'phosphor-svelte/lib/FishSimple';
	import ForkKnife from 'phosphor-svelte/lib/ForkKnife';
	import Egg from 'phosphor-svelte/lib/Egg';
	import CookingPot from 'phosphor-svelte/lib/CookingPot';
	import Pizza from 'phosphor-svelte/lib/Pizza';
	import Pepper from '$lib/components/icons/Pepper/Pepper.svelte';
	import Question from 'phosphor-svelte/lib/Question';

	export let category;
	let icon = category.icon;

	const handleOnClick = (e) => {
		recipesFound.set(0);
		console.log(icon);

		pressed.update((pressed) => {
			if (pressed == e) {
				return '';
			} else {
				return e;
			}
		});

		active.update((active) => {
			if (active == e) {
				return '';
			} else {
				return e;
			}
		});

		for (const recipe of $recipes) {
			if (recipe.data.category.includes(e)) {
				recipesFound.update((recipesFound) => {
					return recipesFound + 1;
				});
			}
		}
	};
</script>

<!-- <div
	class="flex flex-col carousel-item w-20 h-32 bg-accent rounded-box transition-all duration-300 [&.active]:bg-secondary [&.active]:scale-110"
	class:active={$active == category.name}
	on:click={() => handleOnClick(category.name)}
	on:keydown={handleOnClick}
>
	<div class="px-3 py-2">
		<Leaf class="bg-white rounded-full text" size={32} />
	</div>
	<div
		class="flex flex-col justify-end font-poppins text-accent-content items-center w-full font-semibold overflow-hidden text-ellipsis"
	>
		<h1 class="text-center [&.active]:text-white" class:active={$active == category.name}>
			{category.name}
		</h1>
	</div>
</div> -->

<div
	class="flex justify-center items-center carousel-item w-32 p-2 h-8 bg-accent rounded-box transition-all duration-300 [&.active]:bg-secondary [&.active]:scale-105 cursor-pointer"
	class:active={$active == category.name}
	on:click={() => handleOnClick(category.name)}
	on:keydown={handleOnClick}
>
	<div class="flex items-center w-32">
		<div class="icon mr-2">
			{#if icon == 'Leaf'}
				<Leaf class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'Brandy'}
				<Brandy class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'FishSimple'}
				<FishSimple class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'ForkKnife'}
				<ForkKnife class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'Egg'}
				<Egg class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'CookingPot'}
				<CookingPot class="bg-white rounded-box p-1" size={38} />
			{:else if icon == 'Pizza'}
				<Pizza class="bg-white rounded-box p-1" size={38} />
			{:else if (icon = 'Pepper')}
				<Pepper />
			{:else}
				<Question class="bg-white rounded-box p-1" size={38} />
			{/if}
		</div>

		<div class="title">
			<h1
				class="whitespace-nowrap overflow-hidden text-ellipsis truncate text-left [&.active]:text-white text-black [&.active]:font-bold transition-all duration-300 w-20"
				class:active={$active == category.name}
			>
				{category.name}
			</h1>
		</div>
	</div>
</div>
