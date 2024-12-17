import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FaOpencart } from "react-icons/fa";

const NavbarCart = () => {
  return (
    <Button
      as={Link}
      variant="flat"
      className="bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
      href="/cart"
    >
      <div className="flex items-center cursor-pointer">
        <p className="font-medium">Cart</p>
        <FaOpencart className="h-5 w-5 ml-1 " />
        {/* <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
        3
      </span> */}
      </div>
    </Button>
  );
};

export default NavbarCart;
