import * as server from '../entries/pages/(auth)/notifications/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/(auth)/notifications/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/notifications/+page.server.js";
export const imports = ["_app/immutable/entry/(auth)-notifications-page.svelte.299f0478.js","_app/immutable/chunks/index.40fc915c.js","_app/immutable/chunks/firebase.client.582fe9c6.js"];
export const stylesheets = [];
export const fonts = [];
