import React from "react";

import styles from "./whats-included.module.css";

const Card = ({ title, text }: { title: string; text: string | React.ReactNode }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

type Props = {
  title?: string;
  cards: {
    title: string;
    text: string | React.ReactNode;
  }[];
};

export const WhatsIncluded = ({ title, cards }: Props) => {
  return (
    <section className={styles.whats_included_container}>
      <div className={`${styles.whats_included} dynamic_container`}>
        <h2>{title ?? "Что входит в стоимость?"}</h2>
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <Card key={i} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
