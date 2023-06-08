import React from "react";
import Image from "next/image";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import { useAppDispatch } from "@/store/hooks";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";

import imageBackground from "@/public/assets/images/suggest-to-order/suggest-to-order-background.webp";

import styles from "./suggest-to-order.module.css";

export const SuggestToOrder = () => {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.container}>
      <div className={`${styles.inner} dynamic_container`}>
        <h2>Не нашли нужную услугу?</h2>
        <p>
          Нажмите на кнопку ниже, выберите консультацию и <br />
          укажите с какой работой вам нужна помощь
        </p>
        <ButtonOrderPopupLoadingWrapper
          className={styles.button}
          onClick={() => dispatch(setPopupShown(true))}
          borderRadius={12}
          outlined
          outlineColor="#273443"
          outlineBackgroundColor="#fff"
          outlineAnimatedColor="#ffff"
          outlineWidth={2}
          style={{ padding: "24px 36px !important", margin: "24px auto 56px !important" }}
        >
          Узнать цену
        </ButtonOrderPopupLoadingWrapper>
        <div className={styles.image_container}>
          <Image src={imageBackground} className={styles.image} alt="фон" />
        </div>
      </div>
    </section>
  );
};
