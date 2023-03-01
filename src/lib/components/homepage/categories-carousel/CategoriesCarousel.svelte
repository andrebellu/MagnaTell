<script>
	import { pressed } from '../../../../routes/stores/store';
	import { recipes } from '../../../../routes/stores/store';
	import { recipesFound } from '../../../../routes/stores/store';

	export let category;
	let active = false;

	const handleOnClick = (e) => {
		toggleActive();
		recipesFound.set(0);

		pressed.update((pressed) => {
			return e;
		});

		for (const recipe of $recipes) {
			if (recipe.data.category.includes(e)) {
				recipesFound.update((recipesFound) => {
					return recipesFound + 1;
				});
			}
		}
	};

	const toggleActive = () => {
		active = !active;
	};
</script>

<div
	class="flex flex-col carousel-item w-20 h-32 bg-accent rounded-box active:scale-105 transition-all duration-300 {active
		? 'bg-black'
		: 'bg-accent'}"
	on:click={() => handleOnClick(category.name)}
	on:keydown={handleOnClick}
>
	<div class="px-3 py-2">
		<img src="/category-1.svg" alt="icon" width="64" height="64" />
	</div>
	<div class="flex flex-col justify-end font-poppins text-accent-content	 items-center w-full font-semibold">
		<h1 class="text-center">{category.name}</h1>
	</div>
</div>
