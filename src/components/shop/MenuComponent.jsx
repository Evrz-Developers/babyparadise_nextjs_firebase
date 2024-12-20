import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { MdOpenInBrowser } from "react-icons/md";
import useDrawerStore from "@/store/useDrawerStore";

const MenuComponent = () => {
  const router = useRouter();
  const { onMenuClose } = useDrawerStore();

  const handleNavigate = (path) => {
    onMenuClose();
    router.push(path);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Tabs
        aria-label="Menu tabs"
        color="primary"
        variant="ghost"
        size="lg"
        radius="lg"
        className="max-w-full w-full justify-center text-color-purple-p40 rounded-lg"
      >
        <Tab key="categories" title="Categories">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              {/* Add your categories content here */}
              <div className="flex items-center gap-1">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => handleNavigate("/categories")}
                  className="text-primary"
                >
                  <MdOpenInBrowser size={24} />
                </Button>
                <h2 className="text-lg font-semibold">Product Categories</h2>
              </div>
            </div>
            <div className="flex flex-col px-2">
              <p>Categories content coming soon...</p>
            </div>
          </Card>
        </Tab>
        <Tab key="wishlist" title="Wishlist">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Wishlist</h2>
            {/* Add your categories content here */}
            <p>Wishlist content coming soon...</p>
          </Card>
        </Tab>

        <Tab key="orders" title="Orders">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Your Orders</h2>
            {/* Add your orders content here */}
            <p>Orders content coming soon...</p>
          </Card>
        </Tab>

        <Tab key="about" title="About">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            {/* Add your about content here */}
            <p>About content coming soon...</p>
          </Card>
        </Tab>

        <Tab key="help" title="Help">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Help Center</h2>
            {/* Add your help content here */}
            <p>Help content coming soon...</p>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MenuComponent;
