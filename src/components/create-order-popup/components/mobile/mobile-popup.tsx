import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fullReset, setPopupLoading, setPopupShown } from "@/store/reducers/orderPopupReducer";
import { Title } from "./title/title";
import { Stage } from "../stage/stage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProjectTypeSelection } from "./project-type-selection/project-type-selection";
import { DatePicker } from "./date-picker/date-picker";
import { AdditionalInfo } from "./additional-info/additional-info";
import { Final } from "./final/final";
import { Sent } from "../sent/sent";
import { Backdrop } from "@/components/portal/components/backdrop/backdrop";
import { Overlay } from "@/components/portal/components/overlay/overlay";

import styles from "./mobile-popup.module.css";

type Props = {
  shown: boolean;
};

export const MobilePopup = ({ shown }: Props) => {
  const orderId = useAppSelector((state) => state.orderPopup.orderId);
  const stage = useAppSelector((state) => state.orderPopup.stage);
  const isSubmitting = useAppSelector((state) => state.orderPopup.isSubmitting);
  const dispatch = useAppDispatch();

  const [shouldRender, setShouldRender] = useState(shown);

  const stageTitle = useMemo(() => {
    switch (stage) {
      case "theme":
        return "С чем вам нужна помощь?";
      case "date":
        return "Дата сдачи";
      case "additional":
        return "Дополнительные требования";
      case "final":
        return "Отправка заявки";
      default:
        return "";
    }
  }, [stage]);

  useEffect(() => {
    dispatch(setPopupLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closePopup = useCallback(() => {
    if (!isSubmitting) {
      setShouldRender(false);
      setTimeout(() => {
        if (orderId) {
          dispatch(fullReset());
        } else {
          dispatch(setPopupShown(false));
        }
      }, 90);
    }
  }, [isSubmitting, orderId, dispatch]);

  return (
    <Overlay clickable>
      <Backdrop style={{ animation: `${shouldRender ? "fade-in 0.24s" : "fade-out 0.1s"}` }}>
        <div className={styles.container}>
          <div
            className={styles.order_popup_container}
            style={orderId ? { justifyContent: "center", alignItems: "center", background: "transparent" } : {}}
          >
            {orderId ? (
              <div className={styles.sent_container} style={orderId ? { height: "fit-content", scale: "0.95" } : {}}>
                <Sent onClick={closePopup} orderId={orderId} />
              </div>
            ) : (
              <>
                <Title title={stageTitle} onClose={closePopup} />
                <Stage theme={<ProjectTypeSelection />} date={<DatePicker />} additional={<AdditionalInfo />} final={<Final />} />
              </>
            )}
          </div>
        </div>
      </Backdrop>
    </Overlay>
  );
};
