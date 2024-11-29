"use client";

import React from "react";
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose}>
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg">Shop by Category</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Mobiles, Computers
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              TV, Appliances, Electronics
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Men&apos;s Fashion
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Women&apos;s Fashion
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">See All</li>
          </ul>

          <h3 className="font-semibold text-lg mt-6">Programs & Features</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:bg-gray-100 p-2 rounded-md">Amazon Pay</li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Gift Cards & Mobile Recharges
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">
              Amazon Launchpad
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md">Amazon Business</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
