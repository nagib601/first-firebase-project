// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Bqd73hFjd8ptkIxe1jkFXrdvRSgI_iE",
  authDomain: "fire-base-prectice.firebaseapp.com",
  projectId: "fire-base-prectice",
  storageBucket: "fire-base-prectice.firebasestorage.app",
  messagingSenderId: "633475798334",
  appId: "1:633475798334:web:7aee19662fa7be81f9886f",
  measurementId: "G-N3C7P12431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;