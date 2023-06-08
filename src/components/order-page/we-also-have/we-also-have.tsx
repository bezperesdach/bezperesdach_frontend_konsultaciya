import React, { useEffect, useState } from "react";
import useDeviceDetect from "@/hooks/use-device-detect/use-device-detect";
import { getFilteredProjectType } from "@/utils/order-form/form";
import { shuffleArray } from "@/utils/utils";
import { CardMemoized } from "./components/card/card";

import styles from "./we-also-have.module.css";

type Props = {
  filteredSlugs: [string, string][];
  activeRoute: string;
  previousRoute: string;
};

const generateRandomNumberWithoutRepeating = (min: number, max: number, prev: number) => {
  let randomNumber = prev;

  while (randomNumber === prev) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return randomNumber;
};

export const WeAlsoHave = ({ activeRoute, previousRoute, filteredSlugs }: Props) => {
  const { isMobile } = useDeviceDetect();
  const [filteredItems, setFilteredItems] = useState(filteredSlugs);

  const [animationPlaying, setAnimationPlaying] = useState(true);
  const [cardToHoverIndex, setCardToHoverIndex] = useState(-1);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

  useEffect(() => {
    const t = setInterval(
      () => setCardToHoverIndex((prev) => generateRandomNumberWithoutRepeating(0, filteredItems.length - 1, prev)),
      1500
    );

    return () => {
      clearInterval(t);
    };
  }, [filteredItems.length]);

  useEffect(() => {
    if (activeRoute !== previousRoute) {
      if (activeRoute) {
        const items = getFilteredProjectType([activeRoute]);
        shuffleArray(items);
        setFilteredItems(items);
      }
    }
  }, [activeRoute, previousRoute]);

  const hovered = (i: number) => {
    if (animationPlaying) {
      if (i === cardToHoverIndex) return true;
      else return false;
    } else {
      if (i === hoveredCardIndex) return true;
      else return false;
    }
  };

  const onMouseEnter = (i: number) => () => {
    setHoveredCardIndex(i);
  };

  const onMouseLeave = () => setHoveredCardIndex(-1);

  const stopAnimation = () => setAnimationPlaying(false);
  const startAnimation = () => setAnimationPlaying(true);

  return (
    <article className={`${styles.we_also_have} ${styles.colored_background}`}>
      <h2>А ЕЩЕ У НАС МОЖНО ЗАКАЗАТЬ</h2>
      <div
        className={styles.cards_container}
        onMouseEnter={!isMobile ? stopAnimation : undefined}
        onMouseLeave={!isMobile ? startAnimation : undefined}
      >
        {filteredItems.map((item, i) => (
          <CardMemoized
            item={item}
            key={item[0]}
            hovered={hovered(i)}
            onMouseEnter={!isMobile ? onMouseEnter(i) : undefined}
            onMouseLeave={!isMobile ? onMouseLeave : undefined}
          />
        ))}
      </div>
    </article>
  );
};
