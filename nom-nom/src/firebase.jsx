import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCSgd9e2CDV40pciOrJZPCwAywGynNKQc",
  authDomain: "platepal-3cdef.firebaseapp.com",
  projectId: "platepal-3cdef",
  storageBucket: "platepal-3cdef.firebasestorage.app",
  messagingSenderId: "568482755133",
  appId: "1:568482755133:web:60bc7e607133322fd33054",
  measurementId: "G-8KGZRSFLE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Correct way to initialize Firestore
export const auth = getAuth(app); // Pass app reference to getAuth if needed

export default app;
