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
import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  NavbarBrand,
} from "@nextui-org/navbar";

import NavbarMenuContent from "./NavbarMenuContent";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <NextNavbar
      maxWidth="2xl"
      className="shadow-sm "
      classNames={{
        base: "bg-white/50",
      }}
    >
      {/* Left Section: Hamburger Menu and Shop Logo */}
      <NavbarContent className="" justify="start">
        {/* <NavbarMenuToggle /> */}

        <Link href="/" className="flex items-center gap-1">
          <NavbarLogo title={title} />
        </Link>
        {/* Delivery Address (DESKTOP ONLY) */}
        {/* <div className="hidden md:flex items-center justify-center gap-4">
          <NavbarDeliveryAddress />
        </div> */}
      </NavbarContent>

      {/* Middle Section: Search Bar and Delivery Address (DESKTOP ONLY) */}
      <NavbarContent className="hidden sm:flex gap-4 w-1/3" justify="center">
        <NavSearchBar />
      </NavbarContent>

      {/* Right Section: Install App Manager, Cart Icon & Login Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <InstallAppManager />
        </NavbarItem>
        <NavbarItem>
          <NavbarCart />
        </NavbarItem>
        <NavbarItem>
          <NavbarLogin
            user={user}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger Menu Content */}
      <NavbarMenu className="bg-white/50 h-40">
        <NavbarItem
          aria-label="Profile Actions"
          variant="flat"
          className="w-full h-full bg-red-500"
        >
          <NavbarMenuContent
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
        </NavbarItem>
      </NavbarMenu>
    </NextNavbar>
  );
};

export default Navbar;
