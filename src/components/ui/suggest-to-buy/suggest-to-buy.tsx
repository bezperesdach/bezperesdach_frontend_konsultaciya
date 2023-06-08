import React from "react";
import Image from "next/image";
import { ProjectTypes } from "@/utils/popupOrder/utils";

import SuggestToBuyImage from "@/public/assets/images/suggest-to-buy/image.webp";
import FallbackSuggestToBuyImage from "@/public/assets/images/suggest-to-buy/fallback-image.png";

import styles from "./suggest-to-buy.module.css";
import { useAppDispatch } from "@/store/hooks";
import { setPopupShown, setProjectType } from "@/store/reducers/orderPopupReducer";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";

type Props = {
  title: string;
  projectType?: ProjectTypes;
  buttonText?: string;
};

export const SuggestToBuy = ({ title, projectType, buttonText }: Props) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (projectType) {
      dispatch(setProjectType(projectType));
    }

    dispatch(setPopupShown(true));
  };

  return (
    <div className={styles.suggest_to_buy_container}>
      <div className="dynamic_container">
        <div className={styles.suggest_to_buy}>
          <div className={styles.text_container}>
            <p className="font_h1" style={{ fontWeight: "700" }}>
              {title}
            </p>
            <ButtonOrderPopupLoadingWrapper
              className={styles.get_price}
              backgroundColor="#FFFFFF"
              backgroundAnimatedColor="#D9D9D9"
              color="#090B0C"
              onClick={handleClick}
            >
              {buttonText ?? "УЗНАТЬ"}
            </ButtonOrderPopupLoadingWrapper>
          </div>
          <div className={styles.image_container}>
            <picture>
              <source
                media="(max-width: 1024px)"
                sizes="1px"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
              />
              <Image
                src={SuggestToBuyImage}
                placeholder="blur"
                className={styles.image}
                alt="Узнать цену работы"
                sizes="33vw"
                onError={(e) => (e.currentTarget.src = FallbackSuggestToBuyImage.src)}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
