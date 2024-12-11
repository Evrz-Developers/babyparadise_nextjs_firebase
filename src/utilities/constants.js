const SET_VALUE_CONFIG = {
  shouldValidate: true,
};

const HTTP_METHODS = {
  HEAD: "HEAD",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  POST: "POST",
  DELETE: "DELETE",
};

const PLACEHOLDER = {
  DATA: "--",
  DATE: "----/----/----",
  MONEY: "₹__",
};

const MENU_ITEMS = [
    {
        name: "Login",
        href: "/login",
    },
    {
        name: "Register",
        href: "/register",
    },
    {
        name: "Profile",
        href: "/profile",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
    {
        name: "Logout",
        // onClick: handleLogout,
    },
];

const CONSTANTS = {
  PLACEHOLDER,
};

export { HTTP_METHODS };
export default CONSTANTS;
