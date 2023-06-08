import React from "react";

import styles from "./how-payment-works.module.css";

export const HowPaymentWorks = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.how_payment_works} dynamic_container`}>
        <h2>Варианты оплаты</h2>
        <p className="font_h4">На твой выбор несколько удобных и безопасных вариантов оплаты:</p>
        <div className={styles.card}>
          <div className={styles.title}>
            <span className={styles.number}>1</span>
            <h3 className="font_h4">Предоплата 35% и оплата остатка на последнем этапе</h3>
          </div>

          <p className="font_h4">
            Вы делаете предоплату <span className={styles.blue_bold}>35%</span> от стоимости работы. После того, как мы закончим работу
            и вы проверите ее качество, вы оплачиваете оставшуюся часть.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <span className={styles.number}>2</span>
            <h3 className="font_h4">Предоплата 35% и оплата по главам</h3>
          </div>

          <p className="font_h4">
            Вы делаете <span className={styles.blue_bold}>предоплату 35%</span> от стоимости работы. Мы приступаем к выполнению работы,
            после чего высылаем вам первую часть, вы её оплачиваете, мы продолжаем работу и так вплоть до успешной сдачи
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            <span className={styles.number}>3</span>
            <h3 className="font_h4">Полная предоплата</h3>
          </div>

          <p className="font_h4">
            Вы вносите <span className={styles.blue_bold}>100% предоплату</span> за работу сразу и получаете дополнительную{" "}
            <span className={styles.blue_bold}>скидку 5%</span> от стоимости работы.
          </p>
        </div>
      </div>
    </section>
  );
};
