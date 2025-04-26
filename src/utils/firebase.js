// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKCMnK69pmjHjikYWh5CRZlEPLUdt5sU8",
  authDomain: "netflixgpt-ace55.firebaseapp.com",
  projectId: "netflixgpt-ace55",
  storageBucket: "netflixgpt-ace55.firebasestorage.app",
  messagingSenderId: "710328428603",
  appId: "1:710328428603:web:ed410e2dc8356883ac941e",
  measurementId: "G-B5NHRBZ5G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics)

export const auth = getAuth();