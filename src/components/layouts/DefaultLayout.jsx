import React from "react";
import Footer from "@/components/layouts/Footer";
import MainNavbar from "@/components/layouts/MainNavbar";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import Navbar from "@/components/layouts/Navbar/Navbar";

const DefaultLayout = ({ children, footer = true }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <Navbar title="SHOP" />
      {/* <MainNavbar title="SHOP" /> */}
      {/* Main Content Wrapper */}
      <main className="flex-grow">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          {children}
        </div>
      </main>
      {/* Scroll to Top */}
      <ScrollToTop />
      {/* Footer */}
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;