import Image from "next/image";
import React from "react";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <span className="text-lg font-bold">Baby Paradise</span>
    </div>
  );
};

export default NavLogo;
