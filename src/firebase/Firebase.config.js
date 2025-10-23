// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_0Ivtf7PVsj5vzwQ5WGtaCSNIVs3XQYQ",
  authDomain: "toytopia-ff3a7.firebaseapp.com",
  projectId: "toytopia-ff3a7",
  storageBucket: "toytopia-ff3a7.firebasestorage.app",
  messagingSenderId: "70431275197",
  appId: "1:70431275197:web:0c8cb3f2760e4387a9dfd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export default app;
