<script>
	import '../app.css';
	import Footer from '$lib/components/layout/footer/Footer.svelte';
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase.client';
	import { browserSessionPersistence, setPersistence } from 'firebase/auth';

	let photoURL = '';
	let u;

	onMount(() => {
		auth.onAuthStateChanged((user) => {
			photoURL = user.photoURL;
		});
	});
</script>

<div class="grid grid-rows-[5rem_auto_4rem] grid-cols-1">
	{#if $page.url.pathname !== '/login' && $page.url.pathname !== '/signup' && $page.url.pathname !== '/profile'}
		<div class="nav"><Navbar /></div>
	{/if}

	<div><slot /></div>

	{#if $page.url.pathname !== '/login' && $page.url.pathname !== '/signup'}
		<div class="fixed bottom-0 z-50"><Footer {photoURL} /></div>
	{/if}
</div>
