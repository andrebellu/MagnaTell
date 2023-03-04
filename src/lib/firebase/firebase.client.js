import { getApp, getApps, initializeApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";


export let customToken = ''

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    databaseURL: import.meta.env.VITE_DATABASE_URL
};

if (firebaseConfig.apiKey === undefined) {
    firebaseConfig = {
        apiKey: process.env.VITE_API_KEY,
        authDomain: process.env.VITE_AUTH_DOMAIN,
        projectId: process.env.VITE_PROJECT_ID,
        storageBucket: process.env.VITE_STORAGE_BUCKET,
        messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
        appId: process.env.VITE_APP_ID,
        databaseURL: process.env.VITE_DATABASE_URL
    };
}

let firebaseApp

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig, "CLIENT")
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig, "CLIENT")
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)
export const realDB = getDatabase(firebaseApp);

setPersistence(auth, browserLocalPersistence)