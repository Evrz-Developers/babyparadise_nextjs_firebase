"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InstallAppManager } from "@/app/PWAManager";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import NavbarLogo from "@/components/common/Navbar/NavbarLogo";
import NavSearchBar from "@/components/common/Navbar/NavSearchBar";
import NavbarDeliveryAddress from "@/components/common/Navbar/NavbarDeliveryAddress";
import useDrawerStore from "@/store/useDrawerStore";
import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import CartLoginMenuGroup from "@/components/common/Navbar/CartLoginMenuGroup";
import DrawerContent from "@/components/common/Navbar/DrawerContent";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  const {
    isCartOpen,
    onCartOpenChange,
    onCartClose,
    onLoginOpenChange,
    onLoginClose,
    isLoginOpen,
    isMenuOpen,
    onMenuOpenChange,
    onMenuClose,
  } = useDrawerStore();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <NextNavbar
      maxWidth="2xl"
      className="shadow-sm"
      classNames={{
        base: "bg-white/50",
        wrapper: "px-4",
      }}
    >
      {/* Left Section: Shop Logo */}
      <NavbarContent justify="start">
        <Link href="/" className="flex items-center gap-1">
          <NavbarLogo title={title} />
        </Link>
        {/* Delivery Address (DESKTOP ONLY) */}
        {/* <div className="hidden md:flex items-center justify-center gap-4">
            <NavbarDeliveryAddress />
          </div> */}
      </NavbarContent>

      {/* Middle Section: Search Bar and Delivery Address (DESKTOP ONLY) */}
      <NavbarContent className="hidden lg:flex gap-4 w-1/3" justify="center">
        <NavSearchBar />
      </NavbarContent>

      {/* Right Section*/}
      <NavbarContent justify="end" className="flex gap-4">
        {/* Install App Manager */}
        <NavbarItem>
          <InstallAppManager />
        </NavbarItem>

        {/* Cart Button */}
        {/* <NavbarItem className="sm:flex">
          <NavbarCart onOpen={onCartOpen} onClose={onCartClose} />
        </NavbarItem> */}

        {/* Cart, Login, Menu Button - Drawer */}
        <NavbarItem>
          <CartLoginMenuGroup
            isLoggedIn={isLoggedIn}
            user={user}
            handleLogout={handleLogout}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Drawer Contents */}
      <DrawerContent
        type="user"
        isOpen={isLoginOpen}
        onOpenChange={onLoginOpenChange}
        onClose={onLoginClose}
        user={user}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <DrawerContent
        type="cart"
        isOpen={isCartOpen}
        onOpenChange={onCartOpenChange}
        onClose={onCartClose}
        user={user}
        isLoggedIn={isLoggedIn}
      />

      <DrawerContent
        type="menu"
        isOpen={isMenuOpen}
        onOpenChange={onMenuOpenChange}
        onClose={onMenuClose}
        user={user}
        isLoggedIn={isLoggedIn}
      />
    </NextNavbar>
  );
};

export default Navbar;
