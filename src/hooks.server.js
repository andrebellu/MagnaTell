import admin from "./lib/firebase/firebase-admin"
/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {

    if (event.url.pathname === '/login' || event.url.pathname === '/api/cookies' || event.url.pathname === '/signup') {
        //request('/api/cookies', "DELETE");
        return resolve(event);
    }

    try {
        const { cookies } = event;
        
        const uid = cookies.get('uid');
        const user = await admin.auth().getUser(uid);
        /*
        console.log(user)

        const idToken = cookies.get('idToken')
        //refresh id token if it is expired
        //const refreshedToken = await admin.auth().currentUser.getIdToken(true);
        console.log(admin.auth())
        console.log(idToken)
        await admin.auth().verifyIdToken(idToken);
        console.log("token is valid") */
        
    } catch (error) {
        //request('/api/cookies', "DELETE");
        console.log(error.message)
        return Response.redirect(`${event.url.origin}/login`, 302);
    }

    return resolve(event);
}