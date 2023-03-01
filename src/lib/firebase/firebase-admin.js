import admin from "firebase-admin"

let data = import.meta.env.VITE_ADMIN_JSON
if (data === undefined) {
    data = process.env.VITE_ADMIN_JSON
}
data = JSON.parse(data)

admin.initializeApp({
    credential: admin.credential.cert(data)
});

export default admin