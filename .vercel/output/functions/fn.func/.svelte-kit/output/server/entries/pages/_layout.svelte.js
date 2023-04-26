import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, h as subscribe, v as validate_component, i as add_attribute } from "../../chunks/index3.js";
import "../../chunks/firebase.client.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import { p as page } from "../../chunks/stores.js";
const app = "";
const defaultAvatar = "https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=" + Math.random();
const House = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M208,228H160a20.1,20.1,0,0,1-20-20V164H116v44a20.1,20.1,0,0,1-20,20H48a20.1,20.1,0,0,1-20-20V115.5a20,20,0,0,1,6.6-14.8L114.5,28a20,20,0,0,1,27,0l80,72.7a20.3,20.3,0,0,1,6.5,14.8V208a20.1,20.1,0,0,1-20,20Zm-44-24h40V117.3L128,48.2,52,117.3V204H92V160a20.1,20.1,0,0,1,20-20h32a20.1,20.1,0,0,1,20,20Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a7.9,7.9,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"></path></g><path d="M208,224H160a16,16,0,0,1-16-16V160H112v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.5a16,16,0,0,1,5.2-11.8l80-72.7a16,16,0,0,1,21.6,0l80,72.7a16,16,0,0,1,5.2,11.8V208a16,16,0,0,1-16,16Zm-96-80h32a16,16,0,0,1,16,16v48h48V115.5L128,42.8,48,115.5V208H96V160A16,16,0,0,1,112,144Z"></path>` : `${weight === "fill" ? `<path d="M224,115.5V208a16.1,16.1,0,0,1-8.4,14.1A15.3,15.3,0,0,1,208,224H160a8,8,0,0,1-8-8V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a15.9,15.9,0,0,1-12-5.4,16.9,16.9,0,0,1-4-11V115.5a16,16,0,0,1,5.2-11.8l80-72.7a16,16,0,0,1,21.6,0l80,72.7A16,16,0,0,1,224,115.5Z"></path>` : `${weight === "light" ? `<path d="M208,222H160a14,14,0,0,1-14-14V160a2,2,0,0,0-2-2H112a2,2,0,0,0-2,2v48a14,14,0,0,1-14,14H48a14.3,14.3,0,0,1-9.9-4.1A14.1,14.1,0,0,1,34,208V115.5a13.9,13.9,0,0,1,4.6-10.3l80-72.8a14.1,14.1,0,0,1,18.8,0l80,72.8a13.9,13.9,0,0,1,4.6,10.3V208a14,14,0,0,1-14,14Zm-96-76h32a14,14,0,0,1,14,14v48a2,2,0,0,0,2,2h48a2.1,2.1,0,0,0,2-2V115.5a1.8,1.8,0,0,0-.6-1.4L129.3,41.3a1.9,1.9,0,0,0-2.6,0l-80,72.8a1.6,1.6,0,0,0-.7,1.4V208a2.1,2.1,0,0,0,2,2H96a2,2,0,0,0,2-2V160A14,14,0,0,1,112,146Z"></path>` : `${weight === "thin" ? `<path d="M208,220H160a12,12,0,0,1-12-12V160a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v48a12,12,0,0,1-12,12H48a11.9,11.9,0,0,1-8.5-3.5A12.3,12.3,0,0,1,36,208V115.5a11.8,11.8,0,0,1,3.9-8.8l80-72.8a12,12,0,0,1,16.2,0l80,72.8a11.8,11.8,0,0,1,3.9,8.8V208a12,12,0,0,1-12,12Zm-96-72h32a12,12,0,0,1,12,12v48a4,4,0,0,0,4,4h48a4.1,4.1,0,0,0,4-4V115.5a3.9,3.9,0,0,0-1.3-2.9l-80-72.8a4.1,4.1,0,0,0-5.4,0l-80,72.8a3.9,3.9,0,0,0-1.3,2.9V208a4.1,4.1,0,0,0,4,4H96a4,4,0,0,0,4-4V160A12,12,0,0,1,112,148Z"></path>` : `${weight === "regular" ? `<path d="M208,224H160a16,16,0,0,1-16-16V160H112v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.5a16,16,0,0,1,5.2-11.8l80-72.7a16,16,0,0,1,21.6,0l80,72.7a16,16,0,0,1,5.2,11.8V208a16,16,0,0,1-16,16Zm-96-80h32a16,16,0,0,1,16,16v48h48V115.5L128,42.8,48,115.5V208H96V160A16,16,0,0,1,112,144Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const MagnifyingGlass = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M232.5,215.5l-40.7-40.7A94.9,94.9,0,0,0,212,116a96,96,0,1,0-96,96,94.9,94.9,0,0,0,58.8-20.2l40.7,40.7a12.1,12.1,0,0,0,17,0A12,12,0,0,0,232.5,215.5ZM44,116a72,72,0,1,1,72,72A72.1,72.1,0,0,1,44,116Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><circle cx="116" cy="116" r="84"></circle></g><path d="M229.7,218.3l-43.3-43.2a92.2,92.2,0,1,0-11.3,11.3l43.2,43.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM40,116a76,76,0,1,1,76,76A76.1,76.1,0,0,1,40,116Z"></path>` : `${weight === "fill" ? `<path d="M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.7,113.7a8.2,8.2,0,0,1-11.4,0l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.3,43.2A8.1,8.1,0,0,1,229.7,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z"></path>` : `${weight === "light" ? `<path d="M228.2,219.8l-44.5-44.6a90.2,90.2,0,1,0-8.5,8.5l44.6,44.5a5.9,5.9,0,0,0,8.4-8.4ZM38,116a78,78,0,1,1,78,78A78.1,78.1,0,0,1,38,116Z"></path>` : `${weight === "thin" ? `<path d="M226.8,221.2,181,175.3a88,88,0,1,0-5.7,5.7l45.9,45.8a3.9,3.9,0,0,0,5.6,0A3.9,3.9,0,0,0,226.8,221.2ZM36,116a80,80,0,1,1,80,80A80.1,80.1,0,0,1,36,116Z"></path>` : `${weight === "regular" ? `<path d="M229.7,218.3l-43.3-43.2a92.2,92.2,0,1,0-11.3,11.3l43.2,43.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM40,116a76,76,0,1,1,76,76A76.1,76.1,0,0,1,40,116Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const PlusCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><circle cx="128" cy="128" r="96"></circle></g><path d="M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path><path d="M168,120H136V88a8,8,0,0,0-16,0v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0V136h32a8,8,0,0,0,0-16Z"></path>` : `${weight === "fill" ? `<path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>` : `${weight === "light" ? `<path d="M128,26A102,102,0,1,0,230,128,102.1,102.1,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H134v34a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h34V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z"></path>` : `${weight === "thin" ? `<path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"></path>` : `${weight === "regular" ? `<path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Bell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M224.3,173.9c-5.7-9.8-12.5-28.5-12.5-61.9v-7.1c0-46.5-37.3-84.6-83.2-84.9H128a83.8,83.8,0,0,0-83.8,84v8c0,33.4-6.8,52.1-12.5,61.9A20.1,20.1,0,0,0,49,204H84.2a44,44,0,0,0,87.6,0H207a20.1,20.1,0,0,0,17.3-30.1ZM128,220a20.1,20.1,0,0,1-19.6-16h39.2A20.1,20.1,0,0,1,128,220ZM55.6,180c10.3-21.6,12.6-48.5,12.6-68v-8A59.7,59.7,0,0,1,128,44h.5c32.7.2,59.3,27.5,59.3,60.9V112c0,19.5,2.3,46.4,12.6,68Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M56.2,104a71.8,71.8,0,0,1,72.3-72c39.6.3,71.3,33.2,71.3,72.9V112c0,35.8,7.5,56.6,14.1,67.9A8,8,0,0,1,207,192H49a8,8,0,0,1-6.9-12.1c6.6-11.3,14.1-32.1,14.1-67.9Z"></path></g><path d="M220.8,175.9c-5.9-10.2-13-29.6-13-63.9v-7.1c0-44.3-35.5-80.6-79.2-80.9H128a79.9,79.9,0,0,0-79.8,80v8c0,34.3-7.1,53.7-13,63.9A16,16,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8A16.2,16.2,0,0,0,220.8,175.9ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM49,184c6.9-12,15.2-34.1,15.2-72v-8A63.8,63.8,0,0,1,128,40h.5c34.9.2,63.3,29.4,63.3,64.9V112c0,37.9,8.3,60,15.2,72Z"></path>` : `${weight === "fill" ? `<path d="M220.8,175.9c-5.9-10.2-13-29.6-13-63.9v-7.1c0-44.3-35.5-80.6-79.2-80.9H128a79.9,79.9,0,0,0-79.8,80v8c0,34.3-7.1,53.7-13,63.9A16,16,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8A16.2,16.2,0,0,0,220.8,175.9ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224Z"></path>` : `${weight === "light" ? `<path d="M219.1,176.9c-6.1-10.4-13.3-30.1-13.3-64.9v-7.1c0-43.2-34.6-78.6-77.2-78.9H128a77.8,77.8,0,0,0-77.8,78v8c0,34.8-7.2,54.5-13.3,64.9a14,14,0,0,0,0,14.1A13.7,13.7,0,0,0,49,198H90v2a38,38,0,0,0,76,0v-2h41a13.7,13.7,0,0,0,12.1-7A14,14,0,0,0,219.1,176.9ZM154,200a26,26,0,0,1-52,0v-2h52Zm54.7-15a1.8,1.8,0,0,1-1.7,1H49a1.8,1.8,0,0,1-1.7-1,2,2,0,0,1,0-2c6.8-11.8,14.9-33.6,14.9-71v-8A65.9,65.9,0,0,1,128,38h.5c36,.2,65.3,30.3,65.3,66.9V112c0,37.4,8.1,59.2,14.9,71A2,2,0,0,1,208.7,185Z"></path>` : `${weight === "thin" ? `<path d="M217.4,177.9c-6.2-10.6-13.6-30.7-13.6-65.9v-7.1c0-42.1-33.7-76.6-75.2-76.9H128a76,76,0,0,0-75.8,76v8c0,35.2-7.4,55.3-13.6,65.9A12.1,12.1,0,0,0,49,196H92v4a36,36,0,0,0,72,0v-4h43a12.1,12.1,0,0,0,10.4-18.1ZM156,200a28,28,0,0,1-56,0v-4h56Zm54.5-14a4.1,4.1,0,0,1-3.5,2H49a4.1,4.1,0,0,1-3.5-2,4.1,4.1,0,0,1,.1-4.1C52.2,170.5,60.2,149,60.2,112v-8A67.8,67.8,0,0,1,128,36h.5c37.1.3,67.3,31.2,67.3,68.9V112c0,37,8,58.5,14.6,69.9A4.1,4.1,0,0,1,210.5,186Z"></path>` : `${weight === "regular" ? `<path d="M220.8,175.9c-5.9-10.2-13-29.6-13-63.9v-7.1c0-44.3-35.5-80.6-79.2-80.9H128a79.9,79.9,0,0,0-79.8,80v8c0,34.3-7.1,53.7-13,63.9A16,16,0,0,0,49,200H88a40,40,0,0,0,80,0h39a15.9,15.9,0,0,0,13.9-8A16.2,16.2,0,0,0,220.8,175.9ZM128,224a24.1,24.1,0,0,1-24-24h48A24.1,24.1,0,0,1,128,224ZM49,184c6.9-12,15.2-34.1,15.2-72v-8A63.8,63.8,0,0,1,128,40h.5c34.9.2,63.3,29.4,63.3,64.9V112c0,37.9,8.3,60,15.2,72Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let active = "home";
  page.subscribe(() => {
    active = $page.url.pathname;
  });
  let { photoURL } = $$props;
  if ($$props.photoURL === void 0 && $$bindings.photoURL && photoURL !== void 0)
    $$bindings.photoURL(photoURL);
  $$unsubscribe_page();
  return `<div class="flex w-screen h-16 px-6 justify-between items-center bg-primary rounded-t-3xl"><a href="/home" class="${["footer-icon [&.active]:bg-secondary", active == "/home" ? "active" : ""].join(" ").trim()}">${validate_component(House, "House").$$render($$result, { weight: "bold" }, {}, {})}</a>
	<a href="/search" class="${["footer-icon [&.active]:bg-secondary", active == "/search" ? "active" : ""].join(" ").trim()}">${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render($$result, { weight: "bold" }, {}, {})}</a>
	<a href="/addrecipe" class="${["footer-icon [&.active]:bg-secondary", active == "/addrecipe" ? "active" : ""].join(" ").trim()}">${validate_component(PlusCircle, "PlusCircle").$$render($$result, { weight: "bold" }, {}, {})}</a>
	<a href="/notifications" class="${[
    "footer-icon [&.active]:bg-secondary",
    active == "/notifications" ? "active" : ""
  ].join(" ").trim()}">${validate_component(Bell, "Bell").$$render($$result, { weight: "bold" }, {}, {})}</a>
	<a href="/profile" class="${[
    "avatar placeholder footer-icon [&.active]:bg-secondary",
    active == "/profile" ? "active" : ""
  ].join(" ").trim()}"><div class="rounded-full w-9 h-9">${photoURL ? `<img${add_attribute("src", photoURL, 0)} alt="Avatar" class="rounded-full w-9 h-9">` : `<img${add_attribute("src", defaultAvatar, 0)} alt="Avatar" class="rounded-full w-9 h-9">`}</div></a></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-screen"><div class="navbar justify-center"><a href="/home" class="text-5xl text-secondary font-loftygoals pt-4">MagnaTell</a></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let photoURL = "";
  $$unsubscribe_page();
  return `<div class="grid grid-rows-[5rem_auto_4rem] grid-cols-1">${$page.url.pathname !== "/login" && $page.url.pathname !== "/signup" && $page.url.pathname !== "/profile" ? `<div class="nav">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>` : ``}

	<div>${slots.default ? slots.default({}) : ``}</div>

	${$page.url.pathname !== "/login" && $page.url.pathname !== "/signup" ? `<div class="fixed bottom-0 z-50">${validate_component(Footer, "Footer").$$render($$result, { photoURL }, {}, {})}</div>` : ``}</div>`;
});
export {
  Layout as default
};
