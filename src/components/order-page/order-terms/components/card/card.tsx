import React from "react";

import styles from "./card.module.css";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const Card = ({ title, subtitle: description, children }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p>{children}</p>
    </div>
  );
};
