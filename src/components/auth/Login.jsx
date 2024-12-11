"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import AUTH from "@/app/firebase/auth";
import useLoggedUserStore from "@/store/loggedUserStore";

const Login = ({ onClose }) => {
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
    <ContentWrapper className="h-90 mt-4 sm:mt-24">
      <div className="w-full max-w-[400px]g h-full rounded-xl md:shadow-md p-4 m-auto border sm:border-none">
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
        <div className="mt-2">
          <Link href={"/register"} className="text-link text-sm">
            Create an account
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Login;
