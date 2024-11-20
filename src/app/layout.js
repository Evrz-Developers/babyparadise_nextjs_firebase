import "./globals.css";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import MainNavbar from "@/components/layouts/MainNavbar";
import Footer from "@/components/layouts/Footer";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Baby Paradise",
  description: "A one stop shop for all your kids' needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="baby Paradise" />
        <meta property="og:description" content="A one stop shop for all your kids' needs." />
        <meta property="og:image" content="https://babyparadisestore.netlify.app/images/logo.jpg" />
        <meta property="og:url" content="Your_Page_URL" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </NextUIProvider>
      </body>
    </html>
  );
}
