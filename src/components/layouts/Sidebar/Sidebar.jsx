"use client";

import React from "react";
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{
        transition: `opacity ${isOpen ? "300ms ease-out" : "500ms ease-in"}`,
      }}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen
            ? "translate-x-0" // Sidebar fully visible
            : "-translate-x-[102%]" // Sidebar fully hidden
        }`}
        style={{
          transition: `transform ${isOpen ? "300ms ease-out" : "500ms ease-in"}`,
        }}
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
            <li className="hover:bg-gray-100 p-2 rounded-md">Mobiles, Computers</li>
            <li className="hover:bg-gray-100 p-2 rounded-md">TV, Appliances, Electronics</li>
            <li className="hover:bg-gray-100 p-2 rounded-md">Men&apos;s Fashion</li>
            <li className="hover:bg-gray-100 p-2 rounded-md">Women&apos;s Fashion</li>
            <li className="hover:bg-gray-100 p-2 rounded-md">See All</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
