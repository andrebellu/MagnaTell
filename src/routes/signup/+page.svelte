<script>
	import { goto } from '$app/navigation';
	import { authHandlers } from '../stores/authStore.js';
	import Eye from 'phosphor-svelte/lib/Eye';
	import EyeSlash from 'phosphor-svelte/lib/EyeSlash';

	let username, email, password;
	let error = '';

	let hidePassword = 'password';
	$: type = hidePassword ? 'password' : 'text';

	const signup = async () => {
		if (username.length < 4) return (error = 'username must be at least 4 characters long');
		if (!email.includes('@') || !email.includes('.')) return (error = 'invalid email');
		if (password.length < 6) return (error = 'password must be at least 6 characters long');
		error = '';
		await authHandlers.signup(email, password, username);
		goto('/home');
	};
</script>

<div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h1 class="text-5xl font-loftygoals pt-4 text-center">MagnaTell</h1>
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tigh">Create an account</h2>
			<p class="mt-2 text-center text-sm text-accent">
				Or
				<a href="/login" class="font-semibold text-secondary">Signin</a>
			</p>
		</div>
		<div class="mt-8 space-y-6 container">
			<input type="hidden" name="remember" value="true" />
			<div class="-space-y-px rounded-md shadow-sm">
				<div class="-space-y-px">
					<label for="username" class="sr-only">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						required
						class="relative block w-full appearance-none rounded-none 
						rounded-t-md border border-neutral px-3 py-2
						placeholder-accent focus:z-10 focus:border-secondary focus:outline-none 
						focus:ring-secondary sm:text-sm"
						placeholder="Username"
						bind:value={username}
					/>

					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="relative block w-full appearance-none rounded-none
						border border-neutral px-3 py-2
						placeholder-accent focus:z-10 focus:border-secondary focus:outline-none 
						focus:ring-secondary sm:text-sm"
						placeholder="Email address"
						bind:value={email}
					/>

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
						/>
						<button
							class="text-2xl -ml-10 translate-x-2 z-20"
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
			</div>

			<div>
				<button
					class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary 
                    py-2 px-4 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-primary hover:border-primary transition duration-300 ease-in-out"
					on:click={signup}
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
					Sign up
				</button>
			</div>
		</div>
	</div>
</div>
