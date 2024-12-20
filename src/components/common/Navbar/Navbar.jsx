"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InstallAppManager } from "@/app/PWAManager";
import Profile from "@/components/shop/user/Profile";
import NextDrawer from "@/components/ui/next-drawer";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import NavbarCart from "@/components/common/Navbar/NavbarCart";
import NavbarLogo from "@/components/common/Navbar/NavbarLogo";
import NavbarLogin from "@/components/common/Navbar/NavbarLogin";
import NavSearchBar from "@/components/common/Navbar/NavSearchBar";
import NavbarDeliveryAddress from "@/components/common/Navbar/NavbarDeliveryAddress";
import useDrawerStore from "@/store/useDrawerStore";
import Cart from "@/components/shop/user/Cart";

import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import SigninSignup from "@/components/auth/SigninSignup";
import EmptyCart from "@/components/shop/user/EmptyCart";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();
  const {
    cartDrawerContent,
    isCartOpen,
    onCartOpen,
    onCartOpenChange,
    onCartClose,
    onLoginOpen,
    onLoginOpenChange,
    onLoginClose,
    isLoginOpen,
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
      <NavbarContent className="hidden sm:flex gap-4 w-1/3" justify="center">
        <NavSearchBar />
      </NavbarContent>

      {/* Right Section*/}
      <NavbarContent justify="end" className="flex gap-4">
        {/* Install App Manager */}
        <NavbarItem>
          <InstallAppManager />
        </NavbarItem>
        {/* Cart Button */}
        <NavbarItem className="sm:flex">
          <NavbarCart onOpen={onCartOpen} onClose={onCartClose} />
        </NavbarItem>
        {/* Login Button/ Dropdown Menu/ Drawer */}
        <NavbarItem>
          <NavbarLogin
            isLoggedIn={isLoggedIn}
            user={user}
            onOpen={onLoginOpen}
            onClose={onLoginClose}
            handleLogout={handleLogout}
          />
        </NavbarItem>
      </NavbarContent>

      {/* Drawer Content*/}
      <NextDrawer
        title={isLoggedIn ? user?.name : "Guest"}
        isOpen={isLoginOpen}
        onOpenChange={onLoginOpenChange}
      >
        {isLoggedIn ? (
          <Profile handleLogout={handleLogout} />
        ) : (
          <SigninSignup onClose={onLoginClose} />
        )}
      </NextDrawer>

      {/* Cart Drawer */}
      <NextDrawer
        title="Cart"
        isOpen={isCartOpen}
        onOpenChange={onCartOpenChange}
        size="xl"
      >
        {cartDrawerContent === "cart" ? (
          isLoggedIn ? (
            <Cart onClose={onCartClose} isLoggedIn={isLoggedIn} />
          ) : (
            <EmptyCart className="h-full" />
          )
        ) : (
          <SigninSignup onClose={onLoginClose} />
        )}
      </NextDrawer>
    </NextNavbar>
  );
};

export default Navbar;
