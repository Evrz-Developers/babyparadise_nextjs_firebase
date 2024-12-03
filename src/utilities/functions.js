import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/firebase/firebaseConfig";
import Link from "next/link";
import { ShopLogo } from "@/components/common/ShopLogo.jsx";
import { SearchIcon } from "@/components/common/SearchIcon.jsx";
import Image from "next/image.js";
import useLoggedUserStore from '@/store/loggedUserStore';
import { useRouter } from 'next/navigation';

// PS:AUTH FUNCTIONS: @/lib/firebase/auth.js

// 

const getImageUrls = async (storagePath) => {
  const storageRef = ref(storage, storagePath);
  const result = await listAll(storageRef);
  
  // Fetch download URLs for each image
  const imageUrls = await Promise.all(
    result.items.map((item) => getDownloadURL(item))
  );
  
  return imageUrls;
};

const CATEGORY = {
  IMAGES: () => getImageUrls("images/categories"),
};

const CAROUSEL = {
  GET_IMAGES: () => getImageUrls("images/carousel"),
};

const FUNCTIONS = {
  CAROUSEL,
  CATEGORY,
};

export default FUNCTIONS;