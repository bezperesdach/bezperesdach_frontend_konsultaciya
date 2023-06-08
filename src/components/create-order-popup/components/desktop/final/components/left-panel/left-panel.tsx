import { CheckMark } from "@/icons/generic/check_mark";
import { useAppSelector } from "@/store/hooks";
import { additionalInfoParams, getAntiplagiatLabel, getProjectTypeLabel, getVolumeDataUnitNouns } from "@/utils/popupOrder/utils";
import { getFullDateStr, getNoun } from "@/utils/utils";
import React, { useEffect, useMemo, useRef } from "react";

import styles from "./left-panel.module.css";

type Props = {
  className: string;
};

export const LeftPanel = ({ className }: Props) => {
  const additionalInfoRef = useRef<HTMLParagraphElement>(null);
  const workThemeRef = useRef<HTMLParagraphElement>(null);

  const { projectType, expectedPrice, subject, workTheme, dueDateEpoch, originality, antiplagiatType, volume, additionalInfo } =
    useAppSelector((state) => state.orderPopup);

  const nouns = useMemo(() => {
    if (projectType) {
      const data = additionalInfoParams[projectType].volumeData;
      if (data) {
        return getVolumeDataUnitNouns(data.unit);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const additionalData = useMemo(() => {
    if (projectType) {
      if (additionalInfoParams[projectType]) {
        return additionalInfoParams[projectType];
      } else {
        return null;
      }
    }
  }, [projectType]);

  useEffect(() => {
    if (workThemeRef.current) {
      const item = workThemeRef.current;
      if (item.offsetWidth < item.scrollWidth) {
        item.classList.add(styles.expandable_text);
      } else {
        item.classList.remove(styles.expandable_text);
      }
    }
  }, [workThemeRef]);

  useEffect(() => {
    if (additionalInfoRef.current) {
      const item = additionalInfoRef.current;

      if (item.offsetWidth < item.scrollWidth) {
        item.classList.add(styles.expandable_text);
      } else {
        item.classList.remove(styles.expandable_text);
      }
    }
  }, [additionalInfoRef]);

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.request}>
          <p className={styles.header}>Ваша заявка:</p>

          {projectType && <p style={{ fontWeight: "500", color: "#1070EE" }}>{getProjectTypeLabel(projectType)}</p>}
          {subject && <p>{subject}</p>}
          {workTheme && (
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} data-text={workTheme} ref={workThemeRef}>
              Тема: {workTheme}
            </p>
          )}
          {additionalData?.antiplagiat && originality && <p>Оригинальность: {originality}%</p>}
          {additionalData?.antiplagiat && antiplagiatType && <p>Проверка: {getAntiplagiatLabel(antiplagiatType)}</p>}
          {volume && (
            <p>
              Объем: {volume} {nouns ? getNoun(volume, nouns.one, nouns.two, nouns.five) : ""}
            </p>
          )}

          {dueDateEpoch && <p>Дата сдачи: {getFullDateStr(new Date(dueDateEpoch).toLocaleDateString("ru-RU"))}</p>}
          {additionalInfo && (
            <p
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
              data-text={additionalInfo}
              ref={additionalInfoRef}
            >
              Комментарий: {additionalInfo}
            </p>
          )}
          {expectedPrice != null && <p>Желаемая стоимость: {expectedPrice}₽</p>}
        </div>

        <div className={styles.we_are_ready_container}>
          <p style={{ fontSize: "28px", fontWeight: "600", color: "#00BE57", marginTop: "8px", marginBottom: "8px" }}>
            Ура! Мы готовы оценить стоимость работы!
          </p>

          <div className={styles.advantages}>
            <div className={styles.advantage}>
              <div className={styles.check_mark}>
                <CheckMark title="Конфиденциально" accentColor="#00BE57" />
              </div>
              <p>Конфиденциально</p>
            </div>

            <div className={styles.advantage}>
              <div className={styles.check_mark}>
                <CheckMark title="Без спама" accentColor="#00BE57" />
              </div>
              <p>Без спама</p>
            </div>

            <div className={styles.advantage}>
              <div className={styles.check_mark}>
                <CheckMark title="Скидка на заказ" accentColor="#00BE57" />
              </div>
              <p>Скидка на заказ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
