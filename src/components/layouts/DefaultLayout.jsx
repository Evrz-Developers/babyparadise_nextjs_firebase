import React from "react";
import ContentWrapper from "@/components/common/ContentWrapper";
import Footer from "@/components/layouts/Footer";
import MainNavbar from "@/components/layouts/MainNavbar";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const DefaultLayout = ({ children, footer = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNavbar title="SHOP" />
      <ContentWrapper className="flex-grow relative">{children}</ContentWrapper>
      <ScrollToTop />
      {footer && <Footer />}
    </div>
  );
};

export default DefaultLayout;