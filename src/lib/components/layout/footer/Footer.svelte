<script>
	import { defaultAvatar } from '../../../../routes/stores/authStore';
	import { page } from '$app/stores';

	let active = 'home';

	page.subscribe(() => {
		active = $page.url.pathname;
	});

	export let photoURL;
</script>

<div class="flex w-screen h-16 px-6 justify-between items-center bg-primary rounded-t-3xl">
	<a href="/home" class="footer-icon material-symbols-outlined {active === '/home' ? 'active-footer-icon' : ''}"
		>home</a
	>
	<a href="/search" class="footer-icon material-symbols-outlined {active === '/search' ? 'active-footer-icon' : ''}"
		>search</a
	>
	<a href="/addrecipe" class="footer-icon material-symbols-outlined {active === '/addrecipe' ? 'active-footer-icon' : ''}"
		>add_circle</a
	>
	<a href="/notifications" class="footer-icon material-symbols-outlined {active === '/notifications' ? 'active-footer-icon' : ''}"
		>notifications</a
	>
	<a href="/profile" class="avatar placeholder footer-icon material-symbols-outlined {active === '/profile' ? 'active-footer-icon' : ''}">
		<div class="rounded-full w-9 h-9">
			<img src={photoURL || defaultAvatar} alt="Avatar" class="rounded-full w-9 h-9" />
		</div>
	</a>
</div>
