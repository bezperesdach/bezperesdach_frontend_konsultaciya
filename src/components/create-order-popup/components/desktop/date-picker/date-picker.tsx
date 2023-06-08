import React from "react";
import Calendar from "react-calendar";
import { Button } from "@/components/button/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDueDateEpoch, setStage } from "@/store/reducers/orderPopupReducer";
import { Value } from "react-calendar/dist/cjs/shared/types";

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
    <div className={styles.date_picker}>
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
      <div className={styles.bottom_buttons}>
        {dueDate !== null && (
          <Button
            color="#fff"
            style={{ height: "48px", margin: "unset", minWidth: "80px" }}
            onClick={() => dispatch(setStage("additional"))}
          >
            ДАЛЕЕ
          </Button>
        )}
      </div>
    </div>
  );
};
