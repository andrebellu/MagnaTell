import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index3.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: true,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="en" data-theme="bumblebee">\r\n\r\n<head>\r\n	<meta charset="utf-8" />\r\n	<link rel="icon" href="' + assets2 + '/favicon.png" />\r\n	<link rel="manifest" href="/manifest.json">\r\n	<meta name="viewport" content="width=device-width" />\r\n	<title>MagnaTell</title>\r\n\r\n	<meta name="description"\r\n		content="Discover thousands of delicious recipes and cooking tips on our web application. Find recipes for breakfast, lunch, dinner, and everything in between.">\r\n	<meta name="keywords" content="recipes, cooking, food, meal ideas, menu planning">\r\n	<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n	<meta name="robots" content="index, follow">\r\n	<link rel="canonical" href="https://magna-tell.vercel.app">\r\n	<meta property="og:title" content="MagnaTell - Discover Thousands of Delicious Recipes">\r\n	<meta property="og:description"\r\n		content="Find the perfect recipe for any meal, with cooking tips and recipe ideas for breakfast, lunch, dinner, and everything in between.">\r\n	<meta property="og:image" content="[URL to a Representational Image for Your Web Application]">\r\n	<meta property="og:url" content="https://magna-tell.vercel.app">\r\n	<meta property="og:type" content="website">\r\n	<link rel="preconnect" href="https://fonts.googleapis.com">\r\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r\n	<link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&family=Poppins:wght@300&display=swap"\r\n		rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet">\r\n	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">\r\n\r\n	<link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css" />\r\n\r\n	<link rel="maniest" href="/manifest/manifest.json">\r\n\r\n	' + head + '\r\n</head>\r\n\r\n<body data-sveltekit-preload-data="hover" class="scrollbar-hide">\r\n	<div style="display: contents">\r\n		' + body + "\r\n	</div>\r\n</body>\r\n\r\n</html>",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "166zx6n"
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_public_env as s
};
