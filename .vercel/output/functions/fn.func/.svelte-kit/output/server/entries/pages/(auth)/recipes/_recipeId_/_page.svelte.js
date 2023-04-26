import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, k as each, h as subscribe, v as validate_component, i as add_attribute } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
import "firebase/firestore";
import { r as realDB } from "../../../../../chunks/firebase.client.js";
import "firebase/storage";
import { onValue, ref, set } from "firebase/database";
const BookmarkSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = getContext("iconCtx") || {};
  let { weight = ctx.weight ?? "regular" } = $$props;
  let { color = ctx.color ?? "currentColor" } = $$props;
  let { size = ctx.size ?? "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        transform: escape_attribute_value(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M184,28H72A20.1,20.1,0,0,0,52,48V224a12,12,0,0,0,18.4,10.2l57.6-36,57.6,36A12.4,12.4,0,0,0,192,236a12,12,0,0,0,12-12V48A20.1,20.1,0,0,0,184,28Zm-4,174.4-45.6-28.6a12.3,12.3,0,0,0-12.8,0L76,202.3V52H180Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"></path></g><path d="M184,32H72A16,16,0,0,0,56,48V224a8.1,8.1,0,0,0,4.1,7,7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,4.2-1.2L128,193.4l59.8,37.4A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.6-51.8-32.4a8,8,0,0,0-8.4,0L72,209.6V48H184Z"></path>` : `${weight === "fill" ? `<path d="M200,48V224a8,8,0,0,1-12.2,6.8L128,193.4,68.2,230.8A7.6,7.6,0,0,1,64,232a7.8,7.8,0,0,1-3.9-1,8.1,8.1,0,0,1-4.1-7V48A16,16,0,0,1,72,32H184A16,16,0,0,1,200,48Z"></path>` : `${weight === "light" ? `<path d="M184,34H72A14,14,0,0,0,58,48V224a5.9,5.9,0,0,0,3.1,5.2,5.1,5.1,0,0,0,2.9.8,6.2,6.2,0,0,0,3.2-.9l60.8-38,60.8,38a6.1,6.1,0,0,0,6.1.1A5.9,5.9,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.2-54.8-34.3a6.1,6.1,0,0,0-6.4,0L70,213.2V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"></path>` : `${weight === "thin" ? `<path d="M184,36H72A12,12,0,0,0,60,48V224a3.9,3.9,0,0,0,2.1,3.5,3.8,3.8,0,0,0,4-.1L128,188.7l61.9,38.7a3.9,3.9,0,0,0,2.1.6,4.1,4.1,0,0,0,1.9-.5A3.9,3.9,0,0,0,196,224V48A12,12,0,0,0,184,36Zm4,180.8-57.9-36.2a4,4,0,0,0-4.2,0L68,216.8V48a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z"></path>` : `${weight === "regular" ? `<path d="M184,32H72A16,16,0,0,0,56,48V224a8.1,8.1,0,0,0,4.1,7,7.8,7.8,0,0,0,3.9,1,7.6,7.6,0,0,0,4.2-1.2L128,193.4l59.8,37.4A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.6-51.8-32.4a8,8,0,0,0-8.4,0L72,209.6V48H184Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const LoadingRecipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<div role="status" class="recipe p-4 animate-pulse"><div class="flex flex-row justify-center"><div class="h-12 w-64 bg-accent rounded-3xl"></div></div>

  <div class="flex flex-row justify-center">${each([1, 2], (category) => {
    return `<div class="h-5 w-16 bg-accent rounded-3xl mx-1 my-2"></div>`;
  })}</div>

  <div class="w-full h-40 bg-accent rounded-xl mb-2"></div>

  <div class="w-80 h-8 bg-accent rounded-3xl mt-6 mb-1"></div>
  <div class="w-32 h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  <div class="w-36 h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  <div class="w-28 h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  <div class="w-44 h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  
  <div class="w-32 h-5 bg-accent rounded-3xl mt-7 mb-1"></div>
  <div class="w-full h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  <div class="w-full h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  <div class="w-full h-4 bg-accent rounded-3xl mt-2 mb-1"></div>
  
  <div class="w-44 h-8 bg-accent rounded-3xl mt-8 mb-1"></div>
  <div class="ingredients pt-1">${each([1, 2, 3, 4], (ingredient) => {
    return `<div class="grid grid-cols-2 grid-rows-1 gap-2"><div class="w-24 h-4 bg-accent rounded-3xl mt-1 mb-1"></div>
        <div class="w-12 h-4 bg-accent rounded-3xl mt-1 mb-1"></div>
      </div>`;
  })}</div>

  <div class="w-44 h-8 bg-accent rounded-3xl mt-7 mb-2"></div>

  ${each([1, 2, 3], (step) => {
    return `<div class="w-64 h-4 bg-accent rounded-3xl mt-1 mb-2"></div>`;
  })}
  
  <div class="w-44 h-8 bg-accent rounded-3xl mt-8 mb-1"></div></div>`;
});
const Stars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let gradeRead = 0;
  let average = 0;
  let recipeId = "";
  const uid = JSON.parse(sessionStorage.getItem("firebase:authUser:AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o:CLIENT")).uid;
  page.subscribe(() => {
    recipeId = $page.url.pathname.replace("/recipes/", "");
  });
  onValue(ref(realDB, "recipes-grade/" + recipeId + "/stars/" + uid), (snapshot) => {
    if (snapshot.val()) {
      gradeRead = snapshot.val().grade;
    }
  });
  onValue(ref(realDB, "recipes-grade/" + recipeId + "/stars"), (snapshot) => {
    if (snapshot.val()) {
      average = 0;
      const stars = Object.values(snapshot.val());
      stars.forEach((star) => {
        average += star.grade;
      });
      average = Number((average / stars.length).toFixed(1));
      set(ref(realDB, "recipes-grade/" + recipeId + "/average"), average);
    }
  });
  $$unsubscribe_page();
  return `<div class="rating rating-md"><input type="radio" name="rating-1" class="rating-hidden" ${gradeRead == 0 ? "checked" : ""}>
    <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" ${gradeRead == 1 ? "checked" : ""}>
    <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" ${gradeRead == 2 ? "checked" : ""}>
    <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" ${gradeRead == 3 ? "checked" : ""}>
    <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" ${gradeRead == 4 ? "checked" : ""}>
    <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" ${gradeRead == 5 ? "checked" : ""}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.recipeId;
  let recipe = {};
  let ingredients = [];
  let categories = [];
  let steps = [];
  let link = "";
  let cover;
  $$unsubscribe_page();
  return `${recipe.title === void 0 ? `${validate_component(LoadingRecipe, "LoadingRecipe").$$render($$result, {}, {}, {})}` : `<div class="recipe p-4 flex flex-col justify-center h-full"><div class="title flex"><img${add_attribute("src", cover, 0)}${add_attribute("alt", recipe.title, 0)} class="w-32 h-32 object-cover rounded-xl mb-2">
			<div class="flex flex-col ml-4"><div class="flex flex-row items-center"><h1 class="text-3xl font-bold text-ellipsis truncate w-48">${escape(recipe.title)}</h1>
					${`<button class="text-3xl">${validate_component(BookmarkSimple, "BookmarkSimple").$$render($$result, {}, {}, {})}</button>`}</div>

				<h1>${escape(recipe.author)}</h1>

				<div class="flex flex-row">${each(categories, (category) => {
    return `<span class="badge badge-primary font-bold my-2 mr-2">${escape(category)}</span>`;
  })}</div>

				<div>${validate_component(Stars, "Stars").$$render($$result, {}, {}, {})}</div></div></div>

		<div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-96"><div class="carousel-item flex flex-col w-full" id="general"><h1 class="text-3xl font-bold pb-1">Infos</h1>
				<h1><strong>Difficulty:</strong>
					${escape(String(recipe.difficulty).charAt(0).toUpperCase() + String(recipe.difficulty).slice(1))}</h1>
				<h1><strong>Portions:</strong> ${escape(recipe.portions)}</h1>
				<h1><strong>Preparation time:</strong> ${escape(recipe.time)} min</h1>

				<h2 class="text-2xl font-bold pt-3 pb-1">Description:</h2>
				<h1>${escape(recipe.description)}</h1></div>

			<div class="carousel-item flex flex-col w-full" id="ingredients"><h1 class="text-3xl font-bold pb-1">Ingredients:</h1>
				<div class="ingredients pt-1">${each(ingredients, (ingredient) => {
    return `<div class="grid grid-cols-2 grid-rows-1 gap-2"><h1 class="font-semibold">• ${escape(String(ingredient.ingredient).charAt(0).toUpperCase() + String(ingredient.ingredient).slice(1))}</h1>
							<h1>${escape(ingredient.quantity)}</h1>
						</div>`;
  })}</div></div>

			<div class="carousel-item flex flex-col w-full" id="steps"><h1 class="text-3xl font-bold pb-1">Steps:</h1>

				${each(steps, (step, i) => {
    return `<div class="flex flex-row items-start my-1"><div class="bg-secondary rounded-full h-8 aspect-square text-white text-center p-1 mr-2">${escape(i + 1)}.
						</div>
						<div class="mb-2">${escape(step)}</div>
					</div>`;
  })}</div>

			<div class="carousel-item flex flex-col w-full" id="links">${``}

				${link.includes("youtube") ? `<iframe${add_attribute("src", link, 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-64 rounded-xl"></iframe>` : `<a${add_attribute("href", link, 0)} class="btn">Link</a>`}</div></div>

		<ul class="steps mt-4">${$page.url.hash === "" || $page.url.hash === "#general" ? `<a class="step step-primary" href="#general">General</a>` : `<a class="step" href="#general">General</a>`}

			${$page.url.hash === "#ingredients" ? `<a class="step step-primary" href="#ingredients">Ingredients</a>` : `<a class="step" href="#ingredients">Ingredients</a>`}

			${$page.url.hash === "#steps" ? `<a class="step step-primary" href="#steps">Steps</a>` : `<a class="step" href="#steps">Steps</a>`}

			${$page.url.hash === "#links" ? `<a class="step step-primary" href="#links">Links</a>` : `<a class="step" href="#links">Links</a>`}</ul></div>`}`;
});
export {
  Page as default
};
