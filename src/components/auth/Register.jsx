"use client";

import React from "react";
import AUTH from "@/app/firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Register = ({ setActiveTab }) => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");
    console.log("first", first_name);
    console.log("last", last_name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirm_password", confirm_password);
    if (password !== confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const result = await AUTH.register(email, password);
      if (result.error) {
        console.error("Error registering:", result.error);
        toast.error("Registration failed");
      } else {
        // Update user profile with name and role
        await AUTH.updateProfile(result.user, {
          displayName: `${first_name} ${last_name}`,
          role: "user",
        });
        toast.success("Registered successfully");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await AUTH.signInWithGoogle();
      if (result.error) {
        console.error("Error signing in with Google:", result.error);
        toast.error("Google sign-in failed");
      } else {
        // Set role for Google sign-in user
        await AUTH.updateProfile(result.user, { role: "user" });
        toast.success("Signed in with Google successfully");
        router.push("/");
      }
    } catch (error) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <ContentWrapper className="h-90 mt-1 sm:mt-4">
      <div className="w-full max-w-[400px]g h-full rounded-2xl md:shadow-md p-4 m-auto border">
        <h3 className="text-xl mb-4 text-center"> Create account </h3>

        <Form onSubmit={handleSubmit}>
          <Input
            name="first_name"
            label="First Name"
            placeholder="Enter your first name"
            isRequired
          />
          <Input
            name="last_name"
            label="Last Name"
            placeholder="Enter your last name"
            isRequired
          />
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            isRequired
          />
          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            isRequired
          />
          <Input
            name="confirm_password"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            isRequired
          />
          <Button
            type="submit"
            variant="ghost"
            color="primary"
            className="mt-6 w-full"
          >
            Register
          </Button>
        </Form>

        <Divider className="my-4" />

        <Button
          onPress={handleGoogleSignIn}
          color="secondary"
          className="w-full"
        >
          Sign in with Google
        </Button>

        <div className="mt-3 text-sm">
          <button
            className="text-color-primary-p50 hover:text-color-primary-p40 text-sm"
            onClick={() => setActiveTab("login")}
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Register;
