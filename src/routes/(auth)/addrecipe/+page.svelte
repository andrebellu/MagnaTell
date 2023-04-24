<script>
	import { categories, title_store, difficulty_store, recipes } from './../../stores/store.js';
	import { collection, addDoc, getDocs } from 'firebase/firestore';

	import { db, storage } from '$lib/firebase/firebase.client';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

	import { writable } from 'svelte/store';

	import { onMount } from 'svelte';

	import { authHandlers } from '../../stores/authStore.js';

	import CardPreview from '../../../lib/components/homepage/card/CardPreview.svelte';
	import {
		Lightbulb,
		ChartBar,
		ChartPieSlice,
		Alarm,
		Plus,
		Eyeglasses,
		SmileyWink
	} from 'phosphor-svelte/lib';

	$: $title_store = title;
	$: $difficulty_store = difficulty;

	let user = '';
	let uid = '';
	let cover = '/no-image.jpg';
	let title = '';
	let author = '';
	let link = '';
	let category = writable([]);
	let difficulty = '';
	let time = '';
	let description = '';
	let ingredients = writable([]);
	let steps = '';
	let portions = '';
	let hasCover = false;
	let storageRef;
	let metadata;
	let coverUrl = '';

	let ingredient = '';
	let quantity = '';
	let singleCategory = '';

	let success = false;

	onMount(async () => {
		categories.set([]);

		const categoriesQuery = await getDocs(collection(db, 'categories'));
		categoriesQuery.forEach((doc) => {
			categories.update((categories) => [
				...categories,
				{
					id: doc.id,
					name: doc.data().name
				}
			]);
		});

		user = JSON.parse(
			sessionStorage.getItem('firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT')
		);
	});

	const clear = () => {
		uid = '';
		title = '';
		author = '';
		link = '';
		category = writable([]);
		difficulty = '';
		time = '';
		description = '';
		ingredients = writable([]);
		steps = '';
		portions = '';
		hasCover = false;
	};

	async function addRecipe() {
		if (!user.emailVerified) {
			document.getElementById('notVerified').checked = true;
			return;
		}

		author = user.displayName;
		uid = user.uid;
		try {
			const docRef = await addDoc(collection(db, 'recipes'), {
				uid,
				title,
				author,
				link,
				category: $category,
				difficulty,
				time,
				description,
				ingredients: $ingredients,
				steps,
				portions,
				hasCover
			});

			if (document.getElementById('cover').files.length != 0) {
				cover = document.getElementById('cover').files[0];
				storageRef = ref(storage, 'recipes-covers/' + docRef.id);
				metadata = {
					contentType: cover.type
				};
				await uploadBytes(storageRef, cover, metadata);
				coverUrl = await getDownloadURL(storageRef);
			}

			success = true;
			document.getElementById('recipeAddedModal').checked = true;

			recipes.update((recipes) => [
				...recipes,
				{
					id: docRef.id,
					data: {
						uid,
						title,
						author,
						link,
						category: $category,
						difficulty,
						time,
						description,
						ingredients: $ingredients,
						steps,
						portions,
						hasCover
					},
					cover: coverUrl
				}
			]);

			clear();
		} catch (e) {
			document.getElementById('recipeAddedModal').checked = true;
			console.log('Error adding document: ', e);
			success = false;
		}
	}

	const checkIngredients = () => {
		if (ingredient == '' || quantity == '') {
			return;
		}

		ingredients.update((ingredients) => [...ingredients, { ingredient, quantity }]);

		ingredient = '';
		quantity = '';
	};

	const checkCategories = () => {
		if (singleCategory == '' || $category.includes(singleCategory)) {
			return;
		}

		category.update((category) => [...category, singleCategory]);
		singleCategory = '';
	};

	let colors = [
		'badge-primary',
		'badge-secondary',
		'badge-accent',
		'badge-success',
		'badge-info',
		'badge-warning',
		'badge-error',
		'badge-neutral'
	];

	const handle_category = (name) => {
		let index = $category.indexOf(name);
		category.update((data) => {
			if (data.length === 1) {
				return (data = []);
			} else {
				data.splice(index, 1);
				return data;
			}
		});
	};

	const handle_ingredients = (name) => {
		let index = $ingredients.indexOf(name);
		ingredients.update((data) => {
			if (data.length === 1) {
				return (data = []);
			} else {
				data.splice(index, 1);
				return data;
			}
		});
	};

	const handleFileSelect = (e) => {
		cover = e.target.files[0];
		if (cover) {
			let reader = new FileReader();
			reader.onload = (e) => {
				cover = e.target.result;
			};
			reader.readAsDataURL(cover);
			hasCover = true;
		}
	};
