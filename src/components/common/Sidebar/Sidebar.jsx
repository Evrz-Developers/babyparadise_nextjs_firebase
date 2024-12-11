"use client";

import React from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useLoggedUserStore from "@/store/loggedUserStore";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import NavbarLogo from "../Navbar/NavbarLogo";

const Sidebar = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { user, isLoggedIn, logout } = useLoggedUserStore();

  const handleLogout = async () => {
    setIsMenuOpen(false);
    await logout(); // Call the logout method from the store
    router.push("/login");
  };

  // TODO: Update page items
  const pageItems = [
    {
      label: "Profile Settings",
      href: "/profile",
    },
    {
      label: "Orders",
      href: "/orders",
    },
    {
      label: "Cart",
      href: "/cart",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Help & Feedback",
      href: "/help",
    },
  ];

  // TODO: Update category items, remove api path
  const categoryItems = [
    {
      label: "Dresses",
      href: "/api/products?category=dress",
    },
    {
      label: "Toys",
      href: "/api/products?category=toy",
    },
    {
      label: "Footwear",
      href: "/api/products?category=footwear",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{
        transition: `opacity ${isOpen ? "300ms ease-out" : "500ms ease-in"}`,
      }}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen
            ? "translate-x-0" // Sidebar fully visible
            : "-translate-x-[102%]" // Sidebar fully hidden
        }`}
        style={{
          transition: `transform ${
            isOpen ? "300ms ease-out" : "500ms ease-in"
          }`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center">
            <NavbarLogo title="Menu" />
          </Link>
          <button onClick={onClose}>
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <ContentWrapper className="overflow-hidden h-full overflow-y-scroll scrollbar-hide">
          {/* TODO: Add Sidebar Content */}
          {/* Section 1: Categories */}
          <div className="p-4">
            <h3 className="font-semibold text-lg">Shop by Category</h3>
            <ul className="mt-2 space-y-2">
              {categoryItems.map((item, index) => (
                <Link
                  key={index}
                  href={item?.href}
                  className="block hover:bg-gray-100 p-2 rounded-xl w-full"
                  size="lg"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          {/* Section 2: Pages */}
          <div className="p-4">
            <h3 className="font-semibold text-lg">Pages</h3>
            <ul className="mt-2 space-y-2">
              {pageItems.map((item, index) => (
                <Link
                  key={index}
                  href={item?.href}
                  className="block hover:bg-gray-100 p-2 rounded-xl w-full"
                  size="lg"
                >
                  <li>{item.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Sidebar;
