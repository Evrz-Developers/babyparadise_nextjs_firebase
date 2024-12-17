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
      fullWidth
      variant="light"
      onPress={onOpen}
      endContent={
        mounted && isLoggedIn ? (
          <FiUser className="h-4 w-4" />
        ) : (
          mounted && <AiOutlineLogin className="h-4 w-4" />
        )
      }
      className=" bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
    >
      {mounted && (
        <div className="flex items-center">
          <p className="font-medium text-xs">
            {isLoggedIn ? user?.name : "Login"}
          </p>
        </div>
      )}
    </Button>
  );
};

export default NavbarLogin;
