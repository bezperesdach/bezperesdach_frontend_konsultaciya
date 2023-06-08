import { ArrowInCircle } from "@/icons/arrow-in-circle";
import { CloseIcon } from "@/icons/close-icon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setStage } from "@/store/reducers/orderPopupReducer";

import styles from "./title-controls.module.css";
import { useCallback } from "react";

type Props = {
  title: string;
  onClose: () => void;
};

export const TitleControls = ({ title, onClose }: Props) => {
  const orderId = useAppSelector((state) => state.orderPopup.orderId);
  const stage = useAppSelector((state) => state.orderPopup.stage);

  const isSubmitting = useAppSelector((state) => state.orderPopup.isSubmitting);
  const dispatch = useAppDispatch();

  const setPreviousStage = useCallback(() => {
    if (stage === "final") {
      dispatch(setStage("additional"));
    }
    if (stage === "additional") {
      dispatch(setStage("date"));
    }

    if (stage === "date") {
      dispatch(setStage("theme"));
    }
  }, [stage, dispatch]);

  return (
    <div className={styles.title}>
      {stage !== "theme" && !orderId ? (
        !isSubmitting ? (
          <button className={styles.button_container} onClick={setPreviousStage}>
            <ArrowInCircle width={36} height={36} title="Назад" color="#fff" accentColor="#1070EE" filled strokeWidth={3} />
          </button>
        ) : (
          <div style={{ width: "36px", height: "36px" }} />
        )
      ) : (
        <div style={{ width: "36px", height: "36px" }} />
      )}
      <p className="font_h3">{orderId ? "Заявка отправлена" : title}</p>
      {!isSubmitting ? (
        <button className={styles.button_container} onClick={onClose}>
          <CloseIcon width={36} height={36} title="Закрыть меню заявки" />
        </button>
      ) : (
        <div style={{ width: "36px", height: "36px" }} />
      )}
    </div>
  );
};
