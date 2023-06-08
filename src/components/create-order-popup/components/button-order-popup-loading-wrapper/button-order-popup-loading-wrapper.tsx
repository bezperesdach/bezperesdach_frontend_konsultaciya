import { Button, ButtonProps } from "@/components/button/button";
import { useAppSelector } from "@/store/hooks";
import React from "react";

export const ButtonOrderPopupLoadingWrapper = (props: ButtonProps) => {
  const popupLoading = useAppSelector((state) => state.orderPopup.popupLoading);
  return <Button {...props} style={{ minWidth: "48px !important", ...props.style }} loading={popupLoading} />;
};
