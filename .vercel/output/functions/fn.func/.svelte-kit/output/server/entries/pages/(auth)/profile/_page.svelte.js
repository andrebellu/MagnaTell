import { c as create_ssr_component, h as subscribe, i as add_attribute, f as escape } from "../../../../chunks/index3.js";
import { m as myRecipes, a as mySavedRecipes } from "../../../../chunks/store.js";
import "../../../../chunks/firebase.client.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile-b.svelte-127ldjb{height:3.25rem;width:6.875rem;display:flex;justify-content:center;align-items:center;margin-left:0.1rem;margin-right:0.1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_myRecipes;
  let $$unsubscribe_mySavedRecipes;
  $$unsubscribe_myRecipes = subscribe(myRecipes, (value) => value);
  $$unsubscribe_mySavedRecipes = subscribe(mySavedRecipes, (value) => value);
  let confirmDelete;
  let deleteButton;
  $$result.css.add(css);
  {
    {
      deleteButton = "btn-disabled btn-outline text-error";
    }
  }
  $$unsubscribe_myRecipes();
  $$unsubscribe_mySavedRecipes();
  return `<input type="checkbox" id="deleteAccountModal" class="modal-toggle">
<div class="modal modal-bottom sm:modal-middle"><div class="modal-box"><h1 class="font-bold text-xl">Are you sure you want to delete your account?</h1>
		<p class="pt-4 font-bold text-error">If you delete your account all your recipes will be deleted as well.
		</p>
		<p class="pb-4 font-bold underline underline-offset-2 text-error">The action cannot be reversed!
		</p>

		<p class="">To delete your account type CONFIRM</p>
		<input type="text" class="confirmDelete input input-bordered w-full" placeholder="CONFIRM"${add_attribute("value", confirmDelete, 0)}>

		<div class="modal-action"><label for="deleteAccountModal" class="${"deleteButton btn btn-error " + escape(deleteButton, true) + " svelte-127ldjb"}">Delete</label>
			<label for="deleteAccountModal" class="btn">Cancel</label></div></div></div>

${``}`;
});
export {
  Page as default
};
