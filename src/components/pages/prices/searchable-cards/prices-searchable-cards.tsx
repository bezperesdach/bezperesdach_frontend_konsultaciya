import React from "react";
import { ProjectTypes, projectTypeOptions } from "@/utils/popupOrder/utils";
import { MemoizedSidebarPriceCard } from "@/components/prices-sidebar-popup/components/price-card/sidebar-price-card";
import { useAppDispatch } from "@/store/hooks";
import { resetStateToStart, setPopupShown } from "@/store/reducers/orderPopupReducer";
import SidebarPricesSearch from "@/components/prices-sidebar-popup/components/search/sidebar-prices-search";

import styles from "./prices-searchable-card.module.css";

const PricesSearchableCards = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const closeSidebarOpenOrderPopup = (item: ProjectTypes) => {
    dispatch(resetStateToStart(item));
    dispatch(setPopupShown(true));
  };

  return (
    <section className={`${styles.container}  dynamic_container`}>
      <SidebarPricesSearch setSearchQuery={setSearchQuery} />
      <div className={`${styles.uslugi_container}  dynamic_container`}>
        {projectTypeOptions.map((item) => {
          return (
            item.label.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <div className={styles.card_wrapper} key={item.value}>
                <MemoizedSidebarPriceCard item={item} closeSidebarOpenOrderPopup={closeSidebarOpenOrderPopup} />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default PricesSearchableCards;
