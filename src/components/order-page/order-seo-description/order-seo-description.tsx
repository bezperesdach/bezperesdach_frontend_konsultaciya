import React, { useEffect, useState } from "react";
import { getOrderArticle } from "@/api/api";
import { getOrderServiceTerms } from "@/utils/order-form/form";
import styles from "./order-seo-description.module.css";

type Props = {
  orderSeoArticle: OrderSeoArticle | null;
  orderServiceTerms: OrderServiceTerms | null;
  activeRoute: string;
  previousRoute: string;
};

export const OrderSeoDescription = ({ activeRoute, previousRoute, orderSeoArticle, orderServiceTerms }: Props) => {
  const [data, setData] = useState(orderSeoArticle ? orderSeoArticle.article : "");
  const [orderServiceTermsData, setOrderServiceTermsData] = useState(orderServiceTerms ?? null);

  useEffect(() => {
    const getData = async () => {
      if (orderSeoArticle === null || activeRoute !== previousRoute) {
        if (activeRoute) {
          const res = await getOrderArticle(activeRoute);
          if (!res.errors && res.data) {
            setData(res.data.article);
          } else {
            setData("");
          }

          const orderServiceTermsResult = getOrderServiceTerms(activeRoute);

          if (orderServiceTermsResult) {
            setOrderServiceTermsData(orderServiceTermsResult.terms);
          } else {
            setOrderServiceTermsData(null);
          }
        }
      }
    };

    getData();
  }, [orderSeoArticle, activeRoute, previousRoute]);

  if (data) {
    return (
      <article className={styles.description}>
        {orderServiceTermsData && (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Стоимость</th>
                <td>{`${orderServiceTermsData.pricePrefix} ${orderServiceTermsData.price} руб.`}</td>
              </tr>
              <tr>
                <th>Срок выполнения</th>
                <td>{orderServiceTermsData.timeFrame}</td>
              </tr>
              <tr>
                <th>Гарантия</th>
                <td>от 30 дней</td>
              </tr>
              <tr>
                <th>Доработки</th>
                <td>Бесплатно</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data }} />
      </article>
    );
  }

  return null;
};
