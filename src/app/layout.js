import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import DefaultLayout from "@/components/common/layouts/DefaultLayout";
import AdminLayout from "@/app/admin/layout";
import { ToastContainer } from "react-toastify";
import { Manrope, Oswald } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
// import { getSession } from "next-auth/react";

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
  // const session = await getSession();
  // const isAdmin = session?.user?.role === "admin";

  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <NextUIProvider>
          {/* {isAdmin ? (
            <AdminLayout>{children}</AdminLayout>
          ) : ( */}
          <DefaultLayout>{children}</DefaultLayout>
          {/* )} */}
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
