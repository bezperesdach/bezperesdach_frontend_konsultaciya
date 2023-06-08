import React, { CSSProperties } from "react";

import styles from "./backdrop.module.css";

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  style?: CSSProperties;
};

export const Backdrop = ({ onClick, children, style }: Props) => {
  return (
    <div onClick={onClick} className={styles.backdrop} style={style}>
      {children}
    </div>
  );
};
