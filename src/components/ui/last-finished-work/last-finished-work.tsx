import { hoursToWordAndNumber } from "@/utils/utils";
import React from "react";

import styles from "./last-finished-work.module.css";

type Props = {
  works: {
    name: string;
    price: number;
    timeToCompleteInH: number;
  }[];
};

export const LastFinishedWork = ({ works }: Props) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.last_finished_work} dynamic_container`}>
        <h2>Последние выполненные работы</h2>
        <div className={styles.works_container}>
          {works.map((work, i) => (
            <div key={i} className={styles.card}>
              <p className="font_h4" style={{ fontWeight: 500 }}>
                {work.name}
              </p>
              <div className={styles.date_price_container}>
                <p className="font_h4">
                  <span className="font_h3" style={{ fontWeight: 500, color: "#1170EE" }}>
                    {work.price}
                  </span>{" "}
                  руб.
                </p>
                <p className="font_h4">
                  <span className="font_h3" style={{ fontWeight: 500, color: "#1170EE" }}>
                    {hoursToWordAndNumber(work.timeToCompleteInH).amount}
                  </span>{" "}
                  {hoursToWordAndNumber(work.timeToCompleteInH).word}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
