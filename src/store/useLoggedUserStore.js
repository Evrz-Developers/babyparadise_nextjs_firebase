import { create } from "zustand";
import AUTH from "@/app/firebase/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const useLoggedUserStore = create((set) => {
  // Retrieve user data from cookies
  const storedUser =
    typeof window !== "undefined"
      ? JSON.parse(Cookies.get("user") || "null")
      : null;

  const isLoggedIn =
    storedUser &&
    storedUser.lastLoginAt &&
    Date.now() - storedUser.lastLoginAt < 7 * 24 * 60 * 60 * 1000;

  return {
    user: storedUser || null,
    isLoggedIn: isLoggedIn,
    setUser: (user) => {
      set({ user, isLoggedIn: true });
      if (typeof window !== "undefined") {
        // Store in both localStorage and cookies
        localStorage.setItem("user", JSON.stringify(user));
        Cookies.set("user", JSON.stringify(user), { expires: 7 }); // Expires in 7 days
      }
    },
    logout: async () => {
      try {
        await AUTH.LOGOUT();
        set({ user: null, isLoggedIn: false });
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
          Cookies.remove("user");
        }
      } catch (error) {
        toast.error("Error logging out: " + error.message, {
          autoClose: 1500,
        });
      }
    },
    isLoading: true,
    setLoading: (isLoading) => set({ isLoading }),
  };
});

export default useLoggedUserStore;
