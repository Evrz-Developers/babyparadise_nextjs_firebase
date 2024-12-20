import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import useLoggedUserStore from "@/store/useLoggedUserStore";

const Profile = ({ handleLogout }) => {
  const { user, isLoggedIn, logout } = useLoggedUserStore();

  const formatDateTime = (timestamp) => {
    if (!timestamp) return "Never";

    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <Card>
      <CardBody className="py-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={user?.imageURL || user?.photoURL}
              alt="Profile picture"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold">{user?.name || "User Name"}</h2>
            <p className="text-gray-500">
              {user?.email || "email@example.com"}
            </p>
            <span className="inline-block px-3 py-1 mt-2 text-sm bg-primary-100 text-primary-700 rounded-full">
              {user?.role || "User"}
            </span>
          </div>

          <div className="w-full mt-4 space-y-2s flex flex-col justify-center items-center">
            <div className="flex justify-between p-2 bg-gray-50 rounded-md">
              <span className=" text-gray-600">
                Last login:{" "}
                <span className="font-bold">
                  {formatDateTime(user?.lastLoginAt)}
                </span>
              </span>
            </div>

            <Button
              color="danger"
              variant="ghost"
              onPress={handleLogout}
              className="w-2/3 mt-4"
            >
              Logout
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Profile;
