"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { InstallAppManager } from "@/app/PWAManager";
import useLoggedUserStore from "@/store/loggedUserStore";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import NavbarLogo from "@/components/common/Navbar/NavbarLogo";
import NavbarDeliveryAddress from "@/components/common/Navbar/NavbarDeliveryAddress";
import NavSearchBar from "@/components/common/Navbar/NavSearchBar";
import NavbarCart from "@/components/common/Navbar/NavbarCart";
import NavbarLogin from "@/components/common/Navbar/NavbarLogin";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex items-center justify-between py-2">
        {/* Left Section*/}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu (MOBILE ONLY) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-1">
            <NavbarLogo title={title} />
          </Link>

          {/* Delivery Address (EXCLUDING MOBILE) */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <NavbarDeliveryAddress />
          </div>
        </div>

        {/* Middle Section: Search Bar and Delivery Address (EXCLUDING MOBILE) */}
        <div className="flex-grow mx-4 hidden md:flex items-center justify-center">
          <NavSearchBar />
        </div>

        {/* Right Section: Login Button & Cart Icon */}
        <div className="flex items-center gap-5 md:gap-7">
          <InstallAppManager />
          <NavbarCart />
          <NavbarLogin
            user={user}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Second Navbar (EXCLUDING MOBILE) */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex-grow hidden md:flex items-center justify-start bg-color-primary-p100 w-full py-2">
        {/* Hamburger Menu */}
        <button
          className="text-gray-700"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Search Bar and Delivery Address (MOBILE ONLY)*/}
      <div className="flex flex-col items-center justify-center w-full md:hidden">
        <div className="bg-color-primary-p90 w-full py-2 px-4">
          <NavSearchBar />
        </div>
        <div className="bg-color-primary-p100 w-full py-1 px-4">
          <NavbarDeliveryAddress inline />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
