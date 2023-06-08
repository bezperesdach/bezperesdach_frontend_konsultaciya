import Portal from "@/components/portal/portal";
import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";
import { useAppSelector } from "@/store/hooks";
import { useMemo } from "react";

const DynamicDesktopPopup = dynamic(() => import("./components/desktop/desktop-popup").then((mod) => mod.DesktopPopup));
const DynamicMobilePopup = dynamic(() => import("./components/mobile/mobile-popup").then((mod) => mod.MobilePopup));

export const CreateOrderPopup = () => {
  const media = useMediaQuery(`(max-width:1024px)`);
  const popupShown = useAppSelector((state) => state.orderPopup.popupShown);

  const component = useMemo(() => {
    if (popupShown) {
      if (media) {
        return (
          <Portal id="orderPopup">
            <DynamicMobilePopup shown={popupShown} />
          </Portal>
        );
      } else {
        return (
          <Portal id="orderPopup">
            <DynamicDesktopPopup shown={popupShown} />
          </Portal>
        );
      }
    }

    return null;
  }, [media, popupShown]);

  return component;
};
