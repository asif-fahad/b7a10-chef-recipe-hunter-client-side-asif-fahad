// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3GDz5cOEP51ldLbxlPPx01nbPae5K6Uo",
    authDomain: "b7a10-chef-recipe-hunter-9dcb4.firebaseapp.com",
    projectId: "b7a10-chef-recipe-hunter-9dcb4",
    storageBucket: "b7a10-chef-recipe-hunter-9dcb4.appspot.com",
    messagingSenderId: "750304033321",
    appId: "1:750304033321:web:8f8cc9859d412cab687a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;