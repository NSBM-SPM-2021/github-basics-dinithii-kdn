// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "/firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUZYAYAPeBS61Z3wsD3383d37ewEYgBeE",
    authDomain: "db1amo.firebaseapp.com",
    projectId: "db1amo",
    storageBucket: "db1amo.appspot.com",
    messagingSenderId: "946454306242",
    appId: "1:946454306242:web:067e56fafded4ad63b8a5b",
    measurementId: "G-18YJ4KYK8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);