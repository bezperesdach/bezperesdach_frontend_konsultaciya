import React from "react";

import styles from "./order-steps.module.css";

const Step = ({ number, children }: { number: number; children: string }) => {
  return (
    <div className={styles.step}>
      <p className={`${styles.number} font_h1`}>{number}</p>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

type Props = {
  steps?: string[];
};

export const OrderSteps = ({ steps }: Props) => {
  return (
    <section className={styles.order_steps}>
      <div className={`${styles.order_steps_container} dynamic_container`}>
        <h2>Этапы заказа</h2>
        <div className={styles.steps}>
          {steps ? (
            <>
              {steps.map((step, i) => (
                <Step key={i} number={i + 1}>
                  {step}
                </Step>
              ))}
            </>
          ) : (
            <>
              <Step number={1}>Вы оставляете заявку и указываете все необходимые данные</Step>
              <Step number={2}>Наш менеджер свяжется с вами, уточнит все детали и оформит заказ</Step>
              <Step number={3}>Мы подберем автора специально под вашу работу и рассчитаем оптимальную стоимость</Step>
              <Step number={4}>Вы вносите аванс в размере 30% от суммы заказа</Step>
              <Step number={5}>Автор приступит к выполнению работы, а мы проследим за её качеством</Step>
              <Step number={6}>
                Вы получите работу выполненную на отлично и точно в срок и сможете в любой момент обратиться за доработками
              </Step>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
