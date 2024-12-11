import { NavbarItem } from "@nextui-org/navbar";
import React from "react";
import Link from "next/link";
import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";

const NavbarMenuContent = ({ isLoggedIn, handleLogout }) => {
  const menuItems = [
    { label: "Login", href: "/login" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Cart", href: "/cart" },
    { label: "About", href: "/about" },
    { label: "Help & Feedback", href: "/help" },
  ];
  const isLoggedInItems = [
    { label: "Profile Settings", href: "/profile" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Cart", href: "/cart" },
    { label: "About", href: "/about" },
    { label: "Help & Feedback", href: "/help" },
    { label: "Orders", href: "/orders" },
    { label: "Logout", onClick: handleLogout },
  ];
  const renderMenuItems = (items) => {
    return items.map((item) => (
      <NavbarItem
        as={item.href ? Link : "button"}
        key={item.label}
        href={item?.href}
        onClick={item?.onClick}
      >
        {item.label}
      </NavbarItem>
    ));
  };
  return (
    <div className="w-full h-full flex flex-col bg-green-500">
      {isLoggedIn
        ? renderMenuItems(isLoggedInItems)
        : renderMenuItems(menuItems)}
    </div>
  );
};

export default NavbarMenuContent;
