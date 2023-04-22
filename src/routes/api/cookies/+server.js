import admin from '$lib/firebase/firebase-admin.js';
import { auth } from '$lib/firebase/firebase.client.js';
import { dev } from '$app/environment';

const expiresIn = 1000 * 60 * 60 * 24;
const secure = dev ? "" : "Secure;";

export const POST = async (event) => {
    const { idToken } = await event.request.json();
    try {
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
        const a = auth.currentUser.uid;
        return new Response(JSON.stringify({ sessionCookie }), {
            status: 200,
            headers: {
                "Set-Cookie": `idToken=${sessionCookie}; Max-Age=${expiresIn}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`,
                "Set-Cookie": `uid=${a}; Max-Age=${expiresIn}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
            }
        })
    } catch (error) {
        console.log("error: ", error.message)
    }
}

export const DELETE = async (_) => {
    return new Response(JSON.stringify(), {
        status: 200,
        headers: {
            "Set-Cookie": `idToken=_; Max-Age=0; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
        }
    })
}