import { c as create_ssr_component, i as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/firebase.client.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import { E as EyeSlash } from "../../../chunks/EyeSlash.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let email = "";
  let remember = false;
  type = "password";
  return `<div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"><div class="w-full max-w-md space-y-8"><div><h1 class="text-5xl font-loftygoals pt-4 text-center">MagnaTell</h1>
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tigh">Sign in to your account</h2>
			<p class="mt-2 text-center text-sm text-accent">Or
				<a href="/signup" class="font-semibold text-secondary">Signup</a></p></div>
		${``}
		<form><div class="mt-8 space-y-6 container"><input type="hidden" name="remember" value="true">
				<div class="-space-y-px"><div><label for="email-address" class="sr-only">Email address</label>
						<input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-neutral px-3 py-2 placeholder-accent focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm" placeholder="Email address"${add_attribute("value", email, 0)}></div>
					<div class="flex flex-row"><label for="password" class="sr-only">Password</label>
						<input id="password" name="password"${add_attribute("type", type, 0)} autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-neutral px-3 py-2 placeholder-accent focus:z-10 focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm" placeholder="Password">
						<button aria-label="toggle password visibility" class="-ml-10 translate-x-2 z-20 text-2xl">${`${validate_component(EyeSlash, "EyeSlash").$$render($$result, {}, {}, {})}`}</button></div></div>

				<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded"${add_attribute("checked", remember, 1)}>
						<label for="remember-me" class="ml-2 block text-sm">Remember me</label></div>

					<div class="text-sm"><a href="/password" class="font-medium text-secondary">Forgot your password?</a></div></div>

				<div><button class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-base-100 hover:bg-base-100 hover:text-primary hover:border-primary transition duration-300 ease-in-out"><span class="absolute inset-y-0 left-0 flex items-center pl-3"><svg class="h-5 w-5 text-base-100 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path></svg></span>
						Sign in
					</button></div></div></form>
		<div class="btns width-full flex justify-center mt-4"><button class="btn btn-ghost flex items-center justify-center align-middle border border-secondary hover:bg-primary hover:text-base-100 hover:border-invisible"><img src="/google.svg" class="rounded-full p-1 mr-4" alt="Google" width="32" height="32">
				<p>Login</p></button></div></div></div>`;
});
export {
  Page as default
};
