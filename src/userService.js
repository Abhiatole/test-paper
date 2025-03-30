/src/userService.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const createUserProfile = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data);
  } catch (error) {
    throw error;
  }
};