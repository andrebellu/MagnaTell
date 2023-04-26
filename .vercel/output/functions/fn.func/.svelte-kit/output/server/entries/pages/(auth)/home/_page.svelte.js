import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, v as validate_component, h as subscribe, k as each } from "../../../../chunks/index3.js";
import { r as recipes, f as featuredRecipes } from "../../../../chunks/store.js";
import { r as realDB } from "../../../../chunks/firebase.client.js";
import { onValue, ref } from "firebase/database";
import { S as Star, C as Card } from "../../../../chunks/Card.js";
import "firebase/firestore";
import "firebase/storage";
const Eye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M251,123.1a149.8,149.8,0,0,0-28.5-39.6C196.6,57.7,164,44,128,44S59.4,57.7,33.5,83.5A149.8,149.8,0,0,0,5,123.1a12.8,12.8,0,0,0,0,9.8,149.8,149.8,0,0,0,28.5,39.6C59.4,198.3,92,212,128,212s68.6-13.7,94.5-39.5A149.8,149.8,0,0,0,251,132.9,12.8,12.8,0,0,0,251,123.1Zm-46.1,33C183.5,177.3,157.6,188,128,188s-55.5-10.7-76.9-31.9A131.4,131.4,0,0,1,29.5,128,128.9,128.9,0,0,1,51.1,99.9C72.5,78.7,98.4,68,128,68s55.5,10.7,76.9,31.9A131.4,131.4,0,0,1,226.5,128,131.4,131.4,0,0,1,204.9,156.1ZM128,84a44,44,0,1,0,44,44A44,44,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20.1,20.1,0,0,1,128,148Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path></g><path d="M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,192c-30.8,0-57.7-11.2-79.9-33.3A130.3,130.3,0,0,1,25,128,130.3,130.3,0,0,1,48.1,97.2C70.3,75.2,97.2,64,128,64s57.7,11.2,79.9,33.2A130.3,130.3,0,0,1,231,128C223.8,141.5,192.4,192,128,192Z"></path><path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.1,32.1,0,0,1,128,160Z"></path>` : `${weight === "fill" ? `<path d="M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"></path>` : `${weight === "light" ? `<path d="M245.5,125.6c-.4-.8-8.7-19.3-27.3-37.8S171.4,50,128,50,55,70.5,37.8,87.8s-26.9,37-27.3,37.8a5.7,5.7,0,0,0,0,4.8c.4.8,8.7,19.3,27.3,37.8S84.6,206,128,206s73-20.5,90.2-37.8,26.9-37,27.3-37.8A5.7,5.7,0,0,0,245.5,125.6ZM128,194c-31.4,0-58.8-11.4-81.4-33.9A133.9,133.9,0,0,1,22.7,128,133.9,133.9,0,0,1,46.6,95.9C69.2,73.4,96.6,62,128,62s58.8,11.4,81.4,33.9A133.9,133.9,0,0,1,233.3,128C226.9,140.2,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46,46,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34.1,34.1,0,0,1,128,162Z"></path>` : `${weight === "thin" ? `<path d="M243.7,126.4c-.4-.8-8.6-18.9-26.9-37.2S170.7,52,128,52,56.1,72.2,39.2,89.2s-26.5,36.4-26.9,37.2a4.4,4.4,0,0,0,0,3.2c.4.8,8.6,18.9,26.9,37.2S85.3,204,128,204s71.9-20.2,88.8-37.2,26.5-36.4,26.9-37.2A4.4,4.4,0,0,0,243.7,126.4Zm-32.7,35c-23.1,22.9-51,34.6-83,34.6s-59.9-11.7-83-34.6A138.7,138.7,0,0,1,20.4,128,136.8,136.8,0,0,1,45,94.6C68.1,71.6,96,60,128,60s59.9,11.6,83,34.6A136.8,136.8,0,0,1,235.6,128,136.8,136.8,0,0,1,211,161.4ZM128,84a44,44,0,1,0,44,44A44,44,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"></path>` : `${weight === "regular" ? `<path d="M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,192c-30.8,0-57.7-11.2-79.9-33.3A130.3,130.3,0,0,1,25,128,130.3,130.3,0,0,1,48.1,97.2C70.3,75.2,97.2,64,128,64s57.7,11.2,79.9,33.2A130.3,130.3,0,0,1,231,128C223.8,141.5,192.4,192,128,192Zm0-112a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.1,32.1,0,0,1,128,160Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Fire = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M159.9,142.9a12,12,0,1,1,23.9,2.2,56.2,56.2,0,0,1-45.6,50l-2.2.2a12.1,12.1,0,0,1-11.8-9.9,11.9,11.9,0,0,1,9.6-13.9A32.1,32.1,0,0,0,159.9,142.9ZM224,140a96,96,0,0,1-192,0c0-23.9,10.1-51.2,30-81.3a12.1,12.1,0,0,1,16.7-3.3l28.4,18.9L136,13.7a11.9,11.9,0,0,1,19.3-3.3c14.9,14.9,31.9,32.9,45.2,54.1C216.3,89.6,224,114.3,224,140Zm-24,0c0-39.3-22.7-71.5-49.8-100.4L122.8,97.2a12,12,0,0,1-17.5,4.8L75.6,82.2C62.6,104,56,123.4,56,140a72,72,0,0,0,144,0Z"></path>` : `${weight === "duotone" ? `<path d="M212,140a84,84,0,0,1-168,0c0-24.8,12.6-51.4,28-74.6h0L112,92l34.8-73.1h0C176,48,212,88,212,140Z" opacity="0.2"></path><path d="M187.3,149.2a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4ZM220,140a92,92,0,0,1-184,0c0-23.1,9.9-49.7,29.4-79.1a8,8,0,0,1,5.1-3.4,8.1,8.1,0,0,1,6,1.2l32.2,21.5,30.9-64.8a7.9,7.9,0,0,1,5.9-4.4,8,8,0,0,1,7,2.2c14.7,14.7,31.6,32.6,44.6,53.4C212.5,91.1,220,115.1,220,140Zm-16,0c0-42.6-25.4-76.8-54.9-107.4L119.2,95.4a7.8,7.8,0,0,1-5.1,4.3,8.2,8.2,0,0,1-6.5-1L74.4,76.5C59.5,100.5,52,121.8,52,140a76,76,0,0,0,152,0Z"></path>` : `${weight === "fill" ? `<path d="M197.1,66.6c-13-20.8-29.9-38.7-44.6-53.4a8,8,0,0,0-7-2.2,7.9,7.9,0,0,0-5.9,4.4L108.7,80.2,76.5,58.7a8.1,8.1,0,0,0-6-1.2,8,8,0,0,0-5.1,3.4C45.9,90.3,36,116.9,36,140a92,92,0,0,0,184,0C220,115.1,212.5,91.1,197.1,66.6Zm-9.8,82.6a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4Z"></path>` : `${weight === "light" ? `<path d="M185.3,148.9a57.7,57.7,0,0,1-48.4,48.4H136a6,6,0,0,1-.9-11.9,46.5,46.5,0,0,0,38.4-38.4,6,6,0,1,1,11.8,1.8ZM218,140a90,90,0,0,1-180,0c0-22.7,9.8-48.9,29-78a6.2,6.2,0,0,1,8.4-1.6l34.2,22.8,31.8-66.9a6.1,6.1,0,0,1,9.7-1.7C185.8,49.3,218,88.5,218,140Zm-12,0c0-44.2-26.9-79.5-57.4-110.8L117.4,94.6a5.8,5.8,0,0,1-3.8,3.2,6,6,0,0,1-4.9-.8L73.8,73.7C58,98.7,50,121,50,140a78,78,0,0,0,156,0Z"></path>` : `${weight === "thin" ? `<path d="M183.3,148.6a55.6,55.6,0,0,1-46.7,46.7H136a4,4,0,0,1-.6-8,47.7,47.7,0,0,0,40-40A4.1,4.1,0,0,1,180,144,4,4,0,0,1,183.3,148.6ZM216,140a88,88,0,0,1-176,0c0-22.3,9.7-48.1,28.7-76.9a4.4,4.4,0,0,1,2.5-1.7,4.2,4.2,0,0,1,3.1.6l36.1,24.1,32.8-68.9a4.4,4.4,0,0,1,2.9-2.3,4.1,4.1,0,0,1,3.5,1.1C184.1,50.4,216,89.3,216,140Zm-8,0c0-45.9-28.3-82.1-60-114.3l-32.4,68a4.2,4.2,0,0,1-2.5,2.2,3.8,3.8,0,0,1-3.3-.6L73.2,70.9C56.5,96.9,48,120.2,48,140a80,80,0,0,0,160,0Z"></path>` : `${weight === "regular" ? `<path d="M187.3,149.2a59.6,59.6,0,0,1-50.1,50.1H136a8,8,0,0,1-1.2-15.9,44.4,44.4,0,0,0,36.7-36.7,8,8,0,1,1,15.8,2.4ZM220,140a92,92,0,0,1-184,0c0-23.1,9.9-49.7,29.4-79.1a8,8,0,0,1,5.1-3.4,8.1,8.1,0,0,1,6,1.2l32.2,21.5,30.9-64.8a7.9,7.9,0,0,1,5.9-4.4,8,8,0,0,1,7,2.2c14.7,14.7,31.6,32.6,44.6,53.4C212.5,91.1,220,115.1,220,140Zm-16,0c0-42.6-25.4-76.8-54.9-107.4L119.2,95.4a7.8,7.8,0,0,1-5.1,4.3,8.2,8.2,0,0,1-6.5-1L74.4,76.5C59.5,100.5,52,121.8,52,140a76,76,0,0,0,152,0Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const TrendUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M244,56v64a12,12,0,0,1-24,0V85l-75.5,75.5a12,12,0,0,1-17,0L96,129,32.5,192.5a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>` : `${weight === "duotone" ? `<path d="M240,56v64a8,8,0,0,1-16,0V75.3l-82.3,82.4a8.1,8.1,0,0,1-11.4,0L96,123.3,29.7,189.7A8.3,8.3,0,0,1,24,192a8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,0L136,140.7,212.7,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>` : `${weight === "fill" ? `<path d="M240,56v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L200,99.3l-58.3,58.4a8.1,8.1,0,0,1-11.4,0L96,123.3,29.7,189.7A8.3,8.3,0,0,1,24,192a8.5,8.5,0,0,1-5.7-2.3,8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,0L136,140.7,188.7,88,162.3,61.7a8.4,8.4,0,0,1-1.7-8.8A8.1,8.1,0,0,1,168,48h64A8,8,0,0,1,240,56Z"></path>` : `${weight === "light" ? `<path d="M238,56v64a6,6,0,0,1-12,0V70.5l-85.8,85.7a5.8,5.8,0,0,1-8.4,0L96,120.5,28.2,188.2a5.9,5.9,0,0,1-8.4-8.4l72-72a5.8,5.8,0,0,1,8.4,0L136,143.5,217.5,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"></path>` : `${weight === "thin" ? `<path d="M236,56v64a4,4,0,0,1-8,0V65.7l-89.2,89.1a3.9,3.9,0,0,1-5.6,0L96,117.7,26.8,186.8A3.8,3.8,0,0,1,24,188a3.9,3.9,0,0,1-2.8-1.2,3.9,3.9,0,0,1,0-5.6l72-72a3.9,3.9,0,0,1,5.6,0L136,146.3,222.3,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"></path>` : `${weight === "regular" ? `<path d="M240,56v64a8,8,0,0,1-16,0V75.3l-82.3,82.4a8.1,8.1,0,0,1-11.4,0L96,123.3,29.7,189.7a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,0L136,140.7,212.7,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const CardCarousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".carousel-home.svelte-1lhigrx{background-size:cover !important;background-position:center !important}",
  map: null
};
let minVotes$1 = 3;
const CardCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  let { totalAverage } = $$props;
  let grade = 0;
  let wheightedRating = 0;
  onValue(ref(realDB, "recipes-grade/" + recipe.id), (snapshot) => {
    if (snapshot.val()) {
      grade = 0;
      wheightedRating = 0;
      grade = snapshot.val().average;
      const numberVotes = Object.values(snapshot.val().stars).length;
      wheightedRating = (numberVotes / (numberVotes + minVotes$1) * grade + 1 / (numberVotes + minVotes$1) * totalAverage).toFixed(1);
    }
  });
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  if ($$props.totalAverage === void 0 && $$bindings.totalAverage && totalAverage !== void 0)
    $$bindings.totalAverage(totalAverage);
  $$result.css.add(css);
  return `<div class="carousel-home svelte-1lhigrx" style="${"background:url(" + escape(recipe.cover, true) + ")"}"><a href="${"/recipes/" + escape(recipe.id, true)}"><div class="carousel-home bg-gradient-to-t from-secondary to-transparent svelte-1lhigrx"><div class="px-4 pb-4 text-white flex flex-col-reverse w-full"><div class="flex justify-between items-center"><div class="text-sm font-poppins">${escape(recipe.data.category.join(", "))}</div>
                    <div class="flex flex-row text-sm text-white font-poppins items-center">${escape(wheightedRating)}
                        <div class="text-sm text-yellow-500">${validate_component(Star, "Star").$$render($$result, { weight: "fill" }, {}, {})}</div></div></div>
                <div class="text-2xl font-bold font-cormorant leading-6">${escape(recipe.data.title)}</div></div></div></a>
</div>`;
});
let minVotes = 3;
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipes, $$unsubscribe_recipes;
  $$unsubscribe_recipes = subscribe(recipes, (value) => $recipes = value);
  let totalAverage = 0;
  onValue(ref(realDB, "recipes-grade/"), (snapshot) => {
    if (snapshot.val()) {
      totalAverage = 0;
      const recipes2 = Object.values(snapshot.val());
      recipes2.forEach((r) => {
        if (r.average != void 0) {
          totalAverage += r.average;
        }
      });
      totalAverage /= recipes2.length;
    }
  });
  let grade = 0;
  let wheightedRating = 0;
  onValue(ref(realDB, "recipes-grade/"), (snapshot) => {
    featuredRecipes.set([]);
    if (snapshot.val()) {
      for (let i = 0; i < $recipes.length; i++) {
        grade = 0;
        wheightedRating = 0;
        grade = snapshot.val()[$recipes[i].id].average;
        const numberVotes = Object.values(snapshot.val()[$recipes[i].id].stars).length;
        wheightedRating = (numberVotes / (numberVotes + minVotes) * grade + 1 / (numberVotes + minVotes) * totalAverage).toFixed(1);
        featuredRecipes.update((featuredRecipe) => [
          ...featuredRecipe,
          {
            id: $recipes[i].id,
            data: $recipes[i].data,
            cover: $recipes[i].cover,
            rating: wheightedRating
          }
        ]);
      }
    }
  });
  $$unsubscribe_recipes();
  return `<div class="carousel carousel-center px-4 py-2 space-x-4">${each($recipes, (recipe) => {
    return `${validate_component(CardCarousel, "CardCarousel").$$render($$result, { recipe, totalAverage }, {}, {})}`;
  })}</div>`;
});
const LoadingCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel carousel-center px-4 py-2 space-x-4 ">${each([1, 2, 3, 4, 5, 6], (x) => {
    return `<div class="flex flex-col carousel-item w-80 h-40 animate-pulse bg-accent rounded-box"></div>
		<span class="sr-only">Loading...</span>`;
  })}</div>`;
});
const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="filters flex gap-x-1 py-2"><span class="badge rounded-r-lg p-4 text-xl text-secondary">${validate_component(Fire, "Fire").$$render($$result, {}, {}, {})}</span>
	<span class="badge rounded-lg p-4 text-xl text-secondary">${validate_component(Eye, "Eye").$$render($$result, {}, {}, {})}</span>
	<span class="badge rounded-l-lg p-4 text-xl text-secondary">${validate_component(TrendUp, "TrendUp").$$render($$result, {}, {}, {})}</span></div>`;
});
const LoadingFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="filters flex gap-x-1 py-2"><span class="badge rounded-r-lg p-4 text-xl animate-pulse bg-accent text-base-100">${validate_component(Fire, "Fire").$$render($$result, {}, {}, {})}</span>
	<span class="badge rounded-lg p-4 text-xl animate-pulse bg-accent text-base-100">${validate_component(Eye, "Eye").$$render($$result, {}, {}, {})}</span>
	<span class="badge rounded-l-lg p-4 text-xl animate-pulse bg-accent text-base-100">${validate_component(TrendUp, "TrendUp").$$render($$result, {}, {}, {})}</span></div>`;
});
const LoadingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="rounded-3xl flex flex-col items-center -mb-16 animate-pulse"><div class="rounded-3xl h-32 w-32 z-10 bg-accent"></div>
	<div class="card bg-accent z-0 w-40 h-40 flex justify-end -translate-y-16"></div></div>`;
});
const LoadingCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap"><div class="pl-2 flex flex-col gap-4 md:flex-row">${each([1, 2, 3], (x) => {
    return `${validate_component(LoadingCard, "LoadingCard").$$render($$result, {}, {}, {})}`;
  })}</div>

		<div class="pr-2 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">${validate_component(LoadingFilters, "LoadingFilters").$$render($$result, {}, {}, {})}
      ${each([1, 2, 3], (x) => {
    return `${validate_component(LoadingCard, "LoadingCard").$$render($$result, {}, {}, {})}`;
  })}</div></div>

`;
});
let profile = "";
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipes, $$unsubscribe_recipes;
  $$unsubscribe_recipes = subscribe(recipes, (value) => $recipes = value);
  let totalAverage = 0;
  let { bg_color: bg_color2 } = $$props;
  onValue(ref(realDB, "recipes-grade/"), (snapshot) => {
    if (snapshot.val()) {
      totalAverage = 0;
      const recipes2 = Object.values(snapshot.val());
      recipes2.forEach((r) => {
        if (r.average != void 0) {
          totalAverage += r.average;
        }
      });
      totalAverage /= recipes2.length;
    }
  });
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color2 !== void 0)
    $$bindings.bg_color(bg_color2);
  $$unsubscribe_recipes();
  return `<div class="flex flex-row gap-4 justify-center md:w-screen md:flex-wrap">${$recipes.length == 0 ? `${validate_component(LoadingCards, "LoadingCards").$$render($$result, {}, {}, {})}` : `<div class="pl-2 flex flex-col gap-4 md:flex-row">${each($recipes, (recipe) => {
    return `${$recipes.indexOf(recipe) % 2 == 0 ? `${validate_component(Card, "Card").$$render($$result, { recipe, totalAverage, bg_color: bg_color2, profile }, {}, {})}` : ``}`;
  })}</div>

		<div class="pr-2 flex flex-col gap-4 md:flex-row md:p-2 md:flex-wrap">${validate_component(Filters, "Filters").$$render($$result, {}, {}, {})}
			${each($recipes, (recipe) => {
    return `${$recipes.indexOf(recipe) % 2 != 0 ? `${validate_component(Card, "Card").$$render($$result, { recipe, totalAverage, bg_color: bg_color2, profile }, {}, {})}` : ``}`;
  })}</div>`}</div>`;
});
let bg_color = "accent";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipes, $$unsubscribe_recipes;
  $$unsubscribe_recipes = subscribe(recipes, (value) => $recipes = value);
  $$unsubscribe_recipes();
  return `<div class="homepage"><div class="car">${$recipes.length == 0 ? `${validate_component(LoadingCarousel, "LoadingCarousel").$$render($$result, {}, {}, {})}` : `${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}`}</div>

	<div class="cards pb-4 px-4">${$recipes.length == 0 ? `<div class="flex bg-accent animate-pulse h-8 w-44 my-4 rounded-3xl"></div>` : `<h1 class="text-3xl font-cormorant font-bold py-4">Recommended</h1>`}
		${validate_component(Cards, "Cards").$$render($$result, { bg_color }, {}, {})}</div></div>`;
});
export {
  Page as default
};
