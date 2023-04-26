import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as escape, k as each, v as validate_component } from "../../../../chunks/index3.js";
import { r as realDB } from "../../../../chunks/firebase.client.js";
import { onValue, ref } from "firebase/database";
const Sparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M199.8,125.2l-50.5-18.5L130.8,56.2a20,20,0,0,0-37.6,0L74.7,106.7,24.2,125.2a20,20,0,0,0,0,37.6l50.5,18.5,18.5,50.5a20,20,0,0,0,37.6,0l18.5-50.5,50.5-18.5a20,20,0,0,0,0-37.6Zm-60.5,34.3a19.7,19.7,0,0,0-11.8,11.8h0l-15.5,42-15.5-42a19.7,19.7,0,0,0-11.8-11.8L42.7,144l42-15.5a19.7,19.7,0,0,0,11.8-11.8l15.5-42,15.5,42a19.7,19.7,0,0,0,11.8,11.8l42,15.5ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"></path>` : `${weight === "duotone" ? `<path d="M195.6,151.5l-52.1,19.2a8.1,8.1,0,0,0-4.8,4.8l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2A8,8,0,0,1,195.6,151.5Z" opacity="0.2"></path><path d="M198.4,129l-52.2-19.2L127,57.6a16,16,0,0,0-30,0L77.8,109.8,25.6,129a16,16,0,0,0,0,30l52.2,19.2L97,230.4a16,16,0,0,0,30,0l19.2-52.2L198.4,159a16,16,0,0,0,0-30Zm-57.7,34.2a15.9,15.9,0,0,0-9.5,9.5L112,224.9,92.8,172.7a15.9,15.9,0,0,0-9.5-9.5L31.1,144l52.2-19.2a15.9,15.9,0,0,0,9.5-9.5L112,63.1l19.2,52.2a15.9,15.9,0,0,0,9.5,9.5L192.9,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>` : `${weight === "fill" ? `<path d="M208.9,144a15.8,15.8,0,0,1-10.5,15l-52.2,19.2L127,230.4a16,16,0,0,1-30,0L77.8,178.2,25.6,159a16,16,0,0,1,0-30l52.2-19.2L97,57.6a16,16,0,0,1,30,0l19.2,52.2L198.4,129A15.8,15.8,0,0,1,208.9,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>` : `${weight === "light" ? `<path d="M197.7,130.9l-52.2-19.3a2,2,0,0,1-1.1-1.1L125.1,58.3a13.9,13.9,0,0,0-26.2,0L79.6,110.5a2,2,0,0,1-1.1,1.1L26.3,130.9a13.9,13.9,0,0,0,0,26.2l52.2,19.3a2,2,0,0,1,1.1,1.1l19.3,52.2a13.9,13.9,0,0,0,26.2,0l19.3-52.2h0a2,2,0,0,1,1.1-1.1l52.2-19.3a13.9,13.9,0,0,0,0-26.2Zm-4.1,15-52.2,19.2a13.7,13.7,0,0,0-8.3,8.3h0l-19.2,52.2a2,2,0,0,1-3.8,0L90.9,173.4a13.7,13.7,0,0,0-8.3-8.3L30.4,145.9a2,2,0,0,1,0-3.8l52.2-19.2a13.7,13.7,0,0,0,8.3-8.3l19.2-52.2a2,2,0,0,1,3.8,0l19.2,52.2a13.7,13.7,0,0,0,8.3,8.3l52.2,19.2a2,2,0,0,1,0,3.8ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z"></path>` : `${weight === "thin" ? `<path d="M197,132.7l-52.2-19.2a3.7,3.7,0,0,1-2.3-2.3L123.3,59a12,12,0,0,0-22.6,0L81.5,111.2a3.7,3.7,0,0,1-2.3,2.3L27,132.7a12,12,0,0,0,0,22.6l52.2,19.2a3.7,3.7,0,0,1,2.3,2.3L100.7,229a12,12,0,0,0,22.6,0l19.2-52.2h0a3.7,3.7,0,0,1,2.3-2.3L197,155.3a12,12,0,0,0,0-22.6Zm-2.8,15.1L142.1,167a11.9,11.9,0,0,0-7.1,7.1l-19.2,52.1a4,4,0,0,1-7.6,0L89,174.1a11.9,11.9,0,0,0-7.1-7.1L29.8,147.8a4,4,0,0,1,0-7.6L81.9,121a11.9,11.9,0,0,0,7.1-7.1l19.2-52.1a4,4,0,0,1,7.6,0L135,113.9a11.9,11.9,0,0,0,7.1,7.1l52.1,19.2a4,4,0,0,1,0,7.6ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z"></path>` : `${weight === "regular" ? `<path d="M198.4,129l-52.2-19.2L127,57.6a16,16,0,0,0-30,0L77.8,109.8,25.6,129a16,16,0,0,0,0,30l52.2,19.2L97,230.4a16,16,0,0,0,30,0l19.2-52.2L198.4,159a16,16,0,0,0,0-30Zm-57.7,34.2a15.9,15.9,0,0,0-9.5,9.5L112,224.9,92.8,172.7a15.9,15.9,0,0,0-9.5-9.5L31.1,144l52.2-19.2a15.9,15.9,0,0,0,9.5-9.5L112,63.1l19.2,52.2a15.9,15.9,0,0,0,9.5,9.5L192.9,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let notifications = [
    {
      author: "",
      recipeTitle: "",
      rating: 0,
      date: 0,
      timestamp: 0
    }
  ];
  let author, recipeTitle, rating, date;
  onValue(ref(realDB, "recipes-grade"), (snapshot) => {
    if (snapshot.val()) {
      notifications = [];
      for (let i = 0; i < data.myRecipes.length; i++) {
        if (Object.keys(snapshot.val()).includes(data.myRecipes[i].id)) {
          let snapVal = Object.values(snapshot.val()[data.myRecipes[i].id]);
          let keys = Object.keys(snapVal[1]);
          recipeTitle = data.myRecipes[i].title;
          for (let j = 0; j < keys.length; j++) {
            let usersKeys = [];
            for (let k = 0; k < data.users.length; k++) {
              usersKeys.push(data.users[k].id);
            }
            if (usersKeys.includes(keys[j])) {
              for (let k = 0; k < data.users.length; k++) {
                if (data.users[k].id == keys[j]) {
                  author = data.users[k].username;
                }
              }
            } else {
              author = "Unknown";
            }
            rating = snapVal[1][keys[j]].grade;
            date = new Date(snapVal[1][keys[j]].time).toLocaleString();
            notifications.push({
              author,
              recipeTitle,
              rating,
              date,
              timestamp: snapVal[1][keys[j]].time
            });
          }
        }
      }
    }
    notifications.sort((a, b) => b.timestamp - a.timestamp);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${notifications.length == 0 ? `<div class="flex justify-center items-center h-full mt-20"><h1 class="text-2xl">No notifications</h1></div>` : ``}

${each(notifications, (notification) => {
    return `<div class="card bg-accent m-4"><div class="card-body p-3"><div class="title flex justify-between items-center"><h1 class="text-2xl">${escape(notification.recipeTitle)}</h1>
				<h2 class="text-[.6rem]">${escape(notification.date)}</h2></div>

			<div class="content flex flex-row items-center"><div class="icon mr-2">${validate_component(Sparkle, "Sparkle").$$render($$result, { class: "", size: 32, weight: "fill" }, {}, {})}</div>
				<div class="message">${escape(notification.author)} has put ${escape(notification.rating)} stars on it
				</div>
				<div class="time text-xs"></div>
			</div></div>
	</div>`;
  })}`;
});
export {
  Page as default
};
