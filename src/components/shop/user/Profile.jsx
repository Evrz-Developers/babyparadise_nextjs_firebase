import React from "react";
import { Button } from "@nextui-org/button";

const Profile = ({ handleLogout }) => {
  return (
    <Button
      color="danger"
      variant="ghost"
      onPress={handleLogout}
      className="w-full"
    >
      Logout
    </Button>
  );
};

export default Profile;
