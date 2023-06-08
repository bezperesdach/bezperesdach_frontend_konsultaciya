import { Overlay } from "@/components/portal/components/overlay/overlay";
import { Backdrop } from "@/components/portal/components/backdrop/backdrop";
import { useRef, useCallback, useEffect, useState, useMemo } from "react";
import { fullReset, setPopupShown } from "@/store/reducers/orderPopupReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DatePicker } from "./date-picker/date-picker";
import { ProjectTypeSelection } from "./project-type-selection/project-type-selection";
import { AdditionalInfo } from "./additional-info/additional-info";
import { Final } from "./final/final";
import { Sent } from "../sent/sent";
import { Stage } from "../stage/stage";

import { setPopupLoading } from "@/store/reducers/orderPopupReducer";

import styles from "./desktop-popup.module.css";
import { TitleControls } from "./title-controls/title-controls";

type Props = {
  shown: boolean;
};

export const DesktopPopup = ({ shown }: Props) => {
  const orderId = useAppSelector((state) => state.orderPopup.orderId);
  const stage = useAppSelector((state) => state.orderPopup.stage);

  const isSubmitting = useAppSelector((state) => state.orderPopup.isSubmitting);
  const popupRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [shouldRender, setShouldRender] = useState(shown);

  const stageTitle = useMemo(() => {
    switch (stage) {
      case "theme":
        return "Какую работу нужно выполнить?";
      case "date":
        return "Когда нужно сдать работу?";
      case "additional":
        return "Дополнительные требования";
      case "final":
        return "Отправка заявки";
      default:
        return "";
    }
  }, [stage]);

  const closeOrderPopup = useCallback(() => {
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

  useEffect(() => {
    dispatch(setPopupLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Overlay clickable>
      <Backdrop onClick={closeOrderPopup} style={{ animation: `${shouldRender ? "fade-in 0.24s" : "fade-out 0.1s"}` }}>
        <div
          ref={popupRef}
          className={styles.order_popup_container}
          onClick={(e) => e.stopPropagation()}
          style={orderId ? { height: "fit-content", width: "fit-content", scale: "0.95" } : {}}
        >
          {orderId ? (
            <Sent onClick={closeOrderPopup} orderId={orderId} />
          ) : (
            <>
              <TitleControls title={stageTitle} onClose={closeOrderPopup} />
              <Stage theme={<ProjectTypeSelection />} date={<DatePicker />} additional={<AdditionalInfo />} final={<Final />} />
            </>
          )}
        </div>
      </Backdrop>
    </Overlay>
  );
};
