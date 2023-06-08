import React from "react";
import Image, { StaticImageData } from "next/image";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";
import { useAppDispatch } from "@/store/hooks";
import { resetStateToStart, setPopupShown } from "@/store/reducers/orderPopupReducer";
import { ProjectTypes } from "@/utils/popupOrder/utils";

import styles from "./prices-hero.module.css";

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  imgSrc: StaticImageData;
  imgAlt: string;
  fallbackImgSrc: StaticImageData;
  backgroundColor: string;
  breadCrumbsActiveItemName: string;
  projectType: ProjectTypes;
};

export const Hero = ({
  title,
  description,
  imgSrc,
  imgAlt,
  fallbackImgSrc,
  backgroundColor,
  breadCrumbsActiveItemName,
  projectType,
}: Props) => {
  const dispatch = useAppDispatch();

  const getPrice = () => {
    dispatch(resetStateToStart(projectType));
    dispatch(setPopupShown(true));
  };
  return (
    <section className={styles.hero} style={{ backgroundColor }}>
      <div className="dynamic_container">
        <div className={styles.hero_container}>
          <NextBreadCrumbs url="/prices" activeItem={breadCrumbsActiveItemName} />
          <div className={styles.container}>
            <div className={styles.text}>
              <div className={styles.text_main}>
                <h1>{title}</h1>
                <p className="font_h4">{description}</p>
                <ButtonOrderPopupLoadingWrapper onClick={getPrice}>Узнать стоимость</ButtonOrderPopupLoadingWrapper>
              </div>
            </div>
            <div className={styles.image_container}>
              <Image
                src={imgSrc}
                placeholder="blur"
                className={styles.image}
                alt={imgAlt}
                priority={true}
                sizes="(max-width:768px) 80vw, (max-width: 1024px) 50vw,
          33vw"
                onError={(e) => (e.currentTarget.src = fallbackImgSrc.src)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
