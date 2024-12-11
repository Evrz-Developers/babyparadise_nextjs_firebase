"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogIn, FiUser } from "react-icons/fi";
import { InstallAppManager } from "@/app/PWAManager";
import useLoggedUserStore from "@/store/loggedUserStore";
import NavbarLogo from "@/components/common/Navbar/NavbarLogo";
import NavbarDeliveryAddress from "@/components/common/Navbar/NavbarDeliveryAddress";
import NavSearchBar from "@/components/common/Navbar/NavSearchBar";
import NavbarCart from "@/components/common/Navbar/NavbarCart";
import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import NextDrawer from "@/components/ui/next-drawer";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Button } from "@nextui-org/button";
import Login from "@/components/auth/Login";
import Profile from "@/components/shop/user/Profile";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import CustomDropdown from "@/components/common/CustomDropdown";
import NavbarLogin from "./NavbarLogin";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

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
        wrapper: "px-4",
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

      {/* Right Section*/}
      <NavbarContent justify="end" className="flex gap-4">
        {/* Install App Manager */}
        <NavbarItem>
          <InstallAppManager />
        </NavbarItem>
        {/* Cart Icon */}
        <NavbarItem>
          <NavbarCart />
        </NavbarItem>
        {/* Login Button/ Dropdown Menu/ Drawer */}
        <NavbarItem>
          <NavbarLogin
            isLoggedIn={isLoggedIn}
            user={user}
            onOpen={onOpen}
            onClose={onClose}
            handleLogout={handleLogout}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Drawer Content*/}
      <NextDrawer
        title={isLoggedIn ? user?.displayName.split(" ")[0] : ""}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {isLoggedIn ? (
          <Profile handleLogout={handleLogout} />
        ) : (
          <Login onClose={onClose} />
        )}
      </NextDrawer>
    </NextNavbar>
  );
};

export default Navbar;
