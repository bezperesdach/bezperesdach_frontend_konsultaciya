import Calendar from "react-calendar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDueDateEpoch, setStage } from "@/store/reducers/orderPopupReducer";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { StageControls } from "../stage-controls/stage-controls";
import classNames from "classnames";

import styles from "./date-picker.module.css";

export const DatePicker = () => {
  const dispatch = useAppDispatch();
  const dueDate = useAppSelector((state) => state.orderPopup.dueDateEpoch);

  const setDate = (value: Value) => {
    const dateInMs = value?.valueOf();
    if (typeof dateInMs === "number") {
      dispatch(setDueDateEpoch(dateInMs));
    }
  };

  return (
    <div className={styles.container}>
      <div className={classNames(styles.calendar_container, "no_select")}>
        <Calendar
          locale="ru-RU"
          minDate={new Date()}
          prev2Label={null}
          next2Label={null}
          value={dueDate ? new Date(dueDate) : undefined}
          onChange={setDate}
          view="month"
          navigationLabel={({ label }) => label.toUpperCase()}
        />
      </div>
      {dueDate != null && <StageControls forwardButton={() => dispatch(setStage("additional"))} />}
    </div>
  );
};
