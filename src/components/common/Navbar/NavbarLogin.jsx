import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Image from "next/image.js";
import { FiLogIn, FiUser } from "react-icons/fi";

const NavbarLogin = ({ user, isLoggedIn, handleLogout }) => {
  const renderMenuItems = (items) => {
    return items.map((item) => (
      <DropdownItem
        as={item.href ? Link : "button"}
        key={item.label}
        href={item?.href}
        onClick={item?.onClick}
      >
        {item.label}
      </DropdownItem>
    ));
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center gap-1">
          <p className="font-normal">{user?.displayName.split(" ")[0]}</p>
          <FiUser className="h-5 w-5" />
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <p className="font-normal cursor-pointer"> Login</p>
          <FiLogIn className="h-5 w-5" />
        </div>
      )}
    </>
  );
};

export default NavbarLogin;
