export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-256x256.png","Background.svg","category-1.svg","category-2.svg","favicon.png","github-mark-white.svg","github-mark.svg","google.svg","manifest.json","no-image.jpg","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b5feede8.js","app":"_app/immutable/entry/app.a97d36f9.js","imports":["_app/immutable/entry/start.b5feede8.js","_app/immutable/chunks/index.40fc915c.js","_app/immutable/chunks/singletons.9fb59006.js","_app/immutable/chunks/index.3e2aad72.js","_app/immutable/entry/app.a97d36f9.js","_app/immutable/chunks/index.40fc915c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(auth)/addrecipe",
				pattern: /^\/addrecipe\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/cookies",
				pattern: /^\/api\/cookies\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/cookies/_server.js')
			},
			{
				id: "/(auth)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(auth)/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(auth)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(auth)/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/recipes/[recipeId]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"recipeId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/resetPassword",
				pattern: /^\/resetPassword\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(auth)/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
