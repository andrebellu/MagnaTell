import admin from '$lib/firebase/firebase-admin.js';
import { dev } from '$app/environment';

const expiresIn = 60 * 60 * 24 * 1000; // 5 days
const maxAge = 60 * 60 * 24 * 90; // 90 days
const secure = dev ? "" : "Secure;";
let idToken, remember;

export const POST = async (event) => {
    await event.request.json().then((data) => {
        idToken = data.idToken;
        remember = data.remember;
    })
    try {
        const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
        const uid = await admin.auth().verifyIdToken(idToken).then((decodedToken) => { return decodedToken.uid });
        if (remember == true) {

            return new Response(JSON.stringify({ sessionCookie }), {
                status: 200,
                headers: {
                    "Set-Cookie": `uid=${uid}; Max-Age=${maxAge}; HttpOnly; Path=/; ${secure}; SameSite=Strict; , idToken=${sessionCookie}; Max-Age=${maxAge}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
                }
            })
        } else {

            return new Response(JSON.stringify({ sessionCookie }), {
                status: 200,
                headers: {
                    "Set-Cookie": `uid=${uid}; HttpOnly; Path=/; ${secure}; SameSite=Strict; , idToken=${sessionCookie}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
                }
            })
        }
    } catch (error) {
        console.log("error: ", error.message)
    }
}

export const DELETE = async (_) => {
    return new Response(JSON.stringify(), {
        status: 200,
        headers: {
            "Set-Cookie": `idToken=_; Max-Age=0; HttpOnly; Path=/; ${secure}; SameSite=Strict; , uid=_; Max-Age=0; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
        }
    })
}