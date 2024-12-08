import Link from "next/link";

const LinkAsButton = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`text-neutral-600 hover:text-white  py-2 px-4 rounded bg-color-primary-p70 hover:bg-color-primary-p60 cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkAsButton;
