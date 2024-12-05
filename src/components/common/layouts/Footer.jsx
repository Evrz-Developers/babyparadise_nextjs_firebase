import {InstallAppManager} from "@/app/PushNotificationManager";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center w-full">
      <ContentWrapper>
        <div className="text-xs text-[#888]"> Evrz &#x2022; @2024 </div>
        <InstallAppManager />
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
