<script>
	import { goto } from '$app/navigation';
	import { authHandlers } from '../stores/authStore.js';
	import { fade, slide } from 'svelte/transition';
	import Eye from 'phosphor-svelte/lib/Eye';
	import EyeSlash from 'phosphor-svelte/lib/EyeSlash';

	let email = '';
	let password = '';
	let error = '';
	let remember = false;

	let hidePassword = 'password';

	$: type = hidePassword ? 'password' : 'text';

	const login = async () => {
		if (!email.includes('@') || !email.includes('.')) return (error = 'invalid email');
		if (password.length < 6) return (error = 'password must be at least 6 characters long');
		await authHandlers.login(email, password, remember);
		goto('/home');
	};

	async function loginGoogle() {
		await authHandlers.loginGoogle();
		goto('/home');
	}
</script>

<div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h1 class="text-5xl font-loftygoals pt-4 text-center">MagnaTell</h1>
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tigh">Sign in to your account</h2>
			<p class="mt-2 text-center text-sm text-accent">
				Or
				<a href="/signup" class="font-semibold text-secondary">Signup</a>
			</p>
		</div>
		{#if error}
			<div in:slide={{ y: 200, duration: 500 }} out:fade class="text-center text-red-500 p-0">
				{error}
			</div>
		{/if}
		<form>
			<div class="mt-8 space-y-6 container">
				<input type="hidden" name="remember" value="true" />
				<div class="-space-y-px">
					<div>
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="relative block w-full appearance-none rounded-none
							rounded-t-md border border-neutral px-3 py-2
							placeholder-accent focus:z-10 focus:border-secondary focus:outline-none
							focus:ring-secondary sm:text-sm"
							placeholder="Email address"
							bind:value={email}
						/>
					</div>
					<div class="flex flex-row">
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							name="password"
							{type}
							autocomplete="current-password"
							required
							class="relative block w-full appearance-none rounded-none
							rounded-b-md border border-neutral px-3 py-2
							placeholder-accent focus:z-10 focus:border-secondary focus:outline-none
							focus:ring-secondary sm:text-sm"
							placeholder="Password"
							on:input={(e) => (password = e.target.value)}
							on:keyup={(e) => e.key === 'Enter' && login()}
						/>
						<button
							aria-label="toggle password visibility"
							class="-ml-10 translate-x-2 z-20 text-2xl"
							on:click={() => (hidePassword = !hidePassword)}
						>
							{#if hidePassword}
								<EyeSlash />
							{:else}
								<Eye />
							{/if}
						</button>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded"
							bind:checked={remember}
						/>
						<label for="remember-me" class="ml-2 block text-sm">Remember me</label>
					</div>

					<div class="text-sm">
						<a href="/password" class="font-medium text-secondary">Forgot your password?</a>
					</div>
				</div>

				<div>
					<button
						class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary
						py-2 px-4 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-primary hover:border-primary transition duration-300 ease-in-out"
						on:click={login}
					>
						<span class="absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								class="h-5 w-5 text-base-100 group-hover:text-primary"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
						Sign in
					</button>
				</div>
			</div>
		</form>
		<div class="btns width-full flex justify-center mt-4">
			<button
				class="btn btn-ghost flex items-center justify-center align-middle border border-secondary hover:bg-primary hover:text-base-100 hover:border-invisible"
				on:click={loginGoogle}
			>
				<img src="/google.svg" class="rounded-full p-1 mr-4" alt="Google" width="32" height="32" />
				<p>Login</p>
			</button>
		</div>
	</div>
</div>
