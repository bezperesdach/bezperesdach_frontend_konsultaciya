import React from "react";
import Image from "next/image";

import SaveMoneySafeImg from "@/public/assets/images/pages/home/guarantees/save-money-icon.webp";
import FallbackSaveMoneySafeImg from "@/public/assets/images/pages/home/guarantees/save-money-icon.png";

import styles from "./guarantees.module.css";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className={styles.guarantees_card}>
      <div className={styles.guarantees_card_container}>
        <div className={styles.title_container}>
          <div className={styles.icon_container}>
            <Image
              className={styles.image}
              src={SaveMoneySafeImg}
              alt="Иконка гарантии"
              onError={(e) => (e.currentTarget.src = FallbackSaveMoneySafeImg.src)}
            />
          </div>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

type Props = {
  cards?: {
    title: string;
    description: string;
  }[];
};

export const Guarantees = ({ cards }: Props) => {
  return (
    <section className={styles.guarantees}>
      <div className={`${styles.guarantees_container} dynamic_container`}>
        <h2>Гарантии</h2>
        <div className={styles.guarantees_cards}>
          {cards ? (
            cards.map((card) => <Card key={card.title} title={card.title} description={card.description} />)
          ) : (
            <>
              <Card
                title="Уникальность"
                description="Обеспечим оригинальную и уникальную работу. Проверяем на плагиат с использованием современных инструментов"
              />
              <Card
                title="Сроки"
                description="Выполним заказ в установленные сроки без задержек, благодаря оперативной работе команды профессионалов"
              />
              <Card
                title="Анонимность"
                description="Строго соблюдаем принципы конфиденциальности, обеспечивая сохранность личных данных и деталей заказа"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
