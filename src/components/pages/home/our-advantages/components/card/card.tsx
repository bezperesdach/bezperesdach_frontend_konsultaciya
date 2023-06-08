import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import VideoComponent from "@/components/video-component/video-component";

import styles from "./card.module.css";

type Props = {
  title: string;
  text: string;
  img: string | StaticImageData;
  fallbackImg: StaticImageData;
  alt: string;
  videoMov?: string;
  videoWebm?: string;
};

export const Card = ({ title, text, img, fallbackImg, alt, videoMov, videoWebm }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <div className={styles.icon_container}>
          <Image
            src={img}
            placeholder="blur"
            className={`${styles.image} no_select image_no_pointer_events`}
            alt={alt}
            style={{ visibility: !isVisible ? "visible" : "hidden" }}
            onError={(e) => (e.currentTarget.src = fallbackImg.src)}
          />

          {videoMov && videoWebm && (
            <VideoComponent
              className={styles.animated_image}
              videoMov={videoMov}
              videoWebm={videoWebm}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          )}
        </div>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
