import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, v as validate_component, i as add_attribute } from "./index3.js";
import { r as realDB } from "./firebase.client.js";
import { onValue, ref } from "firebase/database";
import "firebase/firestore";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M187.3,236a20.6,20.6,0,0,1-10.9-3.2L128,202.1,83.1,230.6a21.7,21.7,0,0,1-24.5-.8A22.4,22.4,0,0,1,50,206.1l13.1-51.2L19.4,118.6A20.9,20.9,0,0,1,13,96.2,20.5,20.5,0,0,1,31.1,82l56.8-3.6,21.2-53.5a20.3,20.3,0,0,1,37.8,0l21.2,53.5L224.9,82A20.5,20.5,0,0,1,243,96.2a20.9,20.9,0,0,1-6.4,22.4l-43.7,36.3L207,210.2a20.6,20.6,0,0,1-7.9,21.9A19.9,19.9,0,0,1,187.3,236Zm2-23.5Zm-61.3-35a19.9,19.9,0,0,1,10.8,3.1h0l42.8,27.1-12.4-48.9a20.9,20.9,0,0,1,6.8-21.1l38.8-32.3-50.5-3.2a20.5,20.5,0,0,1-17.6-12.9L128,42.3l-18.7,47a20.5,20.5,0,0,1-17.6,12.9l-50.5,3.2L80,137.7a20.9,20.9,0,0,1,6.8,21.1L74.4,207.7l42.8-27.1A19.9,19.9,0,0,1,128,177.5Zm-2,23.4Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"></path></g><path d="M187.3,232a16.1,16.1,0,0,1-8.7-2.6l-50.5-31.9h-.2L81,227.2a18,18,0,0,1-20.1-.6,18.6,18.6,0,0,1-7-19.6l13.5-53.1a.8.8,0,0,0-.2-.8L22,115.5a16.8,16.8,0,0,1-5.2-18.1A16.4,16.4,0,0,1,31.4,86l59-3.8a.5.5,0,0,0,.4-.3l22-55.5a16.3,16.3,0,0,1,30.4,0l22,55.5a.5.5,0,0,0,.4.3l59,3.8a16.4,16.4,0,0,1,14.6,11.4,16.8,16.8,0,0,1-5.2,18.1l-45.2,37.6a.8.8,0,0,0-.2.8l14.5,57.3a16.6,16.6,0,0,1-6.3,17.7A16.8,16.8,0,0,1,187.3,232ZM128,181.5a16,16,0,0,1,8.7,2.5h0l50.4,31.9h.2a.7.7,0,0,0,.3-.3c.1-.1.1-.2,0-.6l-14.5-57.3a16.8,16.8,0,0,1,5.4-17l45.3-37.6c.1-.1.3-.3.1-.8s-.2-.4-.3-.4l-59.1-3.8a16.4,16.4,0,0,1-14.1-10.4L128.3,32.3c-.1-.3-.2-.3-.3-.3s-.2,0-.3.3L105.6,87.8A16.4,16.4,0,0,1,91.5,98.2L32.4,102c-.1,0-.2,0-.3.4s0,.7.1.8l45.3,37.6a16.8,16.8,0,0,1,5.4,17L69.4,211a2.5,2.5,0,0,0,.9,2.6,1.6,1.6,0,0,0,2.1.1L119.3,184A16,16,0,0,1,128,181.5Z"></path>` : `${weight === "fill" ? `<path d="M234,115.5l-45.2,37.6,14.3,58.1A16.5,16.5,0,0,1,187.3,232a16.1,16.1,0,0,1-8.7-2.6l-50.5-31.9h-.2L81,227.2a18,18,0,0,1-20.1-.6,18.5,18.5,0,0,1-7-19.6l13.5-53.1L22,115.5a16.8,16.8,0,0,1-5.2-18.1A16.5,16.5,0,0,1,31.4,86l59-3.8,22.4-55.8A16.4,16.4,0,0,1,128,16h0a16.4,16.4,0,0,1,15.2,10.4l22,55.5L224.6,86a16.4,16.4,0,0,1,14.6,11.4A16.8,16.8,0,0,1,234,115.5Z"></path>` : `${weight === "light" ? `<path d="M187.3,230a15.2,15.2,0,0,1-7.7-2.2l-50.4-32a2.1,2.1,0,0,0-2.4,0L79.9,225.5a15.5,15.5,0,0,1-17.8-.6,16.2,16.2,0,0,1-6.2-17.4l13.5-53.1a2.8,2.8,0,0,0-.9-2.8L23.3,113.9A14.7,14.7,0,0,1,18.7,98,14.5,14.5,0,0,1,31.5,88l59.1-3.8a2.4,2.4,0,0,0,2-1.6l22-55.4a14.4,14.4,0,0,1,26.8,0l22,55.4a2.4,2.4,0,0,0,2,1.6L224.5,88a14.5,14.5,0,0,1,12.8,10,14.7,14.7,0,0,1-4.6,15.9l-45.2,37.7a2.8,2.8,0,0,0-.9,2.8l14.6,57.3a14.7,14.7,0,0,1-5.6,15.6A14.2,14.2,0,0,1,187.3,230ZM128,183.5a13.7,13.7,0,0,1,7.6,2.2h0l50.5,31.9a2.1,2.1,0,0,0,2.5-.1,2.7,2.7,0,0,0,1-2.9L175,157.3a14.7,14.7,0,0,1,4.8-14.9L225,104.7a2.5,2.5,0,0,0,.8-2.9,2.3,2.3,0,0,0-2.1-1.8l-59-3.8a14.8,14.8,0,0,1-12.5-9.1l-22-55.5a2.3,2.3,0,0,0-4.4,0l-22,55.5a14.8,14.8,0,0,1-12.5,9.1l-59,3.8a2.3,2.3,0,0,0-2.1,1.8,2.5,2.5,0,0,0,.8,2.9l45.2,37.7A14.7,14.7,0,0,1,81,157.3L67.5,210.5a4.4,4.4,0,0,0,1.6,4.7,3.9,3.9,0,0,0,4.4.2l46.9-29.7A13.7,13.7,0,0,1,128,183.5Z"></path>` : `${weight === "thin" ? `<path d="M187.3,228a12.3,12.3,0,0,1-6.6-1.9l-50.4-32a4.3,4.3,0,0,0-4.6,0L78.9,223.8a13.7,13.7,0,0,1-15.6-.5A14.4,14.4,0,0,1,57.8,208l13.5-53.1a4.8,4.8,0,0,0-1.5-4.9L24.6,112.4a12.7,12.7,0,0,1-4-13.7,12.5,12.5,0,0,1,11-8.7l59.1-3.8a4.6,4.6,0,0,0,3.8-2.8l22-55.5a12.3,12.3,0,0,1,23,0l22,55.5a4.6,4.6,0,0,0,3.8,2.8L224.4,90a12.5,12.5,0,0,1,11,8.7,12.7,12.7,0,0,1-4,13.7L186.2,150a4.8,4.8,0,0,0-1.5,4.9l14.6,57.3a12.5,12.5,0,0,1-4.9,13.4A11.7,11.7,0,0,1,187.3,228ZM128,185.4a12.4,12.4,0,0,1,6.6,2h0L185,219.3a4,4,0,0,0,4.7-.1,4.6,4.6,0,0,0,1.8-5l-14.6-57.4a12.9,12.9,0,0,1,4.2-12.9l45.2-37.6a4.7,4.7,0,0,0,1.4-5.2,4.2,4.2,0,0,0-3.8-3.1l-59.1-3.8a12.5,12.5,0,0,1-10.7-7.9l-22-55.5a4.4,4.4,0,0,0-8.2,0l-22,55.5a12.5,12.5,0,0,1-10.7,7.9L32.1,98a4.5,4.5,0,0,0-3.9,3.1,5,5,0,0,0,1.5,5.2l45.2,37.6a12.9,12.9,0,0,1,4.2,12.9L65.6,210a6.1,6.1,0,0,0,2.4,6.8,5.6,5.6,0,0,0,6.6.2l46.8-29.6A12.4,12.4,0,0,1,128,185.4Z"></path>` : `${weight === "regular" ? `<path d="M187.3,232a16.1,16.1,0,0,1-8.7-2.6l-50.5-31.9h-.2L81,227.2a18,18,0,0,1-20.1-.6,18.6,18.6,0,0,1-7-19.6l13.5-53.1a.8.8,0,0,0-.2-.8L22,115.5a16.8,16.8,0,0,1-5.2-18.1A16.4,16.4,0,0,1,31.4,86l59-3.8a.5.5,0,0,0,.4-.3l22-55.5a16.3,16.3,0,0,1,30.4,0l22,55.5a.5.5,0,0,0,.4.3l59,3.8a16.4,16.4,0,0,1,14.6,11.4,16.8,16.8,0,0,1-5.2,18.1l-45.2,37.6a.8.8,0,0,0-.2.8l14.5,57.3a16.6,16.6,0,0,1-6.3,17.7A16.8,16.8,0,0,1,187.3,232ZM128,181.5a16,16,0,0,1,8.7,2.5h0l50.4,31.9h.2a.7.7,0,0,0,.3-.3c.1-.1.1-.2,0-.6l-14.5-57.3a16.8,16.8,0,0,1,5.4-17l45.3-37.6c.1-.1.3-.3.1-.8s-.2-.4-.3-.4l-59.1-3.8a16.4,16.4,0,0,1-14.1-10.4L128.3,32.3c-.1-.3-.2-.3-.3-.3s-.2,0-.3.3L105.6,87.8A16.4,16.4,0,0,1,91.5,98.2L32.4,102c-.1,0-.2,0-.3.4s0,.7.1.8l45.3,37.6a16.8,16.8,0,0,1,5.4,17L69.4,211a2.5,2.5,0,0,0,.9,2.6,1.6,1.6,0,0,0,2.1.1L119.3,184A16,16,0,0,1,128,181.5Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M216,48H180V36A28.1,28.1,0,0,0,152,8H104A28.1,28.1,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20.1,20.1,0,0,0,20,20H192a20.1,20.1,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z"></path></g><path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192Z"></path><path d="M104,96a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V104A8,8,0,0,0,104,96Z"></path><path d="M152,96a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V104A8,8,0,0,0,152,96Z"></path>` : `${weight === "fill" ? `<path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>` : `${weight === "light" ? `<path d="M216,50H174V40a22.1,22.1,0,0,0-22-22H104A22.1,22.1,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"></path>` : `${weight === "thin" ? `<path d="M216,52H172V40a20.1,20.1,0,0,0-20-20H104A20.1,20.1,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"></path>` : `${weight === "regular" ? `<path d="M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
let minVotes = 3;
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  let { totalAverage } = $$props;
  let { profile } = $$props;
  let grade = 0;
  let wheightedRating = 0;
  let { bg_color } = $$props;
  onValue(ref(realDB, "recipes-grade/" + recipe.id), (snapshot) => {
    if (snapshot.val()) {
      grade = 0;
      wheightedRating = 0;
      grade = snapshot.val().average;
      const numberVotes = Object.values(snapshot.val().stars).length;
      wheightedRating = (numberVotes / (numberVotes + minVotes) * grade + 1 / (numberVotes + minVotes) * totalAverage).toFixed(1);
    }
  });
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  if ($$props.totalAverage === void 0 && $$bindings.totalAverage && totalAverage !== void 0)
    $$bindings.totalAverage(totalAverage);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color !== void 0)
    $$bindings.bg_color(bg_color);
  return `


<input type="checkbox" id="remove" class="modal-toggle">
<div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">You are going to <strong>permanently</strong> remove your recipe!
		</p>
		<div class="modal-action"><label for="" class="btn">Yes</label>
			<label for="remove" class="btn">No</label></div></div></div>



${profile == true ? `<label for="remove" class="trash ml-5 p-1 text-red-700 flex items-center justify-center absolute z-50 left-28 right-1 top-36">${validate_component(Trash, "Trash").$$render($$result, { size: 24 }, {}, {})}</label>` : ``}

<a class="rounded-3xl flex flex-col items-center -mb-16 z-10" href="${"/recipes/" + escape(recipe.id, true)}"><img${add_attribute("src", recipe.cover, 0)} alt="img" class="rounded-3xl h-32 w-32 object-cover z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
	<div class="${"card bg-" + escape(bg_color, true) + " z-0 w-40 h-40 flex justify-end -translate-y-16"}"><div class="body px-4 pb-1 text-accent-content flex flex-col gap-y-2 -translate-y-1"><div class="title flex justify-between gap-x-1"><div class="flex flex-col overflow-hidden text-ellipsis"><h1 class="font-bold text-lg truncate">${escape(recipe.data.title)}</h1>
					<div class="flex flex-row gap-x-1"><h1 class="font-semibold text-xs">Chef</h1>
						<h1 class="font-medium text-xs truncate">${escape(recipe.data.author)}</h1></div></div></div>
			<div class="valutation flex justify-between items-center"><p class="text-2xl font-semibold leading-none">${recipe.data.difficulty == "easy" ? `<div class="text-green-800">•</div>` : `${recipe.data.difficulty == "medium" ? `<div class="text-amber-500">••</div>` : `<div class="text-red-600">•••</div>`}`}</p>
				<div class="flex flex-row text-xs font-poppins font-normal items-center">${escape(wheightedRating)}
					<div class="text-xs text-yellow-500">${validate_component(Star, "Star").$$render($$result, { weight: "fill" }, {}, {})}</div></div></div></div></div></a>`;
});
export {
  Card as C,
  Star as S
};
