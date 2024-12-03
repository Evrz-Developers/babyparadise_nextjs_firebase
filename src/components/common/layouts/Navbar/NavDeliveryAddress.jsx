import React from "react";
import { FiMapPin } from "react-icons/fi";
const NavDeliveryAddress = ({ inline = false, address = "Thrissur, IN" }) => {
  return (
    <div
      className={`flex ${
        inline
          ? "flex-row items-center justify-center gap-1"
          : "flex-col items-start"
      }`}
    >
      <span className="flex items-center text-xs font-medium text-gray-700 ">
        Delivering to{" "}
        <span className="font-semibold ml-1">{address}</span>
      </span>
      <span className="flex items-center text-sm font-semibold gap-1">
        <FiMapPin className="h-4 w-4" />
        Update location
      </span>
    </div>
  );
};

export default NavDeliveryAddress;