</script>

<!-- Category modal -->
<input type="checkbox" id="categories" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<label for="categories" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<!-- categories to display -->
		<h1 class="font-bold text-2xl font-cormorant">Categories</h1>
		<div class="badges flex flex-row flex-wrap gap-x-2 gap-y-1">
			{#if $category.length === 0}
				<p class="text-gray-400">No categories selected</p>
			{/if}
			{#each $category as category}
				<div
					class="badge {colors[
						Math.floor(Math.random() * colors.length)
					]} truncate cursor-pointer group"
					on:keypress
					on:click={() => handle_category(category)}
				>
					{category}
					<p class="group-hover:text-secondary">&nbsp x</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- Time -->
<input type="checkbox" id="time" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<label for="time" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Preparation time</h1>
		<h1 class="text-gray-400">Minutes</h1>

		<input
			class="input-addrecipe"
			placeholder="20"
			type="number"
			name="time"
			id="time"
			step="1"
			min="1"
			max="999"
			bind:value={time}
		/>
	</div>
</div>

<!-- Difficulty -->
<input type="checkbox" id="difficulty" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<label for="difficulty" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Difficulty</h1>
		<select
			class="select select-sm border-accent border-2 bg-white outline-none focus:outline-none"
			name="difficulty"
			id="difficulty"
			bind:value={difficulty}
		>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>
	</div>
</div>

<!--Portions -->
<input type="checkbox" id="portions" class="modal-toggle" />
<div class="modal">
	<div class="modal-box relative">
		<label for="portions" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Portions</h1>

		<input
			class="input-addrecipe"
			placeholder="4"
			type="number"
			name="portions"
			id="portions"
			step="1"
			min="1"
			max="99"
			bind:value={portions}
		/>
	</div>
</div>

<input type="checkbox" id="notVerified" class="modal-toggle" />
<div class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">
			Your account is <span class="underline underline-offset-4 font-bold">not verified!</span>
		</h3>
		<p class="py-4">
			To add a recipe you need to verify your email. <br /> Please check your inbox and click on the
			link we sent you.
		</p>
		<div class="modal-action">
			<label for="notVerified" class="btn" on:click={authHandlers.sendVerificationEmail} on:keypress
				>Ok!</label
			>
		</div>
	</div>
</div>

