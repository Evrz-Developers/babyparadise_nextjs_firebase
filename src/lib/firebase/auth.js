import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: error.message };
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Successfully logged out");
  } catch (error) {
    console.error("Error logging out:", error);
    return { error: error.message };
  }
};

const AUTH = {
  login: loginWithEmailPassword,
  logout: logout,
};

export default AUTH;