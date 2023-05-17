// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7mdH7r9x_Ei8eJYuu3xGHFzqdIZv-HeU",
  authDomain: "toy-bazar.firebaseapp.com",
  projectId: "toy-bazar",
  storageBucket: "toy-bazar.appspot.com",
  messagingSenderId: "47202122833",
  appId: "1:47202122833:web:64a0b8efc18c0ee8ab8c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;