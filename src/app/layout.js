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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="baby Paradise" />
        <meta
          property="og:description"
          content="A one stop shop for all your kids' needs."
        />
        <meta
          property="og:image"
          content="https://babyparadisestore.netlify.app/images/logo.jpg"
        />
        <meta property="og:url" content="Your_Page_URL" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />

        {/* apple splash screen images  */}
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <>
          <NextUIProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </NextUIProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            draggable
            pauseOnHover
          />
        </>
      </body>
    </html>
  );
}
