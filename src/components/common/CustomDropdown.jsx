import React from "react";

/*

INFO: Add a way to Open and close the dropdown based on mouse events and useState.

EXAMPLE:
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
<Button
variant="light"
onPress={onOpen}
onMouseEnter={() => setIsDropdownOpen(true)}
> 

*/

const CustomDropdown = ({ isOpen, children, setIsDropdownOpen }) => {
  return (
    <div
      aria-label="User Actions"
      className={`bg-white absolute right-0 w-40 p-2 rounded-xl shadow-md ${
        isOpen ? "block" : "hidden"
      }`}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {children}
    </div>
  );
};

export default CustomDropdown;
