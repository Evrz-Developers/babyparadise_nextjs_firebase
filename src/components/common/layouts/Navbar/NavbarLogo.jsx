import Image from "next/image";
import React from "react";

const NavbarLogo = ({title}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo-temp.png" alt="Logo" width={120} height={30} />
      {/* <span className="font-bold text-inherit mr-2 text-color-primary-p40">{title}</span> */}
    </div>
  );
};

export default NavbarLogo;
