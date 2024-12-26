import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import DefaultLayout from "@/components/common/layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
import { Manrope, Oswald } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Baby Paradise",
  description: "A one stop shop for all your kids' needs.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <NextUIProvider>
          <DefaultLayout>{children}</DefaultLayout>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            style={{ fontSize: "14px" }}
            hideProgressBar={false}
            closeOnClick
            draggable
            pauseOnHover
          />
        </NextUIProvider>
      </body>
    </html>
  );
}
