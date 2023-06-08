import { Button } from "@/components/button/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAllOrderData, setContact, setContactType, setOrderId, setSubmitting } from "@/store/reducers/orderPopupReducer";
import { contactTypeOptions, ContactTypes } from "@/utils/popupOrder/utils";
import React, { useEffect, useMemo, useState } from "react";
import { ReactSelector } from "../../../../react-selector/react-selector";
import { ym } from "@/utils/yandex-metrika";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { createOrder } from "@/api/api";
import { showAndHideError } from "@/utils/utils";

import styles from "./contact.module.css";

type Props = {
  className: string;
};

export const Contact = ({ className }: Props) => {
  const isSubmitting = useAppSelector((state) => state.orderPopup.isSubmitting);
  const orderData = useAppSelector((state) => selectAllOrderData(state));
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [sendOrder, setSendOrder] = useState({
    loading: false,
    isModal: false,
    error: false,
    errorText: "",
  });

  const [agreed, setAgreed] = useState(true);
  const { contactType, contact } = useAppSelector((state) => state.orderPopup);
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValid(e.target.value);
    dispatch(setContact(e.target.value));
  };

  useEffect(() => {
    if (contactType === null) {
      dispatch(setContactType("vk"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectContactType = (item: string) => {
    if (item !== contactType) {
      setError("");
      dispatch(setContact(""));
    }
    dispatch(setContactType(item as ContactTypes));
  };

  const sendData = async () => {
    if (!executeRecaptcha) {
      return;
    }

    dispatch(setSubmitting(true));

    setSendOrder((prevState) => {
      return { ...prevState, loading: true };
    });

    try {
      const recaptchaToken = await executeRecaptcha();
      if (!recaptchaToken) {
        console.log("error with recaptcha");
        return;
      }

      const data = new FormData();

      data.append("data", JSON.stringify({ ...orderData, recaptchaToken }));

      const result = await createOrder(data);
      if (result.ok) {
        const data = await result.json();
        ym("reachGoal", `orderCreateSuccess-${orderData.projectType}`);

        setSendOrder((prevState) => {
          return { ...prevState, loading: false, isModal: true };
        });
        dispatch(setOrderId(data.id));
        dispatch(setSubmitting(false));
      } else {
        const data = await result.json();
        ym("reachGoal", "orderCreateError");
        showAndHideError(
          () =>
            setSendOrder((prevState) => {
              return {
                ...prevState,
                loading: false,
                error: true,
                errorText: data && data.message ? data.message : "Произошла ошибка при отправке, попробуйте еще раз",
              };
            }),
          () =>
            setSendOrder((prevState) => {
              return { ...prevState, loading: false, error: false, errorText: "" };
            }),
          5000
        );
      }
      dispatch(setSubmitting(false));
    } catch (error) {
      console.log(error);
      ym("reachGoal", "orderCreateError");
      showAndHideError(
        () =>
          setSendOrder((prevState) => {
            return {
              ...prevState,
              loading: false,
              error: true,
              errorText: "Произошла ошибка при отправке, попробуйте еще раз",
            };
          }),
        () =>
          setSendOrder((prevState) => {
            return { ...prevState, loading: false, error: false, errorText: "" };
          }),
        5000
      );
    }
    dispatch(setSubmitting(false));
  };

  const contactLabel = useMemo(() => {
    switch (contactType) {
      case "vk":
        return "Ссылка на страницу";
      case "telegram":
        return "Номер или логин";
      case "email":
        return "Ваш Email";
    }
  }, [contactType]);

  const contactPlaceholder = useMemo(() => {
    switch (contactType) {
      case "vk":
        return "https://vk.com/example";
      case "telegram":
        return "@example или 89991112233";
      case "email":
        return "example@mail.ru";
    }
  }, [contactType]);

  const inputValid = (localContact?: string) => {
    const input = localContact ?? contact;
    if (input === "") {
      setError("Поле не может быть пустым");
      return false;
    }
    switch (contactType) {
      case "vk":
        if (/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(input)) {
          setError("");
          return true;
        } else {
          setError("Неправильная ссылка");
          return false;
        }
      case "telegram":
        setError("");
        return true;
      case "email":
        if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(input)) {
          setError("");
          return true;
        } else {
          setError("Неверный email");
          return "Ваш Email";
        }
    }
  };

  const sendOrderRequest = () => {
    if (inputValid()) {
      sendData();
    }
  };

  return (
    <div className={className}>
      {/* <div className={styles.option_container}> */}
      <p style={{ fontWeight: 500, fontSize: "22px", color: "#1070EE" }}>Как с вами связаться?</p>

      <div className={styles.option_container}>
        <ReactSelector
          isSearchable={false}
          options={contactTypeOptions}
          item={contactType ?? "vk"}
          onItemSelected={selectContactType}
          disabled={isSubmitting}
        />
        <p style={{ color: "#273444", marginLeft: "8px", marginTop: "8px" }}>{contactLabel}</p>
        <input
          className={styles.input}
          value={contact}
          onChange={onContactChange}
          placeholder={contactPlaceholder}
          disabled={isSubmitting}
        />
        {error && <p style={{ marginLeft: "8px", marginBottom: "4px", color: "#b41f1fe8" }}>{error}</p>}
      </div>

      {/* <p style={{ fontWeight: 500, fontSize: "22px", color: "#1070EE" }}>Пожелания по цене</p>
      <div className={styles.option_container}>
        <p style={{ color: "#273444", marginLeft: "8px", marginTop: "8px" }}>Ваш email</p>
        <input className={styles.input} placeholder="example@mail.ru" />
      </div> */}

      {/* </div> */}
      <div className={styles.send_container}>
        <div className={styles.agreement_container}>
          <p style={{ fontSize: "14px" }}>Принимаю политику обработки персональных данных</p>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="согласен"
            id="agree-checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            disabled={isSubmitting}
          />
        </div>
        <Button
          loading={sendOrder.loading}
          backgroundColor={agreed ? "#10BD58" : "#2734447d"}
          backgroundAnimatedColor={agreed ? "#148744" : "#2734447d"}
          disabled={!error && !agreed}
          style={!agreed ? { cursor: "not-allowed" } : {}}
          onClick={sendOrderRequest}
          error={sendOrder.error}
        >
          УЗНАТЬ СТОИМОСТЬ
        </Button>

        <div className={styles.error_container}>
          {sendOrder.error ? (
            <p className={styles.error_text}>{sendOrder.errorText}</p>
          ) : (
            <p className={styles.agreements}>
              Мы используем reCaptcha, действуют{" "}
              <a href="https://policies.google.com/privacy" className={styles.link} target="_blank" rel="nofollow noopener noreferrer">
                политика конфиденциальности
              </a>{" "}
              и{" "}
              <a href="https://policies.google.com/terms" className={styles.link} target="_blank" rel="noreferrer">
                пользовательское соглашение
              </a>{" "}
              от Google
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
