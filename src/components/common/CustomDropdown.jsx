import React from "react";

/*

INFO: Add a way to Open and close the dropdown based on mouse events and useState.

EXAMPLE:
import { LOGGED_IN_MENU_ITEMS } from "@/utilities/constants";
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

<Button
variant="light"
onPress={onOpen}
onMouseEnter={() => setIsDropdownOpen(true)}
> 

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const Component = item.href ? Link : "button";
      return (
        <Component key={item.label} href={item?.href} onClick={item?.onClick}>
          {item.label}
        </Component>
      );
    });
  };

<CustomDropdown
            isOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          >
            <div className="flex flex-col gap-2">
              {renderMenuItems(LOGGED_IN_MENU_ITEMS)}
              <button onClick={handleLogout}>Logout</button>
            </div>
          </CustomDropdown>
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
