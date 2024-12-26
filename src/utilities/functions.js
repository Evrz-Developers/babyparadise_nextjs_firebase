import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase/firebaseConfig";
import { toast } from "react-toastify";

export const handleLoginResult = (result, onClose, setUser, router) => {
  if (result.error) {
    toast.error("Uh-oh! " + result.error);
  } else {
    setUser(result.user);
    toast.success("Login successful!");
    onClose();
    if (result.user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
  }
};

const handleRegisterResult = (result, onClose, setUser, router) => {
  if (result.error) {
    toast.error("Uh- " + result.error);
  } else {
    setUser(result.user);
    toast.success("Registration successful!");
    if (result.user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
    onClose();
  }
};

const getImageUrls = async (storagePath) => {
  const storageRef = ref(storage, storagePath);
  const result = await listAll(storageRef);

  // Fetch download URLs for each image
  const imageURLs = await Promise.all(
    result.items.map((item) => getDownloadURL(item))
  );

  return imageURLs;
};

const AUTH = {
  HANDLE_LOGIN_RESULT: handleLoginResult,
  HANDLE_REGISTER_RESULT: handleRegisterResult,
};

const CATEGORY = {
  IMAGES: () => getImageUrls("images/categories"),
};

const CAROUSEL = {
  GET_IMAGES: () => getImageUrls("images/carousel"),
};

const FUNCTIONS = {
  AUTH,
  CAROUSEL,
  CATEGORY,
};

export default FUNCTIONS;
