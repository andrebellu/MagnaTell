import admin from '$lib/firebase/firebase-admin.js';
import { dev } from '$app/environment';

const expiresIn = 1000 * 60 * 60 * 24;
const secure = dev ? "" : "Secure;";

export const POST = async (event) => {
    const { idToken } = await event.request.json();
    try {
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
        return new Response(JSON.stringify({ sessionCookie }), {
            status: 200,
            headers: {
                "Set-Cookie": `idToken=${sessionCookie}; Max-Age=${expiresIn}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
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