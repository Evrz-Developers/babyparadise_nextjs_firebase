"use client";

import React from "react";
import AUTH from "@/app/firebase/auth";
import { toast } from "react-toastify";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import useLoggedUserStore from "@/store/loggedUserStore";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Login = ({ onClose, setActiveTab }) => {
  const setUser = useLoggedUserStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.currentTarget));
    const { email, password } = data;

    try {
      const result = await AUTH.login(email, password);
      if (result.error) {
        toast.error("Oops! " + result.error, {
          autoClose: 1500,
        });
      } else {
        const userWithLoginTime = {
          ...result.user,
          lastLoginAt: Date.now(),
        };
        setUser(userWithLoginTime);
        toast.success("Logged in successfully", {
          autoClose: 1500,
        });
        router.push("/");
        onClose();
      }
    } catch (error) {
      toast.error("Login failed", {
        autoClose: 1500,
      });
    }
  };

  // const handleClick = () => {
  //   const activeElement = document.activeElement;
  //   if (
  //     activeElement &&
  //     (activeElement.tagName === "INPUT" || activeElement.tagName === "BUTTON")
  //   ) {
  //     activeElement.blur();
  //   }
  // };

  return (
    <ContentWrapper className="h-90 mt-1 sm:mt-4">
      <div className="w-full max-w-[400px]g h-full rounded-xl md:shadow-md p-4 m-auto border">
        <h3 className="text-xl mb-4 text-center"> Welcome back! </h3>
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            isRequired
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            isRequired
          />
          <Button
            type="submit"
            variant="ghost"
            color="primary"
            className="w-full"
            // onPress={handleClick}
          >
            Login
          </Button>
        </Form>
        <div className="mt-2 ml-1">
          <button
            className="text-color-primary-p50 hover:text-color-primary-p40 text-sm"
            onClick={() => setActiveTab("register")}
          >
            👶New here? Sign up!
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Login;
