import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDYRMBqwuE9pQ5r5yqVpakcWE0A5xV3I9M",
    authDomain: "smart-menu-tabisca-dd8a5.firebaseapp.com",
    projectId: "smart-menu-tabisca-dd8a5",
    storageBucket: "smart-menu-tabisca-dd8a5.appspot.com",
    messagingSenderId: "393593049540",
    appId: "1:393593049540:web:d571cae1d1dd02df35d491"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
