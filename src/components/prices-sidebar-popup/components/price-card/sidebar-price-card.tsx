import { ProjectTypes, additionalInfoParams } from "@/utils/popupOrder/utils";
import { LinkButton } from "@/components/link-button/link-button";
import { hoursToWordAndNumber } from "@/utils/utils";
import { uslugaPageExists } from "@/utils/urls";
import { memo } from "react";
import { GetIconFromName } from "@/icons/uslugi/get-icon-from-name";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";

import styles from "./sidebar-price-card.module.css";

type Props = {
  item: {
    label: string;
    value: string;
  };
  closeSidebarOpenOrderPopup: (item: ProjectTypes) => void;
  closeSidebar?: () => void;
};

const SidebarPriceCard = ({ item, closeSidebarOpenOrderPopup, closeSidebar }: Props) => {
  const itemAdditionalInfo = additionalInfoParams[item.value];
  const { amount, word } = hoursToWordAndNumber(itemAdditionalInfo.info.timeToCompleteInHours || 0);
  const hasPage = uslugaPageExists(item.value);

  return (
    <div className={styles.card}>
      {itemAdditionalInfo.cardVisualData && (
        <div className={styles.icon_container} style={{ backgroundColor: itemAdditionalInfo.cardVisualData.backgroundColor }}>
          <div className={styles.icon}>
            <GetIconFromName
              iconName={item.value as ProjectTypes}
              title={item.label}
              accentColor={itemAdditionalInfo.cardVisualData.accentColor}
            />
          </div>
        </div>
      )}
      <p className={styles.title}>{additionalInfoParams[item.value].info.title}</p>
      <div className={styles.divider} />
      <div className={styles.buttons_info_container}>
        <div className={styles.info_container}>
          {itemAdditionalInfo.info.minPrice ? (
            <p>
              от <span className={styles.info_blue}>{itemAdditionalInfo.info.minPrice}</span> руб.
            </p>
          ) : (
            <p>
              <span className={styles.info_blue}>Бесплатно</span>
            </p>
          )}
          {itemAdditionalInfo.info.timeToCompleteInHours && (
            <p>
              от <span className={styles.info_blue}>{amount}</span> {word}
            </p>
          )}
        </div>
        <div className={styles.buttons_container}>
          {hasPage ? (
            <>
              <div className={styles.half_width_button}>
                <LinkButton
                  outlineColor="#273443bf"
                  outlineBackgroundColor="#fff"
                  outlineAnimatedColor="#fff"
                  outlineWidth={2}
                  href={"/prices/" + item.value}
                  borderRadius={8}
                  outlined
                  style={{ marginTop: "auto", margin: "unset", height: "32px", minWidth: "100%" }}
                  onClick={closeSidebar}
                >
                  ПОДРОБНЕЕ
                </LinkButton>
              </div>

              <div className={styles.half_width_button}>
                <ButtonOrderPopupLoadingWrapper
                  outlineColor="#1070eec2"
                  outlineBackgroundColor="#fff"
                  outlineAnimatedColor="#fff"
                  outlineWidth={2}
                  borderRadius={8}
                  outlined
                  style={{ marginTop: "auto", margin: "unset", height: "32px", minWidth: "100%" }}
                  onClick={() => (closeSidebarOpenOrderPopup ? closeSidebarOpenOrderPopup(item.value as ProjectTypes) : undefined)}
                >
                  ЗАКАЗАТЬ
                </ButtonOrderPopupLoadingWrapper>
              </div>
            </>
          ) : (
            <ButtonOrderPopupLoadingWrapper
              outlineColor="#1070eec2"
              outlineBackgroundColor="#fff"
              outlineAnimatedColor="#fff"
              outlineWidth={2}
              borderRadius={8}
              outlined
              style={{ marginTop: "auto", margin: "unset", height: "32px", minWidth: "100%" }}
              onClick={() => (closeSidebarOpenOrderPopup ? closeSidebarOpenOrderPopup(item.value as ProjectTypes) : undefined)}
            >
              ЗАКАЗАТЬ
            </ButtonOrderPopupLoadingWrapper>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarPriceCard;

export const MemoizedSidebarPriceCard = memo(SidebarPriceCard);
