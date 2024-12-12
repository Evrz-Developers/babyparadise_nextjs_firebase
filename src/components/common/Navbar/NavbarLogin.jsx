import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "@nextui-org/button";

const NavbarLogin = ({ user, isLoggedIn, onOpen }) => {
  // This is to prevent hydration mismatch because the server and client might have different value
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="light"
      onPress={onOpen}
      className="bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
    >
      {mounted && (
        <div className="flex items-center cursor-pointer">
          <p className="font-medium">{isLoggedIn ? user?.name : "Login"}</p>
          {isLoggedIn ? (
            <FiUser className="h-5 w-5 ml-1" />
          ) : (
            <AiOutlineLogin className="h-5 w-5 ml-1" />
          )}
        </div>
      )}
    </Button>
  );
};

export default NavbarLogin;
