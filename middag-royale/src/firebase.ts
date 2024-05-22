// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Va inte oskön, jag orkar inte göma mina api-nycklar tack och hej leverpastej
const firebaseConfig = {
    apiKey: "AIzaSyDLwgqQPM71ZPj8K6_EMsKAXBSOWUdyEhA",
    authDomain: "middagroyale.firebaseapp.com",
    projectId: "middagroyale",
    storageBucket: "middagroyale.appspot.com",
    messagingSenderId: "889938350452",
    appId: "1:889938350452:web:2d8adb50388250a39c5c21"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
