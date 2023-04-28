import admin from '$lib/firebase/firebase-admin.js';

let token = ''

// to implemented: delete all cookies, save only uid

export const POST = async (event) => {
    await event.request.json().then((data) => {
        token = data.token;
    })

    return await admin.auth().verifyIdToken(token).then(() => {
        console.log("verification success")
        return new Response({
            status: 200
        })
    }).catch((error) => {
        console.log("api error: " + error)
        return Response.redirect(`${event.url.origin}/login`, 302); // redirect does not work
    })
}
