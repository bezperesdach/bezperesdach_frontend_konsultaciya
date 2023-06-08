import React, { memo } from "react";

import styles from "./price-calculator.module.css";

type Props = {
  className?: string;
  option: 0 | 1;
  setOption: (option: 0 | 1) => void;
};

const options = [
  {
    id: 0,
    name: "Обычный",
    multiplier: 1,
  },
  {
    id: 1,
    name: "ВУЗ",
    multiplier: 1,
  },
];

export const AntiplagiatType = ({ className, option, setOption }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p>Антиплагиат</p>
      <div className={styles.controls_container}>
        {options.map((item, i) => (
          <button
            className={`${styles.item} ${i === option ? styles.active : styles.inactive}`}
            key={item.id}
            onClick={() => (i === 0 ? setOption(0) : setOption(1))}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export const AntiplagiatTypeMemo = memo(AntiplagiatType);