<input type="checkbox" id="recipeAddedModal" class="modal-toggle" />
<label for="recipeAddedModal" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		{#if success}
			<div class="body flex flex-col justify-center">
				<h1 class="text-3xl font-bold text-center">Recipe added!</h1>
				<label for="recipeAddedModal" class="btn btn-sm mx-10 mt-5">Close</label>
			</div>
		{:else}
			<div class="body flex flex-col justify-center">
				<h1 class="text-3xl font-bold text-center">Something went wrong</h1>
				<label for="recipeAddedModal" class="btn btn-sm mx-10 mt-5">Close</label>
			</div>
		{/if}
	</label>
</label>

<div class="add w-full px-10 gap-y-2 grid grid-rows-1 grid-cols-1 items-center py-4">
	<h1 class="text-3xl font-bold font-cormorant">Add a recipe</h1>

	<div class="first-stage flex flex-row">
		<!--LEFT CONTAINER-->
		<div class="cover-box w-1/2">
			{#if cover}
				<img class="w-32 h-32 rounded-xl mb-1 object-cover" src={cover} alt="" />
			{:else}
				<img class="w-32 h-32 rounded-xl mb-1" src="/assets/recipe-placeholder.png" alt="" />
			{/if}
			<input
				class="file-input hidden"
				type="file"
				name="cover"
				id="cover"
				accept="image/*"
				bind:value={cover}
				on:change={handleFileSelect}
			/>
			<input
				class="btn w-32 h-8"
				type="button"
				value="Browse..."
				onclick="document.getElementById('cover').click();"
			/>
		</div>

		<!--RIGHT CONTAINER-->
		<div class="briefing-box w-1/2">
			<input
				class="input-addrecipe rounded-3xl w-full outline-none focus:outline-none mb-1 h-10"
				placeholder="Title"
				type="text"
				name="title"
				id="title"
				bind:value={title}
			/>

			<div class="flex flex-col">
				<div class="flex justify-between items-center mb-1">
					<select
						class="input-addrecipe rounded-l-3xl rounded-r-xl w-full outline-none focus:outline-none h-10 mr-1 p-2"
						name="category"
						id="category"
						bind:value={singleCategory}
						on:change={checkCategories}
					>
						<option value="" selected>Category</option>
						{#each $categories as category}
							<option value={category.name}>{category.name}</option>
						{/each}
					</select>

					<label
						for="categories"
						class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-r-3xl rounded-l-xl h-10"
						><Eyeglasses size={16} weight="bold" /></label
					>
				</div>

				<input
					class="input-addrecipe rounded-3xl w-full outline-none focus:outline-none mb-1 h-10"
					placeholder="Link"
					type="url"
					name="link"
					id="link"
					bind:value={link}
				/>

				<div class="various flex justify-between">
					<label for="time" class="time bg-primary p-2 rounded-l-3xl rounded-r-xl">
						<Alarm class="w-8 h-7" />
					</label>
					<label for="difficulty" class="time bg-primary p-2 rounded-xl">
						<ChartBar class="w-8 h-7" />
					</label>
					<label for="portions" class="time bg-primary p-2 rounded-r-3xl rounded-l-xl">
						<ChartPieSlice class="w-8 h-7" />
					</label>
				</div>
			</div>
		</div>
	</div>

	<label for="description" class="text-2xl font-bold font-cormorant">Description</label>
	<textarea
		class="input-addrecipe pt-1 h-32 roundend-3xl"
		placeholder="Short recipe description"
		name="description"
		bind:value={description}
	/>

	<div class="flex justify-between">
		<label for="ingredients" class="text-2xl font-bold font-cormorant w-2/3">Ingredients</label>
	</div>
	<div class="ingredients flex justify-between flex-col">
		<div class="inputs flex">
			<input
				class="input-addrecipe w-2/3 rounded-l-3xl rounded-r-xl h-10"
				type="text"
				name="ingredients"
				id="ingredients"
				required
				placeholder="Salt"
				bind:value={ingredient}
				on:keyup={(e) => e.key == 'Enter' && checkIngredients()}
			/>

			<input
				class="input-addrecipe w-1/4 mx-2 rounded-xl h-10"
				type="text"
				name="quantity"
				id="quantity"
				placeholder="1g"
				required
				bind:value={quantity}
				on:keyup={(e) => e.key == 'Enter' && checkIngredients()}
			/>

			<btn
				class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-r-3xl rounded-l-xl h-10"
				on:click={checkIngredients}
				on:keyup><Plus size={16} weight="bold" /></btn
			>
		</div>

		<div class="badges flex flex-wrap gap-2 mt-2">
			{#each $ingredients as ingredient}
				<div
					class="badge badge-secondary truncate"
					on:keyup
					on:click={handle_ingredients(ingredient)}
				>
					{ingredient.ingredient}
				</div>
			{/each}
		</div>
	</div>

	<label for="steps" class="text-2xl font-bold font-cormorant w-2/3">Steps</label>
	<textarea
		class="input-addrecipe pt-1 h-32"
		placeholder="1. First step
2. Second step, etc."
		name="steps"
		id="steps"
		bind:value={steps}
	/>

	<h1 class="text-3xl font-bold font-cormorant text-center mt-4">Create</h1>
	<h1 class="text-xs font-poppins text-center my-1">You're gonna make the world a better place!</h1>
	<div class="btn-co flex justify-center">
		<button class="btn btn-secondary w-24 mt-1 rounded-3xl" on:click={addRecipe}
			><SmileyWink weight="fill" size={40} class="text-primary text-center" /></button
		>
	</div>

	<!--OLD LAYOUT-->
	<!--OLD LAYOUT-->
	<!--OLD LAYOUT-->
	<!--OLD LAYOUT-->

	<!-- <label for="cover">Cover</label>
	<input
		class="file:font-semibold file:border-0 file:mr-4 file:bg-secondary file:rounded-l-none file:rounded-full file:cursor-pointer file:text-white file:btn"
		type="file"
		name="cover"
		id="cover"
		accept="image/*"
		bind:value={cover}
		on:change={handleFileSelect}
	/>

	<label for="title">Title</label>
	<input
		class="input-addrecipe"
		placeholder="Pizza"
		type="text"
		name="title"
		id="title"
		bind:value={title}
	/>

	<label for="link">Link</label>
	<input
		class="input-addrecipe"
		placeholder="https://www.pizza.com"
		type="url"
		name="link"
		id="link"
		bind:value={link}
	/>

	<label for="category">Categories</label>
	<div class="flex flex-col">
		<div class="flex justify-between">
			<select
				class="select select-sm w-full border-accent border-2 bg-white outline-none focus:outline-none"
				name="category"
				id="category"
				bind:value={singleCategory}
				on:change={checkCategories}
			>
				{#each $categories as category}
					<option value={category.name}>{category.name}</option>
				{/each}
			</select>
		</div>

		<div class="badges flex flex-col flex-wrap gap-2 mt-2">
			{#each $category as category}
				<div
					class="badge {colors[
						Math.floor(Math.random() * colors.length)
					]} truncate cursor-pointer group"
					on:keypress
					on:click={() => handle_category(category)}
				>
					{category}
					<p class="group-hover:text-secondary">&nbsp x</p>
				</div>
			{/each}
		</div>
	</div>

	<label for="difficulty">Difficulty</label>
	<select
		class="select select-sm border-accent border-2 bg-white outline-none focus:outline-none"
		name="difficulty"
		id="difficulty"
		bind:value={difficulty}
	>
		<option value="easy">Easy</option>
		<option value="medium">Medium</option>
		<option value="hard">Hard</option>
	</select>

	<label for="time">Preparation time (minutes)</label>
	<input
		class="input-addrecipe"
		placeholder="20"
		type="number"
		name="time"
		id="time"
		step="1"
		min="1"
		max="999"
		bind:value={time}
	/>

	<label for="time">Portions</label>
	<input
		class="input-addrecipe"
		placeholder="4"
		type="number"
		name="portions"
		id="portions"
		step="1"
		min="1"
		max="99"
		bind:value={portions}
	/>

	<label for="description">Description</label>
	<textarea
		class="input-addrecipe pt-1 h-32"
		placeholder="Short recipe description"
		name="description"
		bind:value={description}
	/>

	<div class="flex justify-between">
		<label for="ingredients" class="w-2/3">Ingredients</label>
		<label for="quantity" class="w-1/3 mx-2">Quantity</label>
	</div>
	<div class="ingredients flex justify-between flex-col">
		<div class="inputs flex">
			<input
				class="input-addrecipe w-2/3"
				type="text"
				name="ingredients"
				id="ingredients"
				required
				placeholder="Salt"
				bind:value={ingredient}
				on:keyup={(e) => e.key == 'Enter' && checkIngredients()}
			/>

			<input
				class="input-addrecipe w-1/4 mx-2"
				type="text"
				name="quantity"
				id="quantity"
				placeholder="1g"
				required
				bind:value={quantity}
				on:keyup={(e) => e.key == 'Enter' && checkIngredients()}
			/>

			<btn
				class="btn btn-secondary btn-sm w-1/12 p-0 text-white"
				on:click={checkIngredients}
				on:keyup><Plus size={16} weight="bold" /></btn
			>
		</div>

		<div class="badges flex flex-wrap gap-2 mt-2">
			{#each $ingredients as ingredient}
				<div
					class="badge badge-secondary truncate"
					on:keyup
					on:click={handle_ingredients(ingredient)}
				>
					{ingredient.ingredient}
				</div>
			{/each}
		</div>
	</div>

	<label for="steps">Steps</label>
	<textarea
		class="input-addrecipe pt-1 h-32"
		placeholder="1. First step
2. Second step, etc."
		name="steps"
		id="steps"
		bind:value={steps}
	/>

	{#if !cover && !title && !link && !$category && !difficulty && !time && !portions && !description && !$ingredients && !steps}
		<h1
			class="text-sm font-poppins text-center font-bold mb-0 text-gray-400 align-bottom opacity-50"
		>
			<p class="text-gray-500 align-middle opacity-50"><Lightbulb weight="bold" /></p>
			tip: complete all fields to see a preview of your recipe
		</h1>
	{:else}
		<h1 class="text-4xl text-center">Card Preview</h1>
		<CardPreview {cover} {user} />
	{/if}

	<button class="btn btn-accent w-full mt-4" on:click={addRecipe}>Add a recipe</button> -->
</div>
