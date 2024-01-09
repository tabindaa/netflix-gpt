// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgox7WefsKGId2tLYkdctN4an2unfT3Ho",
  authDomain: "netflix-gpt-dc99c.firebaseapp.com",
  projectId: "netflix-gpt-dc99c",
  storageBucket: "netflix-gpt-dc99c.appspot.com",
  messagingSenderId: "708220363481",
  appId: "1:708220363481:web:4232f79b2879acd56194c8",
  measurementId: "G-4MB6RQ9SLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
