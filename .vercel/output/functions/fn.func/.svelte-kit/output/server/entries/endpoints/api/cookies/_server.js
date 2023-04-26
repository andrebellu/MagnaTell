import "../../../../chunks/firebase-admin.js";
import admin from "firebase-admin";
const expiresIn = 60 * 60 * 24 * 1e3;
const maxAge = 60 * 60 * 24 * 90;
const secure = "Secure;";
let idToken, remember;
const POST = async (event) => {
  await event.request.json().then((data) => {
    idToken = data.idToken;
    remember = false;
  });
  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
    const uid = await admin.auth().verifyIdToken(idToken).then((decodedToken) => {
      return decodedToken.uid;
    });
    if (remember == true) {
      return new Response(JSON.stringify({ sessionCookie }), {
        status: 200,
        headers: {
          "Set-Cookie": `uid=${uid}; Max-Age=${maxAge}; HttpOnly; Path=/; ${secure}; SameSite=Strict; , idToken=${sessionCookie}; Max-Age=${maxAge}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
        }
      });
    } else {
      return new Response(JSON.stringify({ sessionCookie }), {
        status: 200,
        headers: {
          "Set-Cookie": `uid=${uid}; HttpOnly; Path=/; ${secure}; SameSite=Strict; , idToken=${sessionCookie}; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
        }
      });
    }
  } catch (error) {
    console.log("error: ", error.message);
  }
};
const DELETE = async (_) => {
  return new Response(JSON.stringify(), {
    status: 200,
    headers: {
      "Set-Cookie": `idToken=_; Max-Age=0; HttpOnly; Path=/; ${secure}; SameSite=Strict; , uid=_; Max-Age=0; HttpOnly; Path=/; ${secure}; SameSite=Strict;`
    }
  });
};
export {
  DELETE,
  POST
};
