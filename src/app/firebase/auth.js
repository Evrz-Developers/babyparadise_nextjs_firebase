import { auth } from "@/app/firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    // console.error("Error logging in:", error);
    toast.error("Error logging in", error, {
      autoClose: 1500,
    });
    return { error: error.message };
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.warning("Logged out", {
      autoClose: 1500,
    });
  } catch (error) {
    toast.error("Error logging out", {
      autoClose: 1500,
    });
  }
};

const AUTH = {
  login: loginWithEmailPassword,
  logout: logout,
};

export default AUTH;
