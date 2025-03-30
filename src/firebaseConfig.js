import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjiXtuIqw_rzC2Tus1OoOqSROKP9xvrKQ",
  authDomain: "eduquest-mcq.firebaseapp.com",
  projectId: "eduquest-mcq",
  storageBucket: "eduquest-mcq.firebasestorage.app",
  messagingSenderId: "75697661983",
  appId: "1:75697661983:web:f5b558bd9b81c7311f4d2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };