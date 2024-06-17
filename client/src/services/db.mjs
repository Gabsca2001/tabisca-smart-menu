import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if (!db) {
        const firebaseApp = initializeApp({
            apiKey: "AIzaSyDYRMBqwuE9pQ5r5yqVpakcWE0A5xV3I9M",
            authDomain: "smart-menu-tabisca-dd8a5.firebaseapp.com",
            projectId: "smart-menu-tabisca-dd8a5",
            storageBucket: "smart-menu-tabisca-dd8a5.appspot.com",
            messagingSenderId: "393593049540",
            appId: "1:393593049540:web:d571cae1d1dd02df35d491"
        });
        db = getFirestore(firebaseApp);
    }
    return db;
}