import admin from "./lib/firebase/firebase-admin"
/** @type {import('@sveltejs/kit').Handle} */

// to implemented: delete all in login/signup page

export async function handle({ event, resolve }) {

    if (event.url.pathname === '/login' || event.url.pathname === '/api/cookies' || event.url.pathname === '/signup') {
        return resolve(event);
    }

    try {
        const { cookies } = event;
        
        const uid = cookies.get('uid');
        const user = await admin.auth().getUser(uid);
        
    } catch (error) {
        console.log(error.message)
        return Response.redirect(`${event.url.origin}/login`, 302);
    }

    return resolve(event);
}