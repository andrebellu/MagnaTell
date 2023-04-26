import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, h as subscribe, v as validate_component, k as each, i as add_attribute } from "../../../../chunks/index3.js";
import { C as Card } from "../../../../chunks/Card.js";
import "firebase/firestore";
import "../../../../chunks/firebase.client.js";
import { r as recipes, b as active, p as pressed, s as searched, c as categories } from "../../../../chunks/store.js";
import "firebase/storage";
const Brandy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M228,88a99.7,99.7,0,0,0-16.2-54.6,11.9,11.9,0,0,0-10-5.4H54.2a11.9,11.9,0,0,0-10,5.4A100,100,0,0,0,116,187.3V212H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V187.3A100.2,100.2,0,0,0,228,88ZM61,52H195a78.3,78.3,0,0,1,8.1,24H52.9A78.3,78.3,0,0,1,61,52Zm-8,48H203a75.9,75.9,0,0,1-150,0Z"></path>` : `${weight === "duotone" ? `<path d="M216,88A88,88,0,0,1,40,88Z" opacity="0.2"></path><path d="M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM58.7,48H197.3a78.8,78.8,0,0,1,10.3,32H48.4A78.8,78.8,0,0,1,58.7,48ZM48.4,96H207.6A80,80,0,0,1,48.4,96Z"></path>` : `${weight === "fill" ? `<path d="M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM48.4,80A78.8,78.8,0,0,1,58.7,48H197.3a78.8,78.8,0,0,1,10.3,32Z"></path>` : `${weight === "light" ? `<path d="M222,88a94.2,94.2,0,0,0-15.2-51.3,6,6,0,0,0-5-2.7H54.2a6,6,0,0,0-5,2.7A94,94,0,0,0,122,181.8V218H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V181.8A94.2,94.2,0,0,0,222,88ZM57.6,46H198.4a81,81,0,0,1,11.4,36H46.2A81,81,0,0,1,57.6,46ZM46.2,94H209.8A82,82,0,0,1,46.2,94Z"></path>` : `${weight === "thin" ? `<path d="M220,88a91.1,91.1,0,0,0-14.9-50.2,4,4,0,0,0-3.3-1.8H54.2a4,4,0,0,0-3.3,1.8A91.1,91.1,0,0,0,36,88a92.1,92.1,0,0,0,88,91.9V220H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V179.9A92.1,92.1,0,0,0,220,88ZM56.4,44H199.6a84.5,84.5,0,0,1,12.3,40H44.1A84.5,84.5,0,0,1,56.4,44ZM44.1,92H211.9A84,84,0,0,1,44.1,92Z"></path>` : `${weight === "regular" ? `<path d="M224,88a96.2,96.2,0,0,0-15.5-52.4,8.2,8.2,0,0,0-6.7-3.6H54.2a8.2,8.2,0,0,0-6.7,3.6A96.1,96.1,0,0,0,120,183.7V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.7A96.2,96.2,0,0,0,224,88ZM58.7,48H197.3a78.8,78.8,0,0,1,10.3,32H48.4A78.8,78.8,0,0,1,58.7,48ZM48.4,96H207.6A80,80,0,0,1,48.4,96Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const CookingPot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M76,40V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm52,12a12,12,0,0,0,12-12V16a12,12,0,0,0-24,0V40A12,12,0,0,0,128,52Zm40,0a12,12,0,0,0,12-12V16a12,12,0,0,0-24,0V40A12,12,0,0,0,168,52Zm83.2,53.6L224,126v58a36,36,0,0,1-36,36H68a36,36,0,0,1-36-36V126L4.8,105.6A12,12,0,0,1,19.2,86.4L32,96V88A20.1,20.1,0,0,1,52,68H204a20.1,20.1,0,0,1,20,20v8l12.8-9.6a12,12,0,0,1,14.4,19.2ZM200,92H56v92a12,12,0,0,0,12,12H188a12,12,0,0,0,12-12Z"></path>` : `${weight === "duotone" ? `<path d="M216,88v96a23.9,23.9,0,0,1-24,24H64a23.9,23.9,0,0,1-24-24V88a8,8,0,0,1,8-8H208A8,8,0,0,1,216,88Z" opacity="0.2"></path><path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32.1,32.1,0,0,1-32,32H64a32.1,32.1,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V88A16,16,0,0,1,48,72H208a16,16,0,0,1,16,16v16l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z"></path>` : `${weight === "fill" ? `<path d="M252.8,102.4,224,124v60a32.1,32.1,0,0,1-32,32H64a32.1,32.1,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V88A16,16,0,0,1,48,72H208a16,16,0,0,1,16,16v16l19.2-14.4a8,8,0,0,1,9.6,12.8ZM160,56a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm-32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56ZM96,56a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,96,56Z"></path>` : `${weight === "light" ? `<path d="M90,48V16a6,6,0,0,1,12,0V48a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,128,54Zm32,0a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,160,54Zm91.6,46.8L222,123v61a30.1,30.1,0,0,1-30,30H64a30.1,30.1,0,0,1-30-30V123L4.4,100.8a6,6,0,0,1,7.2-9.6L34,108V88A14,14,0,0,1,48,74H208a14,14,0,0,1,14,14v20l22.4-16.8a6,6,0,0,1,7.2,9.6ZM210,88a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v96a18.1,18.1,0,0,0,18,18H192a18.1,18.1,0,0,0,18-18Z"></path>` : `${weight === "thin" ? `<path d="M92,48V16a4,4,0,0,1,8,0V48a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,128,52Zm32,0a4,4,0,0,0,4-4V16a4,4,0,0,0-8,0V48A4,4,0,0,0,160,52Zm90.4,47.2L220,122v62a28.1,28.1,0,0,1-28,28H64a28.1,28.1,0,0,1-28-28V122L5.6,99.2a4,4,0,0,1,4.8-6.4L36,112V88A12,12,0,0,1,48,76H208a12,12,0,0,1,12,12v24l25.6-19.2a4,4,0,1,1,4.8,6.4ZM212,88a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v96a20.1,20.1,0,0,0,20,20H192a20.1,20.1,0,0,0,20-20Z"></path>` : `${weight === "regular" ? `<path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32.1,32.1,0,0,1-32,32H64a32.1,32.1,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V88A16,16,0,0,1,48,72H208a16,16,0,0,1,16,16v16l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Egg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M190,57.3C171.1,29,147.9,12,128,12S84.9,29,66,57.3,36,120.5,36,152a92,92,0,0,0,184,0C220,120.5,209.1,86,190,57.3ZM128,220a68.1,68.1,0,0,1-68-68c0-61.1,46.2-116,68-116s68,54.9,68,116A68.1,68.1,0,0,1,128,220Z"></path>` : `${weight === "duotone" ? `<path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" opacity="0.2"></path><path d="M186.7,59.6C168.5,32.3,146.5,16,128,16S87.5,32.3,69.3,59.6,40,121.2,40,152a88,88,0,0,0,176,0C216,121.2,205.3,87.5,186.7,59.6ZM128,224a72.1,72.1,0,0,1-72-72c0-27.7,9.7-58.2,26.7-83.6C97.2,46.6,115.4,32,128,32s30.8,14.6,45.3,36.4c17,25.4,26.7,55.9,26.7,83.6A72.1,72.1,0,0,1,128,224Z"></path>` : `${weight === "fill" ? `<path d="M216,152a88,88,0,0,1-176,0c0-30.8,10.7-64.5,29.3-92.4S109.5,16,128,16s40.5,16.3,58.7,43.6S216,121.2,216,152Z"></path>` : `${weight === "light" ? `<path d="M185,60.7C167.2,34,145.9,18,128,18S88.8,34,71,60.7,42,121.6,42,152a86,86,0,0,0,172,0C214,121.6,203.4,88.3,185,60.7ZM128,226a74.1,74.1,0,0,1-74-74c0-28.1,9.8-58.9,27-84.7C96.1,44.7,114.6,30,128,30s31.9,14.7,47,37.3c17.2,25.8,27,56.6,27,84.7A74.1,74.1,0,0,1,128,226Z"></path>` : `${weight === "thin" ? `<path d="M128,20C92.9,20,44,86.5,44,152a84,84,0,0,0,168,0C212,86.5,163.1,20,128,20Zm0,208a76.1,76.1,0,0,1-76-76c0-28.5,10-59.7,27.3-85.8C94.8,43,113.9,28,128,28s33.2,15,48.7,38.2C194,92.3,204,123.5,204,152A76.1,76.1,0,0,1,128,228Z"></path>` : `${weight === "regular" ? `<path d="M186.7,59.6C168.5,32.3,146.5,16,128,16S87.5,32.3,69.3,59.6,40,121.2,40,152a88,88,0,0,0,176,0C216,121.2,205.3,87.5,186.7,59.6ZM128,224a72.1,72.1,0,0,1-72-72c0-27.7,9.7-58.2,26.7-83.6C97.2,46.6,115.4,32,128,32s30.8,14.6,45.3,36.4c17,25.4,26.7,55.9,26.7,83.6A72.1,72.1,0,0,1,128,224Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const FishSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M140,76a16,16,0,1,1,16,16A16,16,0,0,1,140,76Zm61,94.8c-26.5,26.5-67.8,38-123.2,34.4,1.5,10.3,3.5,21,5.9,32.2a12,12,0,0,1-9.1,14.3L72,252a12,12,0,0,1-11.7-9.4c-3.1-13.9-5.4-27.2-7.1-39.8-12.6-1.7-25.9-4.1-39.8-7.1a12,12,0,0,1,5.2-23.5c11.1,2.5,21.9,4.5,32.2,6C47.2,122.8,58.7,81.5,85.2,55c42.4-42.5,109-32.1,128.4-27.9a20,20,0,0,1,15.3,15.3C233.1,61.8,243.5,128.4,201,170.8ZM116.2,60.9A83.8,83.8,0,0,0,195,139.8c7.6-12.3,12.2-27.3,13.7-44.8A168.4,168.4,0,0,0,206,50C189.5,46.8,148,41.4,116.2,60.9Zm12.2,118.6c18.9-3.1,34.7-9.2,47-18.3A108,108,0,0,1,94.8,80.6c-9.1,12.3-15.3,28.1-18.3,47-2.6,15.6-3.1,33.5-1.5,53.4C94.9,182.5,112.7,182.1,128.4,179.5Z"></path>` : `${weight === "duotone" ? `<path d="M201.4,152c-20.6,28.1-60.8,48.3-137.4,40h0C55.7,115.4,75.9,75.2,104,54.6h0A96,96,0,0,0,201.3,152Z" opacity="0.2"></path><path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm30.2,92c-26.5,26.4-68.4,37.4-125.1,32.9,1.6,11.8,3.8,24.3,6.7,37.4a7.9,7.9,0,0,1-6.1,9.5L72,248a8,8,0,0,1-7.8-6.3c-3.3-14.9-5.7-29.1-7.4-42.5-13.4-1.7-27.6-4.2-42.5-7.4a8,8,0,0,1,3.4-15.7c13.1,2.9,25.6,5.2,37.4,6.8C50.6,126.2,61.6,84.3,88,57.8c41-41,105.8-30.9,124.7-26.8A15.9,15.9,0,0,1,225,43.3C229.1,62.2,239.2,127,198.2,168Zm-13.7-9.1a103,103,0,0,1-58-29.4A103.6,103.6,0,0,1,97.1,71.4C75.3,95.2,66.6,133.1,71.3,184.7,122.8,189.4,160.8,180.7,184.5,158.9ZM209.4,46.7c-15-3.3-62.3-10.9-97.3,12.1a87.9,87.9,0,0,0,85.1,85.1C220.2,108.9,212.6,61.6,209.4,46.7Z"></path>` : `${weight === "fill" ? `<path d="M225,43.3A15.9,15.9,0,0,0,212.7,31C193.8,26.9,129,16.8,88,57.8,61.6,84.3,50.6,126.2,55.1,182.9c-11.8-1.6-24.3-3.9-37.4-6.8a8,8,0,0,0-3.4,15.7c14.9,3.2,29.1,5.7,42.5,7.4,1.7,13.4,4.1,27.6,7.4,42.5A8,8,0,0,0,72,248l1.7-.2a7.9,7.9,0,0,0,6.1-9.5c-2.9-13.1-5.1-25.6-6.7-37.4,56.7,4.5,98.6-6.5,125.1-32.9C239.2,127,229.1,62.2,225,43.3ZM197.2,143.9a87.9,87.9,0,0,1-85.1-85.1c35-23,82.3-15.4,97.3-12.1C212.6,61.6,220.2,108.9,197.2,143.9ZM168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Z"></path>` : `${weight === "light" ? `<path d="M166,76a10,10,0,1,1-10-10A10,10,0,0,1,166,76Zm30.8,90.6c-26.5,26.3-68.7,37.1-126,32.1,1.6,12.6,4,25.9,7.1,40a6.1,6.1,0,0,1-4.6,7.2H72a6.1,6.1,0,0,1-5.9-4.7c-3.3-15.5-5.9-30.1-7.5-43.9-13.8-1.7-28.5-4.2-43.9-7.6a6,6,0,1,1,2.6-11.7c14,3.1,27.4,5.4,40,7.1-5-57.3,5.8-99.5,32.1-126A93.8,93.8,0,0,1,100.2,50l.6-.4c40-29,94.5-20.3,111.5-16.7a14.2,14.2,0,0,1,10.8,10.8C227.1,62.3,237.1,126.3,196.8,166.6Zm-8.5-8.5.6-.7a101,101,0,0,1-61-29.3,101,101,0,0,1-29.3-61l-.7.6C73.8,91.9,64.2,131.8,69.4,186.5,124.2,191.7,164.1,182.2,188.3,158.1Zm23-111.9a1.9,1.9,0,0,0-1.5-1.5c-15.4-3.3-63.9-11.1-99.8,13.1a89.2,89.2,0,0,0,26.4,61.8A88.7,88.7,0,0,0,198.2,146C222.4,110.1,214.6,61.6,211.3,46.2Z"></path>` : `${weight === "thin" ? `<path d="M164,76a8,8,0,1,1-8-8A8,8,0,0,1,164,76Zm31.3,89.1c-26.3,26.4-68.9,36.8-126.8,31.4,1.7,13.4,4.1,27.6,7.4,42.6a4,4,0,0,1-3,4.8H72a4.1,4.1,0,0,1-3.9-3.1,447.6,447.6,0,0,1-7.7-45.3c-14.2-1.7-29.3-4.2-45.3-7.7a4,4,0,0,1,1.8-7.8c15,3.2,29.2,5.7,42.6,7.4C54.1,129.6,64.5,87,90.8,60.7a92.8,92.8,0,0,1,10.9-9.3h.1c39.4-28.6,93.3-20,110.1-16.4a12,12,0,0,1,9.2,9.2C225.1,62.5,235,125.6,195.3,165.1Zm-5.6-5.6,3.5-3.7a99,99,0,0,1-63.9-29.1,99,99,0,0,1-29.1-63.9l-3.7,3.5C71.7,91.2,62,132.1,67.6,188.4,123.9,194,164.8,184.3,189.7,159.5ZM213.3,45.8a4.4,4.4,0,0,0-3.1-3.1c-15.7-3.4-65.6-11.4-102.2,14A91.8,91.8,0,0,0,199.3,148C224.7,111.4,216.7,61.5,213.3,45.8Z"></path>` : `${weight === "regular" ? `<path d="M168,76a12,12,0,1,1-12-12A12,12,0,0,1,168,76Zm30.2,92c-26.5,26.4-68.4,37.4-125.1,32.9,1.6,11.8,3.8,24.3,6.7,37.4a7.9,7.9,0,0,1-6.1,9.5L72,248a8,8,0,0,1-7.8-6.3c-3.3-14.9-5.7-29.1-7.4-42.5-13.4-1.7-27.6-4.2-42.5-7.4a8,8,0,0,1,3.4-15.7c13.1,2.9,25.6,5.2,37.4,6.8C50.6,126.2,61.6,84.3,88,57.8c41-41,105.8-30.9,124.7-26.8A15.9,15.9,0,0,1,225,43.3C229.1,62.2,239.2,127,198.2,168Zm-13.7-9.1a103,103,0,0,1-58-29.4A103.6,103.6,0,0,1,97.1,71.4C75.3,95.2,66.6,133.1,71.3,184.7,122.8,189.4,160.8,180.7,184.5,158.9ZM209.4,46.7c-15-3.3-62.3-10.9-97.3,12.1a87.9,87.9,0,0,0,85.1,85.1C220.2,108.9,212.6,61.6,209.4,46.7Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ForkKnife = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M72,72V32a12,12,0,0,1,24,0V72a12,12,0,0,1-24,0Zm48-52a12,12,0,0,0-12,12V80a24,24,0,0,1-48,0V32a12,12,0,0,0-24,0V80a48.2,48.2,0,0,0,36,46.5V224a12,12,0,0,0,24,0V126.5A48.2,48.2,0,0,0,132,80V32A12,12,0,0,0,120,20Zm96,12V224a12,12,0,0,1-24,0V172H148a12,12,0,0,1-11.9-13.3,398,398,0,0,1,11.9-60c12.3-43.7,29.8-69.9,51.9-78A12,12,0,0,1,216,32ZM192,57c-7.8,10.8-15,27.2-21,48.3a385,385,0,0,0-9.2,42.7H192Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M204,160H148S160,48,204,32"></path></g><path d="M84,80a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0V72A8,8,0,0,0,84,80Z"></path><path d="M119.9,30.7a8,8,0,1,0-15.8,2.6L112,80.6a28,28,0,0,1-56,0l7.9-47.3a8,8,0,1,0-15.8-2.6l-8,48A5.7,5.7,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a5.7,5.7,0,0,0-.1-1.3Z"></path><path d="M208.6,25.4a8.2,8.2,0,0,0-7.3-.9c-20.8,7.5-37.5,32.9-49.5,75.3A412.8,412.8,0,0,0,140,159.1a8.1,8.1,0,0,0,2,6.2,8.2,8.2,0,0,0,6,2.7h48v56a8,8,0,0,0,16,0V32A8.2,8.2,0,0,0,208.6,25.4ZM196,152H157.1a402.3,402.3,0,0,1,10.1-47.8c7.9-28,17.7-47.6,28.8-57.8Z"></path>` : `${weight === "fill" ? `<path d="M127.9,78.8A4.9,4.9,0,0,1,128,80a44.1,44.1,0,0,1-36,43.3V224a8,8,0,0,1-16,0V123.3A44.1,44.1,0,0,1,40,80a4.9,4.9,0,0,1,.1-1.2h0l8-48a8,8,0,1,1,15.8,2.6L57.4,72H76V32a8,8,0,0,1,16,0V72h18.6l-6.5-38.7a8,8,0,1,1,15.8-2.6l8,48Zm80.7-53.4a8.2,8.2,0,0,0-7.3-.9c-20.8,7.5-37.5,32.9-49.5,75.3A412.8,412.8,0,0,0,140,159.1a8.1,8.1,0,0,0,2,6.2,8.2,8.2,0,0,0,6,2.7h48v56a8,8,0,0,0,16,0V32A8.2,8.2,0,0,0,208.6,25.4Z"></path>` : `${weight === "light" ? `<path d="M78,72V32a6,6,0,0,1,12,0V72a6,6,0,0,1-12,0Zm39.9-41a6,6,0,0,0-11.8,2L114,80.5a30,30,0,0,1-60,0L61.9,33a6,6,0,1,0-11.8-2l-8,48a3.4,3.4,0,0,0-.1,1,42.2,42.2,0,0,0,36,41.6V224a6,6,0,0,0,12,0V121.6A42.2,42.2,0,0,0,126,80a3.4,3.4,0,0,0-.1-1ZM210,32V224a6,6,0,0,1-12,0V166H148a6.1,6.1,0,0,1-4.5-2,6.4,6.4,0,0,1-1.5-4.6,412.4,412.4,0,0,1,11.7-59c11.9-41.8,28.1-66.7,48.2-74A6,6,0,0,1,210,32ZM198,42.1c-25.7,19.4-39.1,81.1-43.2,111.9H198Z"></path>` : `${weight === "thin" ? `<path d="M80,72V32a4,4,0,0,1,8,0V72a4,4,0,0,1-8,0Zm35.9-40.7a4,4,0,0,0-7.8,1.4L116,80.3a32,32,0,0,1-64,0l7.9-47.6a4,4,0,1,0-7.8-1.4l-8,48a2,2,0,0,0-.1.7,40,40,0,0,0,36,39.8V224a4,4,0,0,0,8,0V119.8A40,40,0,0,0,124,80a2,2,0,0,0-.1-.7ZM208,32V224a4,4,0,0,1-8,0V164H148a4.3,4.3,0,0,1-3-1.3,4.5,4.5,0,0,1-1-3.1c.5-4.7,12.8-114.7,58.6-131.4a4.4,4.4,0,0,1,3.7.5A4,4,0,0,1,208,32Zm-8,6.3c-14.5,8.8-27,30.9-36.6,64.7a392.4,392.4,0,0,0-10.9,53H200Z"></path>` : `${weight === "regular" ? `<path d="M76,72V32a8,8,0,0,1,16,0V72a8,8,0,0,1-16,0Zm43.9-41.3a8,8,0,1,0-15.8,2.6L112,80.6a28,28,0,0,1-56,0l7.9-47.3a8,8,0,1,0-15.8-2.6l-8,48A5.7,5.7,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a5.7,5.7,0,0,0-.1-1.3ZM212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM196,46.4c-11.1,10.2-20.9,29.8-28.8,57.8A402.3,402.3,0,0,0,157.1,152H196Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Leaf = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M228,39.3A12.1,12.1,0,0,0,216.7,28c-39.7-2.3-74.8,2.4-104.2,13.9s-50,28.2-62.9,49.6c-17.7,29.2-17.7,64.6-.5,98.4L31.5,207.5a12,12,0,0,0,0,17,12.1,12.1,0,0,0,17,0l17.6-17.6c16.8,8.5,34,12.9,50.6,12.9a91.6,91.6,0,0,0,47.8-13.4c21.4-12.9,38.5-34.7,49.6-62.9S230.3,79,228,39.3ZM152.1,185.9c-20.2,12.2-43.9,13.1-68,2.9l84.4-84.3a12,12,0,0,0-17-17L67.2,171.9c-10.2-24.1-9.3-47.8,2.9-68,21-34.6,70.7-53.8,134.4-52.4C206,115.1,186.7,164.9,152.1,185.9Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"></path></g><path d="M224,39.5a8.1,8.1,0,0,0-7.5-7.5C140.2,27.5,79.1,50.5,53,93.6a87.3,87.3,0,0,0-12.8,49.1c.6,15.9,5.2,32.1,13.8,48L34.3,210.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L65.3,202c15.9,8.6,32.1,13.2,48,13.8h3.3A87,87,0,0,0,162.4,203C205.5,176.9,228.5,115.8,224,39.5ZM154.2,189.3c-22.9,13.8-49.9,14-77,.8l88.5-88.4a8.1,8.1,0,0,0-11.4-11.4L65.9,178.8c-13.2-27.1-13-54.1.8-77,22.1-36.5,74.8-56.5,141.7-54.2C210.7,114.5,190.7,167.2,154.2,189.3Z"></path>` : `${weight === "fill" ? `<path d="M162.4,203a87,87,0,0,1-45.8,12.8h-3.3c-15.9-.6-32.1-5.2-48-13.8L165.7,101.7a8.1,8.1,0,0,0-11.4-11.4L54,190.7c-8.6-15.9-13.2-32.1-13.8-48A87.3,87.3,0,0,1,53,93.6C79.1,50.5,140.2,27.5,216.5,32a8.1,8.1,0,0,1,7.5,7.5C228.5,115.8,205.5,176.9,162.4,203ZM57.1,196.1c-1.1-1.8-2.1-3.6-3.1-5.4L34.3,210.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L65.3,202l-5.4-3.1A9.3,9.3,0,0,1,57.1,196.1Z"></path>` : `${weight === "light" ? `<path d="M222,39.6a6,6,0,0,0-5.6-5.6c-75.6-4.4-136,18.2-161.7,60.6-17.5,28.8-16.8,62.9,1.8,96.4L35.8,211.8a5.9,5.9,0,1,0,8.4,8.4L65,199.5c17.3,9.6,34.8,14.4,51.6,14.4a85.8,85.8,0,0,0,44.8-12.6C203.8,175.6,226.4,115.2,222,39.6ZM155.2,191c-24.1,14.6-52.8,14.4-81.3-.4l90.3-90.4a5.9,5.9,0,0,0-8.4-8.4L65.4,182.1c-14.8-28.5-15-57.2-.4-81.3,22.7-37.5,76.8-57.9,145.3-55.1C213.1,114.2,192.7,168.3,155.2,191Z"></path>` : `${weight === "thin" ? `<path d="M220,39.8a3.9,3.9,0,0,0-3.8-3.8C141.4,31.6,81.7,53.9,56.4,95.6,39.1,124.2,40,158.1,59,191.3L37.2,213.2a3.9,3.9,0,0,0,0,5.6,3.9,3.9,0,0,0,5.6,0L64.7,197c17.4,9.9,35,14.9,51.9,14.9a83.9,83.9,0,0,0,43.8-12.3C202.1,174.3,224.4,114.6,220,39.8ZM156.2,192.7c-25.4,15.4-55.7,14.8-85.7-1.6l92.3-92.3a4,4,0,1,0-5.6-5.6L64.9,185.5c-16.4-30-17-60.3-1.6-85.7,23.3-38.5,78.8-59.3,148.9-56C215.5,113.9,194.7,169.4,156.2,192.7Z"></path>` : `${weight === "regular" ? `<path d="M224,39.5a8.1,8.1,0,0,0-7.5-7.5C140.2,27.5,79.1,50.5,53,93.6a87.3,87.3,0,0,0-12.8,49.1c.6,15.9,5.2,32.1,13.8,48L34.3,210.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L65.3,202c15.9,8.6,32.1,13.2,48,13.8h3.3A87,87,0,0,0,162.4,203C205.5,176.9,228.5,115.8,224,39.5ZM154.2,189.3c-22.9,13.8-49.9,14-77,.8l88.5-88.4a8.1,8.1,0,0,0-11.4-11.4L65.9,178.8c-13.2-27.1-13-54.1.8-77,22.1-36.5,74.8-56.5,141.7-54.2C210.7,114.5,190.7,167.2,154.2,189.3Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Pizza = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M242.7,82.1a20,20,0,0,0-5.3-27,188,188,0,0,0-218.8,0,20,20,0,0,0-5.3,27h0L78.7,184.9v.2l32.3,50.7a20,20,0,0,0,33.8,0l24.6-38.7h.1ZM152,164a16,16,0,0,1,16-16,17.5,17.5,0,0,1,4,.5l-16.3,25.7A15.6,15.6,0,0,1,152,164ZM128,44a162.6,162.6,0,0,1,92.4,28.5L211.8,86A148,148,0,0,0,44.2,86L35.6,72.5A162.6,162.6,0,0,1,128,44ZM92.5,161.9,76.3,136.4A22.1,22.1,0,0,1,80,136a16,16,0,0,1,16,16A15.7,15.7,0,0,1,92.5,161.9Zm13.2,20.7A40,40,0,0,0,80,112a38.6,38.6,0,0,0-16.8,3.8l-6.1-9.5a123.9,123.9,0,0,1,141.8,0l-13.8,21.6a40,40,0,0,0-42.6,67L128,217.6Z"></path>` : `${weight === "duotone" ? `<path d="M219.3,96.6l-26.2,41a28,28,0,1,0-28.8,45.3l-29.6,46.5a7.9,7.9,0,0,1-13.4,0L82.1,167.9H84a28,28,0,1,0-26.1-38.1L36.7,96.6a144.1,144.1,0,0,1,182.6,0Z" opacity="0.2"></path><path d="M239.3,80a16,16,0,0,0-4.2-21.6,183.9,183.9,0,0,0-214.2,0A16,16,0,0,0,16.7,80h0l97.8,153.7a16,16,0,0,0,27,0l58.4-91.8h.1ZM30.2,71.4a168,168,0,0,1,195.6,0l-8.6,13.5a152.1,152.1,0,0,0-178.4,0Zm36.9,58A19.8,19.8,0,0,1,84,120a20,20,0,0,1,2.5,39.8ZM128,225.1l-32.5-51A36,36,0,0,0,84,104a35.6,35.6,0,0,0-26,11.1L47.4,98.5a135.8,135.8,0,0,1,161.2,0l-17.3,27.1a36,36,0,0,0-38.6,60.8Zm33.3-52.3A19.9,19.9,0,0,1,172,136a20.2,20.2,0,0,1,10.7,3.1Z"></path>` : `${weight === "fill" ? `<path d="M235.1,58.4a183.9,183.9,0,0,0-214.2,0A16,16,0,0,0,16.7,80h0l97.8,153.7a16,16,0,0,0,27,0l58.4-91.8h.1L239.3,80A16,16,0,0,0,235.1,58.4Zm-43.8,67.2a36,36,0,0,0-38.6,60.8L128,225.1l-32.5-51A36,36,0,0,0,84,104a35.6,35.6,0,0,0-26,11.1L47.4,98.5a135.8,135.8,0,0,1,161.2,0Z"></path>` : `${weight === "light" ? `<path d="M237.6,78.9A13.9,13.9,0,0,0,233.9,60,181.9,181.9,0,0,0,22.1,60a13.9,13.9,0,0,0-3.7,18.9h0l97.8,153.7a14,14,0,0,0,23.6,0l58.4-91.8h.1ZM29.1,69.7a170.1,170.1,0,0,1,197.8,0,2.1,2.1,0,0,1,.6,2.8l-9.8,15.3a149.9,149.9,0,0,0-179.4,0L28.5,72.5A2.1,2.1,0,0,1,29.1,69.7Zm35.6,59.7a22,22,0,1,1,20.7,32.5Zm65,96.8a2.1,2.1,0,0,1-3.4,0L92.4,172.9a34,34,0,1,0-34.7-54.5L44.7,98a137.9,137.9,0,0,1,166.6,0l-19.4,30.4a34,34,0,1,0-36.5,57.3Zm32.2-50.7A22,22,0,0,1,172,134a21.5,21.5,0,0,1,13.4,4.6Z"></path>` : `${weight === "thin" ? `<path d="M232.8,61.6a180.2,180.2,0,0,0-209.6,0,11.9,11.9,0,0,0-3.1,16.2l97.8,153.7a11.9,11.9,0,0,0,20.2,0L235.9,77.8A11.9,11.9,0,0,0,232.8,61.6ZM62.4,129.5A23.8,23.8,0,0,1,84,116a24,24,0,0,1,.4,48Zm69,97.7a4,4,0,0,1-6.8,0L89.2,171.6a32,32,0,1,0-31.6-49.7L42.1,97.5a139.8,139.8,0,0,1,171.8,0l-21.5,33.8a32,32,0,1,0-34.1,53.6Zm31.3-49.1a24,24,0,1,1,25.4-39.9ZM229.2,73.5,218.3,90.7a148.2,148.2,0,0,0-180.6,0L26.8,73.5a4.1,4.1,0,0,1,1.1-5.4,172.1,172.1,0,0,1,200.2,0A4.1,4.1,0,0,1,229.2,73.5Z"></path>` : `${weight === "regular" ? `<path d="M239.3,80a16,16,0,0,0-4.2-21.6,183.9,183.9,0,0,0-214.2,0A16,16,0,0,0,16.7,80h0l97.8,153.7a16,16,0,0,0,27,0l58.4-91.8h.1ZM30.2,71.4a168,168,0,0,1,195.6,0l-8.6,13.5a152.1,152.1,0,0,0-178.4,0L30.2,71.4Zm36.9,58A19.8,19.8,0,0,1,84,120a20,20,0,0,1,2.5,39.8ZM128,225.1l-32.5-51A36,36,0,0,0,84,104a35.6,35.6,0,0,0-26,11.1L47.4,98.5a135.8,135.8,0,0,1,161.2,0l-17.3,27.1a36,36,0,0,0-38.6,60.8Zm33.3-52.3A19.9,19.9,0,0,1,172,136a20.2,20.2,0,0,1,10.7,3.1Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm16-36a16,16,0,1,1-16-16A16,16,0,0,1,144,176Zm24-68a40,40,0,0,1-40,40,12,12,0,0,1,0-24,16,16,0,1,0-16-16,12,12,0,0,1-24,0,40,40,0,0,1,80,0Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><circle cx="128" cy="128" r="96"></circle></g><path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm24-72a36,36,0,0,1-28,35.1v.9a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,0,1,72,0Z"></path>` : `${weight === "fill" ? `<path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.9v.9a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,1,1,44,35.1Z"></path>` : `${weight === "light" ? `<path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm10-38a10,10,0,1,1-10-10A10,10,0,0,1,138,180Zm24-72a34.1,34.1,0,0,1-28,33.5V144a6,6,0,0,1-12,0v-8a6,6,0,0,1,6-6,22,22,0,1,0-22-22,6,6,0,0,1-12,0,34,34,0,0,1,68,0Z"></path>` : `${weight === "thin" ? `<path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-40a8,8,0,1,1-8-8A8,8,0,0,1,136,180Zm24-72a32.1,32.1,0,0,1-28,31.8V144a4,4,0,0,1-8,0v-8a4,4,0,0,1,4-4,24,24,0,1,0-24-24,4,4,0,0,1-8,0,32,32,0,0,1,64,0Z"></path>` : `${weight === "regular" ? `<path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm24-72a36,36,0,0,1-28,35.1v.9a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,0,1,72,0Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Pepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<i class="ph-bold ph-pepper bg-white rounded-box p-2 text-2xl"></i>`;
});
const CategoriesCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_recipes;
  let $active, $$unsubscribe_active;
  $$unsubscribe_recipes = subscribe(recipes, (value) => value);
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { category } = $$props;
  let icon = category.icon;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$unsubscribe_recipes();
  $$unsubscribe_active();
  return `

<div class="${[
    "flex justify-center items-center carousel-item w-32 p-2 h-8 bg-accent rounded-box transition-all duration-300 [&.active]:bg-secondary [&.active]:scale-105 cursor-pointer",
    $active == category.name ? "active" : ""
  ].join(" ").trim()}"><div class="flex items-center w-32"><div class="icon mr-2">${icon == "Leaf" ? `${validate_component(Leaf, "Leaf").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "Brandy" ? `${validate_component(Brandy, "Brandy").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "FishSimple" ? `${validate_component(FishSimple, "FishSimple").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "ForkKnife" ? `${validate_component(ForkKnife, "ForkKnife").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "Egg" ? `${validate_component(Egg, "Egg").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "CookingPot" ? `${validate_component(CookingPot, "CookingPot").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${icon == "Pizza" ? `${validate_component(Pizza, "Pizza").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}` : `${(icon = "Pepper") ? `${validate_component(Pepper, "Pepper").$$render($$result, {}, {}, {})}` : `${validate_component(Question, "Question").$$render(
    $$result,
    {
      class: "bg-white rounded-box p-1",
      size: 38
    },
    {},
    {}
  )}`}`}`}`}`}`}`}`}</div>

		<div class="title"><h1 class="${[
    "whitespace-nowrap overflow-hidden text-ellipsis truncate text-left [&.active]:text-white text-black [&.active]:font-bold transition-all duration-300 w-20",
    $active == category.name ? "active" : ""
  ].join(" ").trim()}">${escape(category.name)}</h1></div></div></div>`;
});
const LoadingCategoriesCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel carousel-center space-x-2 py-4 px-4 bg-transparent">${each([1, 2, 3, 4, 5, 6], (x) => {
    return `<div class="flex flex-col carousel-item w-32 p-2 h-8 animate-pulse bg-accent rounded-box"></div>
		<span class="sr-only">Loading...</span>`;
  })}</div>`;
});
let bg_color = "accent";
let totalAverage = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipes, $$unsubscribe_recipes;
  let $pressed, $$unsubscribe_pressed;
  let $categories, $$unsubscribe_categories;
  let $searched, $$unsubscribe_searched;
  $$unsubscribe_recipes = subscribe(recipes, (value) => $recipes = value);
  $$unsubscribe_pressed = subscribe(pressed, (value) => $pressed = value);
  $$unsubscribe_categories = subscribe(categories, (value) => $categories = value);
  $$unsubscribe_searched = subscribe(searched, (value) => $searched = value);
  let search;
  pressed.subscribe((value) => {
    if ($pressed && search == void 0) {
      searched.set($recipes.filter((recipe) => recipe.data.category.includes($pressed)));
    } else if ($pressed && search) {
      handleSearch();
    } else if (!$pressed && search) {
      handleSearch();
    } else if (!$pressed && search == void 0) {
      searched.set({});
    }
  });
  const handleSearch = () => {
    if ($pressed) {
      searched.set($recipes.filter((recipe) => recipe.data.category.includes($pressed) && recipe.data.title.toLowerCase().includes(search.toLowerCase())));
    } else {
      searched.set($recipes.filter((recipe) => recipe.data.title.toLowerCase().includes(search.toLowerCase())));
    }
  };
  $$unsubscribe_recipes();
  $$unsubscribe_pressed();
  $$unsubscribe_categories();
  $$unsubscribe_searched();
  return `<div class="search px-4">${$recipes.length == 0 ? `<div class="flex flex-col w-full items-center justify-center"><div class="flex h-9 w-32 my-4 rounded-full bg-accent animate-pulse"></div>
			<div class="flex bg-accent w-full h-10 rounded-lg animate-pulse"></div></div>` : `<h1 class="text-center text-4xl py-4 font-cormorant font-bold">Search</h1>
		<input type="text" placeholder="Search for a recipe" class="input input-bordered outline-none focus:outline-none input-sm border-2 border-accent bg-white w-full h-10 px-3 text-base placeholder-gray-600 rounded-lg focus:shadow-outline"${add_attribute("value", search, 0)}>`}</div>

<div class="filters">${$categories.length == 0 ? `${validate_component(LoadingCategoriesCarousel, "LoadingCategoriesCarousel").$$render($$result, {}, {}, {})}` : `<div class="carousel carousel-center space-x-2 py-4 px-4 bg-trasparent">${each($categories, (category) => {
    return `${validate_component(CategoriesCarousel, "CategoriesCarousel").$$render($$result, { category }, {}, {})}`;
  })}</div>`}</div>

<div class="cards pb-4"><div class="search flex flex-row flex-wrap justify-center gap-y-4 gap-x-4 pt-4 pb-4">${$searched.length > 0 ? `${each($searched, (recipe) => {
    return `${validate_component(Card, "Card").$$render($$result, { recipe, bg_color, totalAverage }, {}, {})}`;
  })}` : `${$searched.length < 1 ? `<h1 class="opacity-0 hidden">No recipes found</h1>` : ``}`}</div></div>`;
});
export {
  Page as default
};
