import React from "react";
import { Button } from "@nextui-org/button";
import { FaOpencart } from "react-icons/fa";
import useCartStore from "@/store/useCartStore";

const NavbarCart = ({ onOpen }) => {
  const { products } = useCartStore();
  const itemCount = products.length;

  return (
    <Button
      variant="flat"
      className="bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
      onPress={onOpen}
    >
      <div className="flex items-center cursor-pointer relative">
        <FaOpencart className="h-5 w-5 mr-2" />
        <p className="font-medium">Cart</p>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </Button>
  );
};

export default NavbarCart;
