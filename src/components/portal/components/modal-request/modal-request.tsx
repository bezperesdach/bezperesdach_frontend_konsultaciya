import React, { useMemo } from "react";
import { Backdrop } from "../backdrop/backdrop";
import { Button } from "@/components/button/button";
import Portal from "@/components/portal/portal";

import styles from "./modal-request.module.css";

type ContactType = "email" | "telegram" | "vk";
type Props = {
  handleClose: () => void;
  email: string;
  shouldShow: boolean;
  contactType?: ContactType;
  isMobile: boolean;
};

const generateReplyMessage = (contactType: ContactType, email: string, isMobile: boolean) => {
  switch (contactType) {
    case "email":
      return {
        title: "Совсем скоро мы напишем вам на почту чтобы уточнить все детали",
        help: (
          <>
            Если у вас возникли какие-то вопросы, <br /> пишите нам на почту{" "}
            <a
              className={styles.link}
              href={`mailto:${email}?subject=%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8%D1%82%D0%B5%20%D0%BC%D0%BD%D0%B5`}
              style={{ color: "#3D8EE8" }}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {email}
            </a>
          </>
        ),
      };
    case "telegram":
      return {
        title: "Совсем скоро мы свяжемся с вами в Телеграм чтобы уточнить все детали",
        help: (
          <>
            Если у вас возникли какие-то вопросы, <br /> пишите в нашего Телеграм-бота{" "}
            <a
              className={styles.link}
              href={isMobile ? "tg://resolve?domain=bezperesdach_bot" : "https://bezperesdach_bot.t.me"}
              style={{ color: "#3D8EE8" }}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              @bezperesdach_bot
            </a>
          </>
        ),
      };
    case "vk":
      return {
        title: "Совсем скоро мы напишем вам во Вконтакте чтобы уточнить все детали",
        help: (
          <>
            Если у вас возникли какие-то вопросы, <br /> пишите нам в группу Вконтакте{" "}
            <a
              className={styles.link}
              href={isMobile ? "vk://vk.com/bezperesdach_official" : "https://vk.com/bezperesdach_official"}
              style={{ color: "#3D8EE8" }}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              bezperesdach_official
            </a>
          </>
        ),
      };
  }
};

export const ModalRequest = ({ handleClose, shouldShow, email, contactType = "email", isMobile }: Props) => {
  const replyMessage = useMemo(() => generateReplyMessage(contactType, email, isMobile), [contactType, email, isMobile]);
  return (
    <>
      {shouldShow ? (
        <Portal id="orderPopup">
          <Backdrop onClick={handleClose}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
              <h1 style={{ paddingBottom: "24px" }}>Заявка отправлена!</h1>
              <p style={{ paddingBottom: "8px" }}>{replyMessage.title}</p>
              {contactType === "email" && <p>(не забудьте проверить папку &quot;спам&quot;)</p>}
              <p style={{ paddingTop: "24px", paddingBottom: "24px" }}>{replyMessage.help}</p>
              <Button type="button" color="#fff" onClick={handleClose}>
                Закрыть
              </Button>
            </div>
          </Backdrop>
        </Portal>
      ) : null}
    </>
  );
};
