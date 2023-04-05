<script>
	import { defaultAvatar } from '../../../../routes/stores/authStore';
	import { page } from '$app/stores';
	import House from 'phosphor-svelte/lib/House';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import PlusCircle from 'phosphor-svelte/lib/PlusCircle';
	import Bell from 'phosphor-svelte/lib/Bell';

	let active = 'home';

	page.subscribe(() => {
		active = $page.url.pathname;
	});

	export let photoURL;
</script>

<div class="flex w-screen h-16 px-6 justify-between items-center bg-primary rounded-t-3xl">
	<a href="/home" class="footer-icon [&.active]:bg-secondary" class:active={active == '/home'}
		><House weight="bold" /></a
	>
	<a href="/search" class="footer-icon [&.active]:bg-secondary" class:active={active == '/search'}
		><MagnifyingGlass weight="bold" /></a
	>
	<a
		href="/addrecipe"
		class="footer-icon [&.active]:bg-secondary"
		class:active={active == '/addrecipe'}><PlusCircle weight="bold" /></a
	>
	<a
		href="/notifications"
		class="footer-icon [&.active]:bg-secondary"
		class:active={active == '/notifications'}><Bell weight="bold" /></a
	>
	<a
		href="/profile"
		class="avatar placeholder footer-icon [&.active]:bg-secondary"
		class:active={active == '/profile'}
	>
		<div class="rounded-full w-9 h-9">
			{#if photoURL}
				<img src={photoURL} alt="Avatar" class="rounded-full w-9 h-9" />
			{:else}
				<img src={defaultAvatar} alt="Avatar" class="rounded-full w-9 h-9" />
			{/if}
		</div>
	</a>
</div>
