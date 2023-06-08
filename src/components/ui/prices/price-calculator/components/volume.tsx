import React, { memo } from "react";
import { default as classnames } from "classnames";

import styles from "./price-calculator.module.css";

type Props = {
  className?: string;
  name?: string;
  nameOfStep?: string;
  default?: number;
  min: number;
  max: number;
  step?: number;
  value: number;
  setValue: (value: number) => void;
};

export const Volume = ({ className, value, setValue, name = "Объем", nameOfStep, min, max, step = 1 }: Props) => {
  const changeValue = (type: "increase" | "decrease") => {
    if (type === "increase") {
      if (value < max - step) {
        setValue(value + step);
      }
    } else {
      if (value > min - step) {
        setValue(value - step);
      }
    }
  };

  return (
    <div className={classnames(styles.container, className, "no_select")}>
      <div className={styles.volume_container}>
        <label htmlFor={`${name}-slider`}>{name}</label>
        <p>{`${value}${nameOfStep ?? ""}`}</p>
      </div>

      <div className={styles.controls_container}>
        <button className={styles.unstyled_button} onClick={() => changeValue("decrease")}>
          -
        </button>
        <div className={classnames(styles.item, styles.inactive)} style={{ flex: "1" }}>
          <p>{min}</p>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            list="steplist"
            value={value}
            id={`${name}-slider`}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(+e.currentTarget.value)}
          />
          <p>{max}</p>
        </div>
        <button className={styles.unstyled_button} onClick={() => changeValue("increase")}>
          +
        </button>
      </div>
    </div>
  );
};

export const VolumeMemo = memo(Volume);
