import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, h as subscribe, j as set_store_value, k as each, i as add_attribute, v as validate_component, n as noop } from "../../../../chunks/index3.js";
import { d as difficulty_store, t as title_store, c as categories } from "../../../../chunks/store.js";
import "firebase/firestore";
import "../../../../chunks/firebase.client.js";
import "firebase/storage";
import { w as writable } from "../../../../chunks/index2.js";
import "firebase/auth";
import "firebase/database";
const Alarm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M176,116a12,12,0,0,1,0,24H128a12,12,0,0,1-12-12V80a12,12,0,0,1,24,0v36Zm22.7-58.7A100,100,0,1,1,57.3,198.7,100,100,0,1,1,198.7,57.3ZM204,128A75.9,75.9,0,0,0,74.3,74.3,75.9,75.9,0,1,0,181.7,181.7,75.2,75.2,0,0,0,204,128Zm40-82L210,12a11.9,11.9,0,0,0-16.9,0,12,12,0,0,0,0,17L227,62.9a11.7,11.7,0,0,0,8.5,3.6A12.1,12.1,0,0,0,244,46ZM62.9,29a12,12,0,0,0,0-17A11.9,11.9,0,0,0,46,12L12,46a12.1,12.1,0,0,0,8.5,20.5A11.7,11.7,0,0,0,29,62.9Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><circle cx="128" cy="128" r="88"></circle></g><path d="M136,120V72a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16Z"></path><path d="M128,32a95.9,95.9,0,1,0,67.9,28.1A95.5,95.5,0,0,0,128,32Zm56.6,152.6A80,80,0,0,1,71.4,71.4h0A80,80,0,0,1,184.6,184.6Z"></path><path d="M235.5,54.5l-34-34a8,8,0,1,0-11.3,11.3l34,34a8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3A8,8,0,0,0,235.5,54.5Z"></path><path d="M65.8,20.5a8,8,0,0,0-11.3,0l-34,34a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l34-34A8,8,0,0,0,65.8,20.5Z"></path>` : `${weight === "fill" ? `<path d="M235.5,65.8a8.3,8.3,0,0,1-5.7,2.3,8,8,0,0,1-5.6-2.3l-34-34a8,8,0,1,1,11.3-11.3l34,34A8,8,0,0,1,235.5,65.8ZM65.8,20.5a8,8,0,0,0-11.3,0l-34,34a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l34-34A8,8,0,0,0,65.8,20.5ZM224,125.5v5.3a14.8,14.8,0,0,0-.1,2.1h0A96,96,0,0,1,133,223.9H123A96,96,0,0,1,32.1,133h0a14.8,14.8,0,0,0-.1-2.1v-5.6a14.8,14.8,0,0,0,.1-2.1h0A96,96,0,0,1,123,32.1h10A96,96,0,0,1,223.9,123h0a14.8,14.8,0,0,0,.1,2.1ZM192,128a8,8,0,0,0-8-8H136V72a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h56A8,8,0,0,0,192,128Z"></path>` : `${weight === "light" ? `<path d="M184,122a6,6,0,0,1,0,12H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50Zm10.5-60.5A94.2,94.2,0,1,1,128,34,93.7,93.7,0,0,1,194.5,61.5ZM210,128a81.9,81.9,0,1,0-24,58A81.5,81.5,0,0,0,210,128Zm24.1-72.1-34-34a6,6,0,0,0-8.5,8.5l34,34a6.2,6.2,0,0,0,8.5,0A6.1,6.1,0,0,0,234.1,55.9ZM64.4,21.9a6.1,6.1,0,0,0-8.5,0l-34,34a6.1,6.1,0,0,0,0,8.5,6.2,6.2,0,0,0,8.5,0l34-34A6.1,6.1,0,0,0,64.4,21.9Z"></path>` : `${weight === "thin" ? `<path d="M188,128a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Zm5.1-65.1A92.2,92.2,0,1,1,128,36,91.8,91.8,0,0,1,193.1,62.9ZM212,128A84,84,0,0,0,68.6,68.6h0A84,84,0,1,0,212,128Zm20.7-70.7-34-34a4,4,0,0,0-5.6,0,4,4,0,0,0,0,5.7L227,62.9a3.9,3.9,0,0,0,2.8,1.2,4.2,4.2,0,0,0,2.9-1.2A4,4,0,0,0,232.7,57.3ZM62.9,23.3a4,4,0,0,0-5.6,0l-34,34a4,4,0,0,0,0,5.6,4.2,4.2,0,0,0,2.9,1.2A3.9,3.9,0,0,0,29,62.9L62.9,29A4,4,0,0,0,62.9,23.3Z"></path>` : `${weight === "regular" ? `<path d="M184,120a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48Zm11.9-59.9A96.1,96.1,0,1,1,128,32,95.7,95.7,0,0,1,195.9,60.1ZM208,128a79.9,79.9,0,1,0-23.4,56.6A79.5,79.5,0,0,0,208,128Zm27.5-73.5-34-34a8,8,0,1,0-11.3,11.3l34,34a8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3A8,8,0,0,0,235.5,54.5ZM65.8,20.5a8,8,0,0,0-11.3,0l-34,34a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l34-34A8,8,0,0,0,65.8,20.5Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ChartBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M228,196h-4V40a12,12,0,0,0-12-12H156a12,12,0,0,0-12,12V76H100A12,12,0,0,0,88,88v36H44a12,12,0,0,0-12,12v60H28a12,12,0,0,0,0,24H228a12,12,0,0,0,0-24ZM112,100h32v96H112ZM56,148H88v48H56Zm112,48V52h32V196Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><rect x="156" y="40" width="56" height="168"></rect></g><path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Zm112,56V48h40V200Z"></path>` : `${weight === "fill" ? `<path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Z"></path>` : `${weight === "light" ? `<path d="M228,202H218V40a6,6,0,0,0-6-6H156a6,6,0,0,0-6,6V82H100a6,6,0,0,0-6,6v42H44a6,6,0,0,0-6,6v66H28a6,6,0,0,0,0,12H228a6,6,0,0,0,0-12ZM106,94h44V202H106ZM50,142H94v60H50Zm112,60V46h44V202Z"></path>` : `${weight === "thin" ? `<path d="M228,204H216V40a4,4,0,0,0-4-4H156a4,4,0,0,0-4,4V84H100a4,4,0,0,0-4,4v44H44a4,4,0,0,0-4,4v68H28a4,4,0,0,0,0,8H228a4,4,0,0,0,0-8ZM104,92h48V204H104ZM48,140H96v64H48Zm112,64V44h48V204Z"></path>` : `${weight === "regular" ? `<path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Zm112,56V48h40V200Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ChartPieSlice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M221.7,74.4a.8.8,0,0,0-.2-.4l-.3-.5A108,108,0,0,0,128,20a12,12,0,0,0-12,12v89.1L38.9,165.6A12,12,0,0,0,34.5,182v.2l.3.5A108,108,0,0,0,236,128,107.1,107.1,0,0,0,221.7,74.4ZM140,44.9a83.8,83.8,0,0,1,54,31.2l-54,31.1ZM128,212a84.4,84.4,0,0,1-66-32L206,96.8A84,84,0,0,1,128,212ZM94,116.5a12,12,0,0,0,6-10.4V40.7A12,12,0,0,0,83,29.8,108.1,108.1,0,0,0,20.6,139.4a12.1,12.1,0,0,0,6.5,9.5,13,13,0,0,0,5.4,1.3,12.5,12.5,0,0,0,6-1.6ZM76,62V99.2L44.7,117.3A84.5,84.5,0,0,1,76,62Z"></path>` : `${weight === "duotone" ? `<g opacity="0.2"><path d="M33.6,145.6A101.9,101.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"></path></g><path d="M100,116.5a8.1,8.1,0,0,0,4-7v-72a8,8,0,0,0-10.7-7.6A104.3,104.3,0,0,0,24,128a109.1,109.1,0,0,0,1.7,19,8,8,0,0,0,4.6,5.8,7.6,7.6,0,0,0,3.3.8,8,8,0,0,0,4-1.1ZM88,49.6v55.3L40.1,132.6c-.1-1.6-.1-3.1-.1-4.6A88.3,88.3,0,0,1,88,49.6Z"></path><path d="M218.3,76.4a.8.8,0,0,1-.2-.4l-.4-.5A103.9,103.9,0,0,0,128,24a8,8,0,0,0-8,8v91.4L40.9,169.1a7.9,7.9,0,0,0-3,10.9v.2l.3.5A104,104,0,0,0,232,128,103.5,103.5,0,0,0,218.3,76.4ZM136,40.4a88.2,88.2,0,0,1,63.9,36.9L136,114.1ZM128,216a88.3,88.3,0,0,1-71.9-37.3L207.9,91.1A88,88,0,0,1,128,216Z"></path>` : `${weight === "fill" ? `<path d="M100,116.5a8.1,8.1,0,0,0,4-7v-72a8,8,0,0,0-10.7-7.6A104.3,104.3,0,0,0,24,128a109.1,109.1,0,0,0,1.7,19,8,8,0,0,0,4.6,5.8,7.6,7.6,0,0,0,3.3.8,8,8,0,0,0,4-1.1ZM88,49.6v55.3L40.1,132.6c-.1-1.6-.1-3.1-.1-4.6A88.3,88.3,0,0,1,88,49.6ZM232,128A104,104,0,0,1,38.3,180.7l-.3-.5V180a7.9,7.9,0,0,1,3-10.9L120,123.4V32a8,8,0,0,1,8-8,103.9,103.9,0,0,1,89.7,51.5l.4.5a.8.8,0,0,0,.2.4A103.5,103.5,0,0,1,232,128Z"></path>` : `${weight === "light" ? `<path d="M102,109.5v-72a5.8,5.8,0,0,0-2.5-4.9,6,6,0,0,0-5.5-.8A102.1,102.1,0,0,0,26,128a104.6,104.6,0,0,0,1.7,18.6,5.9,5.9,0,0,0,3.4,4.4,5.7,5.7,0,0,0,2.5.6,5.5,5.5,0,0,0,3-.9l62.4-36A5.9,5.9,0,0,0,102,109.5Zm-12-3.4L38.3,135.9c-.2-2.6-.3-5.3-.3-7.9A90.1,90.1,0,0,1,90,46.4ZM216.5,77.4a.8.8,0,0,0-.2-.4l-.3-.5A101.9,101.9,0,0,0,128,26a6,6,0,0,0-6,6v92.5L41.9,170.8a5.9,5.9,0,0,0-2.2,8.2v.2l.3.5A102,102,0,0,0,230,128,100.9,100.9,0,0,0,216.5,77.4ZM134,38.2a89.9,89.9,0,0,1,68.7,39.7L134,117.6ZM128,218a90.7,90.7,0,0,1-74.8-39.9L208.8,88.3A90,90,0,0,1,128,218Z"></path>` : `${weight === "thin" ? `<path d="M100,109.5v-72a3.9,3.9,0,0,0-1.7-3.3,3.8,3.8,0,0,0-3.6-.5A100.2,100.2,0,0,0,28,128a102.1,102.1,0,0,0,1.7,18.3,4.1,4.1,0,0,0,2.2,2.9,5.3,5.3,0,0,0,1.7.4,3.6,3.6,0,0,0,2-.6L98,113A4,4,0,0,0,100,109.5Zm-8-2.3-55.3,32A84.2,84.2,0,0,1,36,128,92.2,92.2,0,0,1,92,43.3Zm122.7-29c0-.1-.1-.1-.1-.2s-.1-.1-.1-.2A100,100,0,0,0,128,28a4,4,0,0,0-4,4v93.7L42.9,172.5a4.1,4.1,0,0,0-1.5,5.5l.2.3.2.4A100,100,0,0,0,228,128,99.1,99.1,0,0,0,214.7,78.2ZM132,36.1a92.1,92.1,0,0,1,73.6,42.5L132,121.1ZM128,220a92.4,92.4,0,0,1-77.6-42.6L209.6,85.5A92,92,0,0,1,128,220Z"></path>` : `${weight === "regular" ? `<path d="M100,116.5a8.1,8.1,0,0,0,4-7v-72a8,8,0,0,0-10.7-7.6A104.3,104.3,0,0,0,24,128a109.1,109.1,0,0,0,1.7,19,8,8,0,0,0,4.6,5.8,7.6,7.6,0,0,0,3.3.8,8,8,0,0,0,4-1.1ZM88,49.6v55.3L40.1,132.6c-.1-1.6-.1-3.1-.1-4.6A88.3,88.3,0,0,1,88,49.6ZM218.3,76.4a.8.8,0,0,1-.2-.4l-.4-.5A103.9,103.9,0,0,0,128,24a8,8,0,0,0-8,8v91.4L40.9,169.1a7.9,7.9,0,0,0-3,10.9v.2l.3.5A104,104,0,0,0,232,128,103.5,103.5,0,0,0,218.3,76.4ZM136,40.4a88.2,88.2,0,0,1,63.9,36.9L136,114.1ZM128,216a88.3,88.3,0,0,1-71.9-37.3L207.9,91.1A88,88,0,0,1,128,216Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Eyeglasses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M200,36a12,12,0,0,0,0,24,12,12,0,0,1,12,12v50.5A47.8,47.8,0,0,0,142.8,148H113.2A47.8,47.8,0,0,0,44,122.5V72A12,12,0,0,1,56,60a12,12,0,0,0,0-24A36,36,0,0,0,20,72v92a48,48,0,0,0,95.3,8h25.4a48,48,0,0,0,95.3-8V72A36,36,0,0,0,200,36ZM68,188a24,24,0,1,1,24-24A24.1,24.1,0,0,1,68,188Zm120,0a24,24,0,1,1,24-24A24.1,24.1,0,0,1,188,188Z"></path>` : `${weight === "duotone" ? `<path d="M104,164a36,36,0,1,1-36-36A36,36,0,0,1,104,164Zm84-36a36,36,0,1,0,36,36A36,36,0,0,0,188,128Z" opacity="0.2"></path><path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v58.1A43.9,43.9,0,0,0,145.7,152H110.3A43.9,43.9,0,0,0,40,130.1V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32.1,32.1,0,0,0,24,72v92a44,44,0,0,0,87.8,4h32.4a44,44,0,0,0,87.8-4V72A32.1,32.1,0,0,0,200,40ZM68,192a28,28,0,1,1,28-28A28.1,28.1,0,0,1,68,192Zm120,0a28,28,0,1,1,28-28A28.1,28.1,0,0,1,188,192Z"></path>` : `${weight === "fill" ? `<path d="M232,72v92a44,44,0,0,1-87.8,4H111.8A44,44,0,0,1,24,164V72A32.1,32.1,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.1A43.9,43.9,0,0,1,110.3,152h35.4A43.9,43.9,0,0,1,216,130.1V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32.1,32.1,0,0,1,232,72Z"></path>` : `${weight === "light" ? `<path d="M200,42a6,6,0,0,0,0,12,18.1,18.1,0,0,1,18,18v62.6A42,42,0,0,0,147.2,154H108.8A42,42,0,0,0,38,134.6V72A18.1,18.1,0,0,1,56,54a6,6,0,0,0,0-12A30.1,30.1,0,0,0,26,72v92a42,42,0,0,0,83.9,2h36.2a42,42,0,0,0,83.9-2V72A30.1,30.1,0,0,0,200,42ZM68,194a30,30,0,1,1,30-30A30.1,30.1,0,0,1,68,194Zm120,0a30,30,0,1,1,30-30A30.1,30.1,0,0,1,188,194Z"></path>` : `${weight === "thin" ? `<path d="M200,44a4,4,0,0,0,0,8,20.1,20.1,0,0,1,20,20v68a40,40,0,0,0-71.2,16H107.2A40,40,0,0,0,36,140V72A20.1,20.1,0,0,1,56,52a4,4,0,0,0,0-8A28.1,28.1,0,0,0,28,72v92a40,40,0,0,0,80,0h40a40,40,0,0,0,80,0V72A28.1,28.1,0,0,0,200,44ZM68,196a32,32,0,1,1,32-32A32.1,32.1,0,0,1,68,196Zm120,0a32,32,0,1,1,32-32A32.1,32.1,0,0,1,188,196Z"></path>` : `${weight === "regular" ? `<path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v58.1A43.9,43.9,0,0,0,145.7,152H110.3A43.9,43.9,0,0,0,40,130.1V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32.1,32.1,0,0,0,24,72v92a44,44,0,0,0,87.8,4h32.4a44,44,0,0,0,87.8-4V72A32.1,32.1,0,0,0,200,40ZM68,192a28,28,0,1,1,28-28A28.1,28.1,0,0,1,68,192Zm120,0a28,28,0,1,1,28-28A28.1,28.1,0,0,1,188,192Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path>` : `${weight === "duotone" ? `<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>` : `${weight === "fill" ? `<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>` : `${weight === "light" ? `<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>` : `${weight === "thin" ? `<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"></path>` : `${weight === "regular" ? `<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const SmileyWink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212ZM76,108a16,16,0,1,1,16,16A16,16,0,0,1,76,108Zm112,0a12,12,0,0,1-12,12H152a12,12,0,0,1,0-24h24A12,12,0,0,1,188,108Zm-8,50a60.1,60.1,0,0,1-104,0,12,12,0,0,1,20.8-12,36,36,0,0,0,62.4,0A12,12,0,1,1,180,158Z"></path>` : `${weight === "duotone" ? `<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm104,0a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24A8,8,0,0,1,184,108Zm-7.5,48a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z"></path>` : `${weight === "fill" ? `<path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.5,60a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Zm3.5-40H148a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Z"></path>` : `${weight === "light" ? `<path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM82,108a10,10,0,1,1,10,10A10,10,0,0,1,82,108Zm100,0a6,6,0,0,1-6,6H152a6,6,0,0,1,0-12h24A6,6,0,0,1,182,108Zm-7.2,47a54.1,54.1,0,0,1-93.6,0,6,6,0,0,1,2.2-8.2,5.9,5.9,0,0,1,8.2,2.2,42,42,0,0,0,72.8,0,5.9,5.9,0,0,1,8.2-2.2A6,6,0,0,1,174.8,155Z"></path>` : `${weight === "thin" ? `<path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm96,0a4,4,0,0,1-4,4H152a4,4,0,0,1,0-8h24A4,4,0,0,1,180,108Zm-7,46a51.9,51.9,0,0,1-90,0,4,4,0,1,1,6.9-4,44,44,0,0,0,76.2,0,4,4,0,1,1,6.9,4Z"></path>` : `${weight === "regular" ? `<path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm104,0a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24A8,8,0,0,1,184,108Zm-7.5,48a56,56,0,0,1-97,0,8,8,0,1,1,13.8-8,40.1,40.1,0,0,0,69.4,0,8,8,0,0,1,13.8,8Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stepsarray;
  let $ingredients, $$unsubscribe_ingredients = noop, $$subscribe_ingredients = () => ($$unsubscribe_ingredients(), $$unsubscribe_ingredients = subscribe(ingredients, ($$value) => $ingredients = $$value), ingredients);
  let $category, $$unsubscribe_category = noop, $$subscribe_category = () => ($$unsubscribe_category(), $$unsubscribe_category = subscribe(category, ($$value) => $category = $$value), category);
  let $difficulty_store, $$unsubscribe_difficulty_store;
  let $title_store, $$unsubscribe_title_store;
  let $categories, $$unsubscribe_categories;
  $$unsubscribe_difficulty_store = subscribe(difficulty_store, (value) => $difficulty_store = value);
  $$unsubscribe_title_store = subscribe(title_store, (value) => $title_store = value);
  $$unsubscribe_categories = subscribe(categories, (value) => $categories = value);
  let cover = "/no-image.jpg";
  let title = "";
  let link = "";
  let category = writable([]);
  $$subscribe_category();
  let difficulty = "";
  let time = "";
  let ingredients = writable([]);
  $$subscribe_ingredients();
  let nsteps = 1;
  let portions = "";
  let ingredient = "";
  let quantity = "";
  let colors = [
    "badge-primary",
    "badge-secondary",
    "badge-accent",
    "badge-warning",
    "badge-error",
    "badge-neutral"
  ];
  set_store_value(title_store, $title_store = title, $title_store);
  set_store_value(difficulty_store, $difficulty_store = difficulty, $difficulty_store);
  stepsarray = [];
  $$unsubscribe_ingredients();
  $$unsubscribe_category();
  $$unsubscribe_difficulty_store();
  $$unsubscribe_title_store();
  $$unsubscribe_categories();
  return `
<input type="checkbox" id="steps" class="modal-toggle">
<div class="modal"><div class="modal-box relative"><label for="steps" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h3 class="text-3xl font-bold mb-2">Steps</h3>
		${stepsarray.length === 0 ? `<p class="text-gray-400">No steps added</p>` : `${each(stepsarray, (step, i) => {
    return `<div class="flex flex-row items-start bg-accent relative p-2 rounded-xl my-1"><label for="deleteStep" class="btn btn-sm btn-circle text-base-100 bg-transparent border-transparent absolute right-2 top-2 active:bg-transparent hover:bg-transparent">✕
					</label>

					<div class="bg-secondary rounded-full h-8 aspect-square text-white text-center p-1 mr-2">${escape(i + 1)}.
					</div>
					<p class="break-all mb-2 mr-8">${escape(step)}</p>
				</div>`;
  })}`}</div></div>


<input type="checkbox" id="categories" class="modal-toggle">
<div class="modal"><div class="modal-box relative"><label for="categories" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		
		<h1 class="font-bold text-2xl font-cormorant mb-2">Categories</h1>
		<div class="badges flex flex-row flex-wrap gap-x-2 gap-y-1">${$category.length === 0 ? `<p class="text-gray-400">No categories selected</p>` : ``}
			${each($category, (category2) => {
    return `<div class="${"badge " + escape(colors[Math.floor(Math.random() * colors.length)], true) + " truncate cursor-pointer group"}">${escape(category2)}
					<p class="group-hover:text-secondary">  x</p>
				</div>`;
  })}</div></div></div>


<input type="checkbox" id="time" class="modal-toggle">
<div class="modal"><div class="modal-box relative flex justify-center flex-col items-center"><label for="time" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Preparation time</h1>
		<h1 class="text-gray-400">Minutes</h1>

		<input class="input-addrecipe" placeholder="20" type="number" name="time" id="time" step="1" min="1" max="999"${add_attribute("value", time, 0)}></div></div>


<input type="checkbox" id="difficulty" class="modal-toggle">
<div class="modal"><div class="modal-box relative flex justify-center flex-col items-center"><label for="difficulty" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Difficulty</h1>

		<div class="btns flex gap-x-2 my-2"><div class="${[
    "easy btn text-green-600 font-bold [&.active]:border-secondary",
    ""
  ].join(" ").trim()}">Easy
			</div>
			<div class="${[
    "medium btn text-yellow-600 font-bold [&.active]:border-secondary",
    ""
  ].join(" ").trim()}">Medium
			</div>
			<div class="${[
    "hard btn text-red-600 font-bold [&.active]:border-secondary",
    ""
  ].join(" ").trim()}">Hard
			</div></div></div></div>


<input type="checkbox" id="portions" class="modal-toggle">
<div class="modal"><div class="modal-box relative flex justify-center flex-col items-center"><label for="portions" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h1 class="font-bold text-2xl font-cormorant">Portions</h1>

		<input class="input-addrecipe" placeholder="4" type="number" name="portions" id="portions" step="1" min="1" max="99"${add_attribute("value", portions, 0)}></div></div>

<input type="checkbox" id="notVerified" class="modal-toggle">
<div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Your account is <span class="underline underline-offset-4 font-bold">not verified!</span></h3>
		<p class="py-4">To add a recipe you need to verify your email. <br> Please check your inbox and click on the
			link we sent you.
		</p>
		<div class="modal-action"><label for="notVerified" class="btn">Ok!</label></div></div></div>

<input type="checkbox" id="recipeAddedModal" class="modal-toggle">
<label for="recipeAddedModal" class="modal cursor-pointer"><label class="modal-box relative" for="">${`<div class="body flex flex-col justify-center"><h1 class="text-3xl font-bold text-center">Something went wrong</h1>
				<label for="recipeAddedModal" class="btn btn-sm mx-10 mt-5">Close</label></div>`}</label></label>

<div class="add w-full px-10 gap-y-2 grid grid-rows-1 grid-cols-1 items-center py-4"><h1 class="text-3xl font-bold font-cormorant">Add a recipe</h1>

	<div class="first-stage flex flex-row">
		<div class="cover-box w-1/2">${`<img class="w-40 h-40 rounded-xl mb-2 object-cover"${add_attribute("src", cover, 0)} alt="">`}
			<input class="file-input hidden" type="file" name="cover" id="cover" accept="image/*">
			<input class="btn btn-sm text-xs w-40 h-10" type="button" value="Browse..." onclick="document.getElementById('cover').click();"></div>

		
		<div class="briefing-box w-1/2"><input class="input-addrecipe rounded-3xl w-full outline-none focus:outline-none mb-2 h-12" placeholder="Title" type="text" name="title" id="title"${add_attribute("value", title, 0)}>

			<div class="flex flex-col"><div class="flex justify-between items-center mb-2"><select class="input-addrecipe rounded-l-3xl rounded-r-xl w-full outline-none focus:outline-none h-12 mr-1 p-2" name="category" id="category"><option value="" selected>Category</option>${each($categories, (category2) => {
    return `<option${add_attribute("value", category2.name, 0)}>${escape(category2.name)}</option>`;
  })}</select>

					<label for="categories" class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-r-3xl rounded-l-xl h-10">${validate_component(Eyeglasses, "Eyeglasses").$$render($$result, { size: 16, weight: "bold" }, {}, {})}</label></div>

				<input class="input-addrecipe rounded-3xl w-full outline-none focus:outline-none mb-2 h-12" placeholder="Link" type="url" name="link" id="link"${add_attribute("value", link, 0)}>

				<div class="various flex justify-between"><label for="time" class="time bg-primary p-2 rounded-l-3xl rounded-r-xl h-10 flex items-center">${validate_component(Alarm, "Alarm").$$render($$result, { class: "w-8 h-7" }, {}, {})}</label>
					<label for="difficulty" class="time bg-primary p-2 rounded-xl h-10 flex items-center">${validate_component(ChartBar, "ChartBar").$$render($$result, { class: "w-8 h-7" }, {}, {})}</label>
					<label for="portions" class="time bg-primary p-2 rounded-r-3xl rounded-l-xl h-10 flex items-center">${validate_component(ChartPieSlice, "ChartPieSlice").$$render($$result, { class: "w-8 h-7" }, {}, {})}</label></div></div></div></div>

	<label for="description" class="text-2xl font-bold font-cormorant">Description</label>
	<textarea class="input-addrecipe pt-1 h-32 roundend-3xl" placeholder="Short recipe description" name="description">${""}</textarea>

	<div class="flex justify-between"><label for="ingredients" class="text-2xl font-bold font-cormorant w-2/3">Ingredients</label></div>
	<div class="ingredients flex justify-between flex-col"><div class="inputs flex"><input class="input-addrecipe w-2/3 rounded-l-3xl rounded-r-xl h-10" type="text" name="ingredients" id="ingredients" required placeholder="Salt"${add_attribute("value", ingredient, 0)}>

			<input class="input-addrecipe w-1/4 mx-2 rounded-xl h-10" type="text" name="quantity" id="quantity" placeholder="1g" required${add_attribute("value", quantity, 0)}>

			<btn class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-r-3xl rounded-l-xl h-10">${validate_component(Plus, "Plus").$$render($$result, { size: 16, weight: "bold" }, {}, {})}</btn></div>

		<div class="badges flex flex-wrap gap-2 mt-2">${each($ingredients, (ingredient2) => {
    return `<div class="badge badge-secondary truncate">${escape(ingredient2.ingredient)}
				</div>`;
  })}</div></div>

	<label for="steps" class="text-2xl font-bold font-cormorant w-2/3">Steps</label>
	<div class="inputs flex justify-between"><label class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-full h-10" for="steps">${escape(nsteps)}</label>

		<textarea class="input-addrecipe w-2/3 rounded-l-3xl rounded-r-xl h-10" type="text" name="ingredients" id="ingredients" required placeholder="First step">${""}</textarea>

		<btn class="btn btn-secondary btn-sm w-10 p-0 text-white rounded-r-3xl rounded-l-xl h-10">${validate_component(Plus, "Plus").$$render($$result, { size: 16, weight: "bold" }, {}, {})}</btn></div>

	<h1 class="text-3xl font-bold font-cormorant text-center mt-4">Create</h1>
	<h1 class="text-xs font-poppins text-center my-1">You&#39;re gonna make the world a better place!</h1>
	<div class="btn-co flex justify-center"><button class="btn btn-secondary w-24 mt-1 rounded-3xl">${validate_component(SmileyWink, "SmileyWink").$$render(
    $$result,
    {
      weight: "fill",
      size: 40,
      class: "text-primary text-center"
    },
    {},
    {}
  )}</button></div>

	
	
	
	

	</div>`;
});
export {
  Page as default
};
