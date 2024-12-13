import { create } from "zustand";
import AUTH from "@/app/firebase/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// Constants
const USER_COOKIE_KEY = "user";
const COOKIE_EXPIRY_DAYS = 7;
const COOKIE_OPTIONS = {
  expires: COOKIE_EXPIRY_DAYS,
  secure: true,
  sameSite: "strict",
};

// Initialize state outside the store
const getInitialState = () => {
  if (typeof window === "undefined") {
    return {
      user: null,
      isLoggedIn: false,
      isLoading: true,
    };
  }

  try {
    const storedUser = Cookies.get(USER_COOKIE_KEY);
    if (!storedUser) {
      return { user: null, isLoggedIn: false, isLoading: false };
    }

    const user = JSON.parse(storedUser);
    // Check if login is within last 7 days
    const isLoggedIn =
      user &&
      user.lastLoginAt &&
      Date.now() - user.lastLoginAt < COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    // If login expired, clean up cookie
    if (!isLoggedIn && storedUser) {
      Cookies.remove(USER_COOKIE_KEY);
    }

    return {
      user: isLoggedIn ? user : null,
      isLoggedIn,
      isLoading: false,
    };
  } catch (error) {
    console.error("Error parsing stored user:", error);
    // Clean up corrupted cookie
    Cookies.remove(USER_COOKIE_KEY);
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
    };
  }
};

const useLoggedUserStore = create((set) => ({
  ...getInitialState(),

  setUser: (user) => {
    // Store only necessary user data
    const userToStore = user
      ? {
          uid: user.uid,
          name: user.name,
          role: user.role,
          email: user.email,
          lastLoginAt: Date.now(),
          photoURL: user.photoURL,
          // accessToken: user.accessToken,
          // Add other non-sensitive fields here
        }
      : null;

    set({ user: userToStore, isLoggedIn: true, isLoading: false });

    if (userToStore) {
      Cookies.set(USER_COOKIE_KEY, JSON.stringify(userToStore), COOKIE_OPTIONS);
    }
  },

  logout: async () => {
    try {
      await AUTH.LOGOUT();
      set({ user: null, isLoggedIn: false });
      Cookies.remove(USER_COOKIE_KEY);
    } catch (error) {
      toast.error("Error logging out: " + error.message, {
        autoClose: 1500,
      });
    }
  },

  setLoading: (isLoading) => set({ isLoading }),
}));

export default useLoggedUserStore;
