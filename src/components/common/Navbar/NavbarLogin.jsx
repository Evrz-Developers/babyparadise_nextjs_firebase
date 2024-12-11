import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiLogIn, FiUser } from "react-icons/fi";
import { LOGGED_IN_MENU_ITEMS } from "@/utilities/constants";
import { Button } from "@nextui-org/button";
import CustomDropdown from "@/components/common/CustomDropdown";

const NavbarLogin = ({ user, isLoggedIn, handleLogout, onOpen }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null;
  }

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const Component = item.href ? Link : "button";
      return (
        <Component key={item.label} href={item?.href} onClick={item?.onClick}>
          {item.label}
        </Component>
      );
    });
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="relative">
          <Button
            variant="light"
            onPress={onOpen}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <div className="flex items-center cursor-pointer">
              <p className="font-normal">{user?.displayName.split(" ")[0]}</p>
              <FiUser className="h-5 w-5 ml-2" />
            </div>
          </Button>
          <CustomDropdown
            isOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <div className="flex flex-col gap-2">
              {renderMenuItems(LOGGED_IN_MENU_ITEMS)}
              <button onClick={handleLogout}>Logout</button>
            </div>
          </CustomDropdown>
        </div>
      ) : (
        <div className="relative">
          <Button variant="light" onPress={onOpen}>
            <div className="flex items-center cursor-pointer">
              <p className="font-normal">Login</p>
              <FiLogIn className="h-5 w-5 ml-1" />
            </div>
          </Button>
        </div>
      )}
    </>
  );
};

export default NavbarLogin;
