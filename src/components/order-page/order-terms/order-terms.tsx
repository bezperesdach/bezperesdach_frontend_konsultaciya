import React, { useEffect, useState } from "react";
import { getOrderServiceTerms } from "@/utils/order-form/form";
import { Card } from "./components/card/card";

import styles from "./order-terms.module.css";

type Props = {
  orderServiceTerms: OrderServiceTerms | null;
  activeRoute: string;
  previousRoute: string;
};

export const OrderTerms = ({ orderServiceTerms, activeRoute, previousRoute }: Props) => {
  const [data, setData] = useState(orderServiceTerms ? orderServiceTerms : null);

  useEffect(() => {
    if (activeRoute !== previousRoute) {
      if (activeRoute) {
        const orderServiceTermsResult = getOrderServiceTerms(activeRoute);
        setData(orderServiceTermsResult ? orderServiceTermsResult.terms : null);
      }
    }
  }, [activeRoute, previousRoute]);

  return (
    <article className={`${styles.order_terms} ${styles.colored_background}`}>
      {data && (
        <>
          <Card title="Стоимость" subtitle={data.pricePrefix ? `${data.pricePrefix} ${data.price} руб.` : data.price + " руб."}>
            {data.priceDescription}
          </Card>
          <Card title="Время выполнения" subtitle={data.timeFrame}>
            Это рекомендуемое время выполнения. Работа может быть выполнена в более краткие сроки
          </Card>
          <Card title="Предоплата" subtitle={"35%"}>
            Предоплата гарантирует выполнение всех обязательств со стороны автора и заказчика. После оплаты начнется выполнение работы
          </Card>
        </>
      )}
      <Card title="Гарантия" subtitle={"от 30 дней"}>
        Будем с вами на связи 24/7 до самой защиты. При необходимости, можем заключить договор об оказании услуг
      </Card>
      <Card title="Оригинальность" subtitle={"до 97 %"}>
        {`В блоке "Дополнительная информация" можно выбрать необходимый процент оригинальности и тип проверки`}
      </Card>
      <Card title="Доработки" subtitle={"Бесплатно"}>
        Доработки вносятся бесплатно. Авторы исправят все замечания научного руководителя
      </Card>
    </article>
  );
};
