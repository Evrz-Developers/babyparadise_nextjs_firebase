"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const NavSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="w-full flex items-center relative">
      <div className="flex w-full overflow-hidden rounded-xl border focus-within:ring focus-within:ring-color-purple-p90 focus-within:border-color-purple-p50 border-color-purple-p50 sm:max-w-md md:max-w-lg lg:max-w-xl md:ml-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 text-sm border-none outline-none focus:ring-0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          
        />
        <button
          onClick={handleSearch}
          className="bg-color-purple-p60 hover:bg-color-purple-p50 text-white px-4 py-2 flex items-center justify-center"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default NavSearchBar;
