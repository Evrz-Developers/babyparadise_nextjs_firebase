import { auth } from "@/app/firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Check your email and password.";
    case "auth/user-disabled":
      return "The user corresponding to the given email has been disabled.";
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/invalid-credential":
      return "Check your email and password.";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    const formattedError = getErrorMessage(error.code);
    return { error: formattedError };
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.warning("Logged out", {
      autoClose: 1500,
    });
  } catch (error) {
    return { error: error.message };
  }
};

const AUTH = {
  login: loginWithEmailPassword,
  logout: logout,
};

export default AUTH;
