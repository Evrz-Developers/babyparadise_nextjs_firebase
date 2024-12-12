"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useCategoryStore from "@/store/useCategoryStore";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import Product from "@/components/shop/product/Product";

const Dashboard = () => {
  const { categories } = useCategoryStore();
  const { user, isLoggedIn } = useLoggedUserStore();
  const router = useRouter();

  useEffect(() => {
    // Client-side protection
    if (!isLoggedIn || !user || user.role !== "admin") {
      router.push("/");
    }
  }, [isLoggedIn, user, router]);

  // Show loading or nothing while checking authentication
  if (!isLoggedIn || !user || user.role !== "admin") {
    return null;
  }

  return (
    <div>
      {categories && Array.isArray(categories) && categories.length > 0 ? (
        <div className="h-full w-full xxs:mt-16 md:mt-14 fixed top-0">
          <div className="w-full h-full pt-4">
            <Product />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full pb-60">
          <h2 className="text-xl font-semibold text-gray-800">
            No Products to Show!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
