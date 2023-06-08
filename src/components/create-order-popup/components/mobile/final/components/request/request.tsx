import { useAppSelector } from "@/store/hooks";
import { additionalInfoParams, getAntiplagiatLabel, getProjectTypeLabel, getVolumeDataUnitNouns } from "@/utils/popupOrder/utils";
import { getFullDateStr, getNoun } from "@/utils/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";

import styles from "./request.module.css";
import classNames from "classnames";

export const Request = () => {
  const additionalInfoRef = useRef<HTMLParagraphElement>(null);
  const workThemeRef = useRef<HTMLParagraphElement>(null);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

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
    <div className={styles.container}>
      <div className={styles.request}>
        <div className={styles.request_show_toggle}>
          <p style={{ flexShrink: "0" }} className={styles.header}>
            Ваша заявка
          </p>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="ваша заявка"
            id="show_request"
            checked={mobileMenuShown}
            onChange={() => setMobileMenuShown(!mobileMenuShown)}
          />
          <label className={styles.label} htmlFor="show_request" />
        </div>

        <div className={classNames(styles.items_wrapper, { [`${styles.items_wrapper_hidden}`]: !mobileMenuShown })}>
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
      </div>
    </div>
  );
};
