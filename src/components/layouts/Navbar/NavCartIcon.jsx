import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const NavCartIcon = () => {
  return (
    <button className="relative">
      <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        3
      </span>
    </button>
  );
};

export default NavCartIcon;
