import { CloseIcon } from "@/icons/close-icon";
import styles from "./title.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setStage } from "@/store/reducers/orderPopupReducer";
import classNames from "classnames";
import { ArrowInCircle } from "@/icons/arrow-in-circle";
import { useCallback } from "react";

type Props = {
  title: string;
  onClose: () => void;
};

export const Title = ({ title, onClose }: Props) => {
  const stage = useAppSelector((state) => state.orderPopup.stage);
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
    <div className={classNames(styles.title, "no_select")}>
      {stage !== "theme" ? (
        <button className={styles.button_container} onClick={setPreviousStage}>
          <ArrowInCircle width={48} height={48} title="Назад" color="#fff" accentColor="#1070EE" filled strokeWidth={3} />
        </button>
      ) : (
        <div style={{ width: "36px", height: "36px" }} />
      )}
      <p style={{ textAlign: "center" }}>{title}</p>
      <button className={styles.button_container} onClick={onClose}>
        <CloseIcon width={48} height={48} title="Закрыть меню заявки" />
      </button>
    </div>
  );
};
