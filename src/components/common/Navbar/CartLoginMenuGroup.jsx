import React, { useState, useEffect } from "react";
import { FiUser, FiMenu, FiShoppingCart } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { Button, ButtonGroup } from "@nextui-org/button";
import useDrawerStore from "@/store/useDrawerStore";

const CartLoginMenuGroup = ({ user, isLoggedIn }) => {
  // This is to prevent hydration mismatch because the server and client might have different value
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { onCartOpen, onLoginOpen, onMenuOpen } = useDrawerStore();

  return (
    <ButtonGroup>
      {/* Cart Button */}
      <Button
        isIconOnly
        onPress={onCartOpen}
        className=" bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
      >
        <FiShoppingCart className="h-4 w-4" />
      </Button>

      {/* Login Button */}
      <Button
        fullWidth
        onPress={onLoginOpen}
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

      {/* Menu Button */}
      <Button
        isIconOnly
        onPress={onMenuOpen}
        className=" bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
      >
        <FiMenu className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  );
};

export default CartLoginMenuGroup;
