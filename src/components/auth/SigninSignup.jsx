import React, { useState } from "react";
import AUTH from "@/app/firebase/auth";
import { toast } from "react-toastify";
import { Form } from "@nextui-org/form";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import FUNCTIONS from "@/utilities/functions";
import { FcGoogle } from "react-icons/fc";
import BlurFade from "@/components/ui/blur-fade";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function SigninSignup({ onClose }) {
  const [selected, setSelected] = React.useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useLoggedUserStore((state) => state.setUser);
  const router = useRouter();

  const handleLoginWithEmail = async (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.currentTarget));
    const { email, password } = data;
    try {
      const result = await AUTH.LOGIN_WITH_EMAIL_PASSWORD(email, password);
      FUNCTIONS.AUTH.HANDLE_LOGIN_RESULT(result, onClose, setUser, router);
    } catch (error) {
      toast.error("Login failed", error);
    }
  };

  const handleRegisterWithEmail = async (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.currentTarget));
    const { name, email, password } = data;
    console.log(name, email, password);
    try {
      const result = await AUTH.REGISTER_WITH_EMAIL_PASSWORD(
        name,
        email,
        password
      );
      FUNCTIONS.AUTH.HANDLE_REGISTER_RESULT(result, onClose, setUser, router);
    } catch (error) {
      toast.error("Registration failed", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await AUTH.SIGNIN_WITH_GOOGLE();
      FUNCTIONS.AUTH.HANDLE_LOGIN_RESULT(result, onClose, setUser, router);
    } catch (error) {
      toast.error("Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px]s h-[400px]">
        <CardBody className="overflow-hidden">
          {isLoading ? (
            <LoadingSpinner
              initialMessage="Connecting to Google..."
              delayedMessage="Hold on..."
              delay={5000}
            />
          ) : (
            <Tabs
              fullWidth
              aria-label="Tabs form"
              selectedKey={selected}
              variant="light"
              radius="lg"
              size="md"
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <BlurFade key="login-form">
                  <Form
                    className="flex flex-col gap-4"
                    onSubmit={handleLoginWithEmail}
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
                      placeholder="Enter your password"
                      isRequired
                    />
                    <p className="text-center text-small">
                      Need to create an account?{" "}
                      <Link
                        size="sm"
                        onPress={() => setSelected("sign-up")}
                        className="cursor-pointer"
                      >
                        Sign up
                      </Link>
                    </p>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        color="primary"
                        variant="shadow"
                        fullWidth
                        className="text-neutral-900 bg-color-primary-p80/15 hover:bg-color-primary-p60/15"
                      >
                        Login
                      </Button>
                      <div className="flex items-center gap-2">
                        <div className="h-[1px] flex-1 bg-gray-200"></div>
                        <p className="text-small text-gray-500">|</p>
                        <div className="h-[1px] flex-1 bg-gray-200"></div>
                      </div>
                      <Button
                        isIconOnly
                        color="primary"
                        variant="shadow"
                        fullWidth
                        onPress={handleGoogleLogin}
                        className="text-neutral-900 bg-color-primary-p80/15 hover:bg-color-primary-p60/15"
                      >
                        <FcGoogle className="text-xl" />
                      </Button>
                    </div>
                  </Form>
                </BlurFade>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <BlurFade key="signup-form">
                  <Form
                    className="flex flex-col gap-4 h-[300px]"
                    onSubmit={handleRegisterWithEmail}
                  >
                    <Input
                      type="text"
                      name="name"
                      label="Name"
                      placeholder="Enter your name"
                      isRequired
                    />
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
                      placeholder="Enter your password"
                      isRequired
                    />
                    <p className="text-center text-small">
                      Already have an account?{" "}
                      <Link
                        size="sm"
                        onPress={() => setSelected("login")}
                        className="cursor-pointer"
                      >
                        Login
                      </Link>
                    </p>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        color="primary"
                        variant="shadow"
                        fullWidth
                        className="text-neutral-900 bg-color-primary-p80/15 hover:bg-color-primary-p60/15"
                      >
                        Sign up
                      </Button>
                      <div className="flex items-center gap-2">
                        <div className="h-[1px] flex-1 bg-gray-200"></div>
                        <p className="text-small text-gray-500">|</p>
                        <div className="h-[1px] flex-1 bg-gray-200"></div>
                      </div>
                      <Button
                        isIconOnly
                        color="primary"
                        variant="shadow"
                        fullWidth
                        onPress={handleGoogleLogin}
                        className="text-neutral-900 bg-color-primary-p80/15 hover:bg-color-primary-p60/15"
                      >
                        <FcGoogle className="text-xl" />
                      </Button>
                    </div>
                  </Form>
                </BlurFade>
              </Tab>
            </Tabs>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
