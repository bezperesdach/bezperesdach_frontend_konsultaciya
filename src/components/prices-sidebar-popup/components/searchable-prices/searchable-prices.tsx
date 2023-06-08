import React, { useState } from "react";
import SidebarPricesSearch from "../search/sidebar-prices-search";
import { CloseIcon } from "@/icons/close-icon";
import { MemoizedSidebarPriceCard } from "../price-card/sidebar-price-card";
import { ProjectTypes, projectTypeOptions } from "@/utils/popupOrder/utils";
import { setSidebarState } from "@/store/reducers/generalReducer";
import { useAppDispatch } from "@/store/hooks";
import SidebarSuggestKonsultaciya from "../suggest-konsultaciya/sidebar-suggest-konsultaciya";

import styles from "./searchable-prices.module.css";
import { resetStateToStart, setPopupShown } from "@/store/reducers/orderPopupReducer";

type Props = {
  shown: boolean;
};

const SearchablePrices = ({ shown }: Props) => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [shouldRender, setShouldRender] = useState(shown);

  const closeSidebar = () => {
    setShouldRender(false);

    setTimeout(() => {
      dispatch(setSidebarState(false));
    }, 80);
  };

  const closeSidebarOpenOrderPopup = (item: ProjectTypes) => {
    setShouldRender(false);

    setTimeout(() => {
      dispatch(setSidebarState(false));

      dispatch(resetStateToStart(item));
      dispatch(setPopupShown(true));
    }, 80);
  };

  return (
    <div className={styles.overlay}>
      <div
        className={styles.backdrop}
        style={{ animation: `${shouldRender ? "fade-in 0.15s" : "fade-out 0.1s"}` }}
        // onAnimationEnd={onAnimationEnd}
      >
        <div
          className={styles.container}
          // onAnimationEnd={onAnimationEnd}
        >
          <div className={styles.controls_container}>
            <div className={styles.title_container}>
              <p className={`${styles.title} font_h3`}>Цены и услуги</p>
              <button className={styles.close_button} onClick={closeSidebar}>
                <CloseIcon width={36} height={36} title="закрыть услуги" />
              </button>
            </div>
            <SidebarPricesSearch setSearchQuery={setSearchQuery} />
          </div>

          <div className={styles.cards_container}>
            {projectTypeOptions.map((item) => {
              return (
                item.label.toLowerCase().includes(searchQuery.toLowerCase()) && (
                  <MemoizedSidebarPriceCard
                    key={item.value}
                    item={item}
                    closeSidebarOpenOrderPopup={closeSidebarOpenOrderPopup}
                    closeSidebar={closeSidebar}
                  />
                )
              );
            })}
          </div>

          <SidebarSuggestKonsultaciya closeSidebarOpenOrderPopup={closeSidebarOpenOrderPopup} />
        </div>
        <button className={styles.background_button} onClick={closeSidebar} />
      </div>
    </div>
  );
};

export default SearchablePrices;
