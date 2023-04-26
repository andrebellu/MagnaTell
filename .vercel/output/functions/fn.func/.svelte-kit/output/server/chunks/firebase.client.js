import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDQyGYOMtngwRrN8tpd94ZCgLdH81CdO2o",
  authDomain: "magnatell.firebaseapp.com",
  projectId: "magnatell",
  storageBucket: "magnatell.appspot.com",
  messagingSenderId: "475153091891",
  appId: "1:475153091891:web:640cb0dfe7b7b38fc54246",
  databaseURL: "https://magnatell-default-rtdb.europe-west1.firebasedatabase.app"
};
if (firebaseConfig.apiKey === void 0) {
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
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig, "CLIENT");
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig, "CLIENT");
}
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
getStorage(firebaseApp);
const realDB = getDatabase(firebaseApp);
setPersistence(auth, browserSessionPersistence);
export {
  db as d,
  realDB as r
};
