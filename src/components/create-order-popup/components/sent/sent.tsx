import React from "react";
import { Button } from "@/components/button/button";

import styles from "./sent.module.css";

type Props = {
  orderId: string;
  onClick: () => void;
};
export const Sent = ({ onClick, orderId }: Props) => {
  return (
    <div className={styles.container}>
      <p className="font_h2" style={{ fontWeight: "600" }}>
        Успех!
      </p>
      <p className="font_h3" style={{ paddingTop: "48px" }}>
        Заявка <span style={{ fontWeight: "600", color: "#1070EE" }}>#{orderId}</span>
      </p>
      <p className="font_h3">успешно создана</p>

      <p className="font_h4" style={{ paddingTop: "48px" }}>
        Скоро мы свяжемся с вами и предложим вам <span style={{ fontWeight: "600", color: "#1070EE" }}>наилучшую</span> стоимость
        выполнения вашей работы
      </p>

      <Button style={{ marginTop: "48px" }} onClick={onClick}>
        Закрыть
      </Button>
    </div>
  );
};
