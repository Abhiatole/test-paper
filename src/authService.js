import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user profile to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      instituteName: "Test Institute",
      role: "Educator",
      subscriptionStatus: "Active",
    });

    return user;
  } catch (error) {
    throw error;
  }
};