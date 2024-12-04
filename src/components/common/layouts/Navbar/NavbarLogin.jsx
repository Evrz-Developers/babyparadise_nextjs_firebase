import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image.js";
import { FiUser } from "react-icons/fi";

const NavbarLogin = ({ user, isLoggedIn,handleLogout }) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setIsOpen(false);

  return (
    <Dropdown placement="bottom-end" closeOnSelect >
      <DropdownTrigger> 
        <Image
          alt="Profile"
          width={34}
          height={34}
          src="/images/dev.png"
          className="rounded-full"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {isLoggedIn && user && (
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold"> {user.email}</p>
          </DropdownItem>
        )}
        {!isLoggedIn && (
          <DropdownItem as={Link} key="login" href="/login">
            Login / Register
          </DropdownItem>
        )}
        <DropdownItem as={Link} key="settings" href="/profile">
          Profile Settings
        </DropdownItem>
        <DropdownItem as={Link} key="orders" href="/orders">
          Orders
        </DropdownItem>
        <DropdownItem as={Link} key="cart" href="/cart">
          Cart
        </DropdownItem>
        <DropdownItem as={Link} key="about" href="/about">
          About
        </DropdownItem>
        <DropdownItem as={Link} key="help_and_feedback" href="/help">
          Help & Feedback
        </DropdownItem>
        {isLoggedIn && (
          <DropdownItem
            as="button"
            key="logout"
            color="danger"
            onClick={handleLogout}
          >
            Log Out
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
    // <button className="bg-color-primary-p90 hover:bg-color-primary-p80 text-neutral-600 hover:text-neutral-900 px-4 py-2 rounded-md flex items-center gap-2">
    //   <FiUser className="h-5 w-5" />
    //   Login
    // </button>
  );
};

export default NavbarLogin;
