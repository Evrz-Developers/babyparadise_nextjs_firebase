"use client";
import React, { useState } from "react";
import {
  FiMenu
} from "react-icons/fi"; // React Icons
import Sidebar from "@/components/common/layouts/Sidebar/Sidebar";
import NavbarLogo from "@/components/common/layouts/Navbar/NavbarLogo";
import NavbarDeliveryAddress from "@/components/common/layouts/Navbar/NavbarDeliveryAddress";
import NavSearchBar from "@/components/common/layouts/Navbar/NavSearchBar";
import NavbarCart from "@/components/common/layouts/Navbar/NavbarCart";
import NavbarLogin from "@/components/common/layouts/Navbar/NavbarLogin";
import useLoggedUserStore from '@/store/loggedUserStore';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <div className="flex items-center gap-1">
            <ShopLogo />
            <p className="font-bold text-inherit mr-2">{title}</p>
          </div>

          {/* Delivery Address (EXCLUDING MOBILE) */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <NavDeliveryAddress />
          </div>
        </div>

        {/* Middle Section: Search Bar and Delivery Address (EXCLUDING MOBILE) */}
        <div className="flex-grow mx-4 hidden md:flex items-center justify-center">
          <NavSearchBar />
        </div>

        {/* Right Section: Login Button & Cart Icon */}
        <div className="flex items-center gap-4">
          <button className="bg-color-primary-p90 hover:bg-color-primary-p80 text-neutral-600 hover:text-neutral-900 px-4 py-2 rounded-md flex items-center gap-2">
            <FiUser className="h-5 w-5" />
            Login
          </button>
          <button className="relative">
            <FiShoppingCart className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
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
          <NavDeliveryAddress inline />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
