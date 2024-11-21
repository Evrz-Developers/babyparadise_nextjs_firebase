import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: error.message };
  }
};

const AUTH = {
  login: loginWithEmailPassword,
};

export default AUTH;