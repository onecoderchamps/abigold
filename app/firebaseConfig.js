// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXQWPKOKImeobMyNntaNzelqm2GMmultk",
    authDomain: "abigold.firebaseapp.com",
    databaseURL: "https://abigold-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "abigold",
    storageBucket: "abigold.firebasestorage.app",
    messagingSenderId: "14598389782",
    appId: "1:14598389782:web:51530c5be05abb7668f537",
    measurementId: "G-1T42L7QE8M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
