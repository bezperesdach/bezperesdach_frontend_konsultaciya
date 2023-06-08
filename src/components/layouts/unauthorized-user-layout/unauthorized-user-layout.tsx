import dynamic from "next/dynamic";
import { Overlay } from "@/components/portal/components/overlay/overlay";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "@/utils/recaptcha";

const DynamicNavbar = dynamic(() => import("@/components/navbar/navbar").then((mod) => mod.Navbar));
const DynamicFooter = dynamic(() => import("@/components/footer/footer").then((mod) => mod.Footer));
const DynamicScrollTopButton = dynamic(() =>
  import("@/components/scroll-to-top-button/scroll-to-top-button").then((mod) => mod.ScrollTopButton)
);
const DynamicHelpButton = dynamic(() => import("@/components/help-button/help-button").then((mod) => mod.HelpButton));
const DynamicCreateOrderPopup = dynamic(
  () => import("@/components/create-order-popup/create-order-popup").then((mod) => mod.CreateOrderPopup),
  { ssr: false }
);
const DynamicPricesSidebarPopup = dynamic(() => import("@/components/prices-sidebar-popup/prices-sidebar-popup"), { ssr: false });

import styles from "./unauthorized-user-layout.module.css";

type Props = {
  children: React.ReactNode;
  navbarProps?: {
    logoHref: string;
    noMenuItems: boolean;
  };
  footerProps?: {
    hideNavigation: boolean;
  };
};

export const UnauthorizedUserLayout = ({ children, navbarProps, footerProps }: Props) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: "head", // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}
    >
      <DynamicNavbar {...navbarProps} />

      <main className={styles.main}>{children}</main>

      <DynamicFooter {...footerProps} />

      <Overlay>
        <DynamicScrollTopButton />
        <DynamicHelpButton />
      </Overlay>

      <DynamicCreateOrderPopup />
      <DynamicPricesSidebarPopup />
    </GoogleReCaptchaProvider>
  );
};
