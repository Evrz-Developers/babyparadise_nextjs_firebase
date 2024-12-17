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

const SYMBOLS = {
  CURRENCY: "₹",
};

const PLACEHOLDER = {
  DATA: "--",
  DATE: "----/----/----",
  CURRENCY: "₹__",
};

const menuItems = [
  { label: "Login", href: "/login" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Help & Feedback", href: "/help" },
];

const LOGGED_IN_MENU_ITEMS = [
  { key: "profile", label: "Profile", href: "/profile" },
  { key: "wishlist", label: "Wishlist", href: "/wishlist" },
  { key: "cart", label: "Cart", href: "/cart" },
  { key: "about", label: "About", href: "/about" },
  { key: "help", label: "Help & Feedback", href: "/help" },
  { key: "orders", label: "Orders", href: "/orders" },
];

const CONSTANTS = {
  PLACEHOLDER,
  LOGGED_IN_MENU_ITEMS,
  SYMBOLS,
};

export { HTTP_METHODS, LOGGED_IN_MENU_ITEMS, SYMBOLS };
export default CONSTANTS;
