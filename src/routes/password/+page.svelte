<script>
	import { authHandlers } from '../stores/authStore';
	import { goto } from '$app/navigation';

	let email = '';

	const changePassword = async () => {
		await authHandlers.resetPassword(email);
		goto('/login');
	};
</script>

<h1 class="text-5xl font-loftygoals pt-12 text-center">M</h1>

<div class="flex justify-center px-6 my-6">
	<div class="w-full xl:w-3/4 lg:w-11/12 flex">
		<div
			class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-center"
			style="background-image: url('https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80')"
		/>
		<div class="w-full lg:w-1/2 bg-secondary p-5 rounded-lg lg:rounded-l-none">
			<div class="px-8 mb-4 text-center">
				<h3 class="pt-4 mb-2 text-2xl text-primary font-bold">
					Forgot Your Password<span class="animate-pulse">?</span>
				</h3>
				<p class="mb-4 text-sm text-white">
					We get it, s**t happens. Just enter your email address below and we'll send you a link to
					reset your password!
				</p>
			</div>
			<form class="px-8 py-6 mb-4 bg-secondary rounded">
				<div class="mb-4">
					<label class="block mb-2 text-sm font-bold text-white" for="email"> Email </label>
					<input
						class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Enter Email Address..."
						bind:value={email}
					/>
				</div>
				<div class="mb-6 text-center">
					<button
						class="btn btn-secondary border-white border-1 normal-case w-full rounded-3xl text-white"
						type="button"
						on:click={changePassword}
					>
						Reset Password
					</button>
				</div>
				<hr class="mb-6 border-t" />
				<div class="text-center">
					<a class="inline-block text-sm text-gray-200" href="/signup"> Create an Account! </a>
				</div>
				<div class="text-center">
					<a class="inline-block text-sm text-gray-200" href="/login">
						Already have an account? Login!
					</a>
				</div>
			</form>
		</div>
	</div>
</div>
