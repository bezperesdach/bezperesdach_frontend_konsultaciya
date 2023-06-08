import Link from "next/link";
import React, { memo } from "react";

import styles from "./card.module.css";

type Props = {
  item: [string, string];
  hovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Card = ({ item, hovered, onMouseEnter, onMouseLeave }: Props) => {
  return (
    <Link
      className={`${styles.card} ${hovered ? styles.card_hovered : styles.card_small}`}
      href={`/order/${item[0]}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`${styles.label} ${hovered ? styles.label_hovered : ""}`} title={item[1]}>
        {item[1]}
      </span>
    </Link>
  );
};

export const CardMemoized = memo(Card);
