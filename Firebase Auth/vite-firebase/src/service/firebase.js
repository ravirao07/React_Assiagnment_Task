// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhTb0RqMCBuCRwDw4dX42T5MKDSnswiFs",
  authDomain: "auth-9649b.firebaseapp.com",
  projectId: "auth-9649b",
  storageBucket: "auth-9649b.appspot.com",
  messagingSenderId: "560528149465",
  appId: "1:560528149465:web:6de216bc03170a8bcb67c8",
  measurementId: "G-W1YWLXH6ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const analytics = getAnalytics(app);