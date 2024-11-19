import { NextUIProvider } from "@nextui-org/react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Home from "@/components/shop/Home";

export default function HomePage() {
  return (
    <NextUIProvider>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </NextUIProvider>
  );
}
