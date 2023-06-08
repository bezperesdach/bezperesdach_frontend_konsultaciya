import React from "react";

import styles from "./overlay.module.css";

type Props = {
  children: React.ReactNode;
  clickable?: boolean;
};

export const Overlay = ({ children, clickable = false }: Props) => {
  return (
    <div className={styles.overlay} style={clickable ? {} : { pointerEvents: "none" }}>
      {children}
    </div>
  );
};
