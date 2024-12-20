import Profile from "@/components/shop/user/Profile";
import SigninSignup from "@/components/auth/SigninSignup";
import Cart from "@/components/shop/user/Cart";
import EmptyCart from "@/components/shop/user/EmptyCart";
import NextDrawer from "@/components/ui/next-drawer";
import MenuComponent from "@/components/shop/MenuComponent";

const DrawerContent = ({
  type,
  isOpen,
  onOpenChange,
  onClose,
  user,
  isLoggedIn,
  handleLogout,
}) => {
  const getDrawerConfig = () => {
    switch (type) {
      case "user":
        return {
          title: isLoggedIn ? user?.name : "Guest",
          content: isLoggedIn ? (
            <Profile handleLogout={handleLogout} />
          ) : (
            <SigninSignup onClose={onClose} />
          ),
          size: "md",
        };

      case "cart":
        return {
          title: "Cart",
          content: isLoggedIn ? (
            <Cart onClose={onClose} isLoggedIn={isLoggedIn} />
          ) : (
            <EmptyCart className="h-full" />
          ),
          size: "lg",
        };

      case "menu":
        return {
          title: "Menu",
          content: <MenuComponent />,
          size: "lg",
        };
      default:
        return { title: "", content: null, size: "sm" };
    }
  };

  const { title, content, size } = getDrawerConfig();

  return (
    <NextDrawer
      title={title}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={size}
    >
      {content}
    </NextDrawer>
  );
};

export default DrawerContent;
