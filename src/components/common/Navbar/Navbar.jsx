"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import Login from "@/components/auth/Login";
import Profile from "@/components/shop/user/Profile";
import NavbarLogin from "./NavbarLogin";
import Register from "@/components/auth/Register";
import { Tabs, Tab } from "@nextui-org/tabs";

const Navbar = ({ title }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
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
      <NavbarContent justify="start">
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
        {/* Cart Button */}
        <NavbarItem className="hidden sm:flex">
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
          <>
            <Tabs
              aria-label="Sign in options"
              variant="ghost"
              // color="primary"
              selectedKey={activeTab}
              onSelectionChange={setActiveTab}
            >
              <Tab key="login" title="Login">
                <Login onClose={onClose} setActiveTab={setActiveTab} />
              </Tab>
              <Tab key="register" title="Register">
                <Register onClose={onClose} setActiveTab={setActiveTab} />
              </Tab>
            </Tabs>
          </>
        )}
      </NextDrawer>
    </NextNavbar>
  );
};

export default Navbar;
