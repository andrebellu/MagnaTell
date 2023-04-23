import admin from "./lib/firebase/firebase-admin"
/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {

    if (event.url.pathname === '/login' || event.url.pathname === '/api/cookies' || event.url.pathname === '/signup') {
        return resolve(event);
    }

    try {
        const { cookies } = event;
        const idToken = cookies.get('idToken');
        const decodedToken = await admin.auth().verifySessionCookie(idToken, true);
        event.locals.user = decodedToken;

        const uid = cookies.get('uid');
        await admin.auth().getUser(uid);
        
    } catch (error) {
        return Response.redirect(`${event.url.origin}/login`, 302);
    }

    return resolve(event);
}