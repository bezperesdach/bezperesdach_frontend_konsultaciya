import React, { useEffect, useRef, useState } from "react";
import { RatingStars } from "@/components/rating-stars/rating-stars";
import { getProjectTypeLabel } from "@/utils/popupOrder/utils";
import Image from "next/image";
import f1 from "@/public/assets/images/avatars/f1.webp";
import f2 from "@/public/assets/images/avatars/f2.webp";
import f3 from "@/public/assets/images/avatars/f3.webp";
import f4 from "@/public/assets/images/avatars/f4.webp";
import f5 from "@/public/assets/images/avatars/f5.webp";
import m1 from "@/public/assets/images/avatars/m1.webp";
import m2 from "@/public/assets/images/avatars/m2.webp";
import m3 from "@/public/assets/images/avatars/m3.webp";
import m4 from "@/public/assets/images/avatars/m4.webp";
import m5 from "@/public/assets/images/avatars/m5.webp";
import a from "@/public/assets/images/avatars/a.webp";

import styles from "./review-card.module.css";

interface Props extends Omit<Review, "id"> {
  className?: string;
}

const getAvatar = (name: string) => {
  switch (name) {
    case "f1":
      return f1;
    case "f2":
      return f2;
    case "f3":
      return f3;
    case "f4":
      return f4;
    case "f5":
      return f5;
    case "m1":
      return m1;
    case "m2":
      return m2;
    case "m3":
      return m3;
    case "m4":
      return m4;
    case "m5":
      return m5;
    case "a":
      return a;
  }

  return m1;
};

export const ReviewCard = ({ name, text, rating, avatar, projectType, anonymous }: Props) => {
  const [hasOverflowingChildren, setHasOverflowingChildren] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      textRef.current &&
      (textRef.current.offsetHeight < textRef.current.scrollHeight || textRef.current.offsetWidth < textRef.current.scrollWidth)
    ) {
      setHasOverflowingChildren(true);
    }
  }, []);

  const seeMoreClick = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className={styles.review} style={seeMore ? { height: "auto" } : undefined}>
      <div className={styles.avatar_name_rating_container}>
        <Image
          src={getAvatar(anonymous ? "a" : avatar)}
          className={`${styles.image} no_select image_no_pointer_events`}
          alt="avatar image"
          width={64}
          height={64}
          placeholder="blur"
          onError={(e) => (e.currentTarget.src = `/assets/images/avatars/${anonymous ? "a" : avatar}.png`)}
        />
        <div className={styles.name_rating}>
          <p className={styles.name}>{name}</p>
          <RatingStars rating={rating} />
        </div>
      </div>

      <div className={styles.review_body}>
        <p style={{ color: "#1170EE", fontWeight: 500 }}>{getProjectTypeLabel(projectType)}</p>
        <p ref={textRef} className={styles.text} style={seeMore ? { height: "auto" } : undefined}>
          {text}
        </p>
        {hasOverflowingChildren && (
          <button className={styles.enlarge} onClick={seeMoreClick}>
            {seeMore ? "Свернуть" : "Развернуть"}
          </button>
        )}
      </div>
    </div>
  );
};
