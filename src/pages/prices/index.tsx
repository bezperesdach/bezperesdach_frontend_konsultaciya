import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";
import { SuggestToOrder } from "@/components/pages/prices/suggest-to-order/suggest-to-order";
import { SEO } from "@/components/seo/seo";
import PricesSearchableCards from "@/components/pages/prices/searchable-cards/prices-searchable-cards";

import styles from "@/styles/pages/Prices.module.css";

const Prices: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        title="Цены и услуги компании Безпересдач"
        description="Команда “Безпересдач” изучила рынок и теперь знает какие цены нужны каждому студенту. Спешите - на первый заказ мы дарим 10% скидку"
        url={"https://bezperesdach.ru/prices"}
        image="https://bezperesdach.ru/assets/og_logo.png"
      />

      <div className={`${styles.header_container} dynamic_container`}>
        <NextBreadCrumbs url="/prices" />

        <h1>Услуги и цены Безпересдач</h1>
        <p className="font_h3">Помогаем студентам по всей России и СНГ добиться желаемых результатов в учёбе!</p>
      </div>

      <PricesSearchableCards />

      <SuggestToOrder />
    </>
  );
};

Prices.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Prices;
