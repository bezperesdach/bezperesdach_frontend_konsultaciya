import React, { memo } from "react";

import styles from "./price-calculator.module.css";

type Props = {
  className?: string;
  option: 0 | 1 | 2;
  setOption: (number: 0 | 1 | 2) => void;
};

const options = [
  {
    id: 0,
    name: "до 65%",
    multiplier: 1,
  },
  {
    id: 1,
    name: "65%-85%",
    multiplier: 1,
  },
  {
    id: 2,
    name: "от 85%",
    multiplier: 1.2,
  },
];

export const Originality = ({ className, option, setOption }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p>Оригинальность</p>
      <div className={styles.controls_container}>
        {options.map((item, i) => (
          <button
            className={`${styles.item} ${i === option ? styles.active : styles.inactive}`}
            key={item.id}
            onClick={() => setOption(i as 0 | 1 | 2)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export const OriginalityMemo = memo(Originality);
