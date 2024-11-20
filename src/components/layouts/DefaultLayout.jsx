import React from "react";
import ContentWrapper from "@/components/common/ContentWrapper";
import Footer from "@/components/layouts/Footer";
import MainNavbar from "@/components/layouts/MainNavbar";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const DefaultLayout = ({ children, footer = true }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <MainNavbar title="SHOP" />
      <ContentWrapper className="flex-grow">{children}</ContentWrapper>
      <ScrollToTop />
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;