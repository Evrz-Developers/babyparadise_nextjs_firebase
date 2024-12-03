import React from "react";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Logo" className="h-8 w-8" />
      <span className="text-lg font-bold">Baby Paradise</span>
    </div>
  );
};

export default NavLogo;
