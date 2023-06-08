import React, { useEffect, useRef, useState } from "react";
import useDeviceDetect from "@/hooks/use-device-detect/use-device-detect";
import { useOutsideAreaClick } from "@/hooks/use-outside-area-click/use-outside-area-click";
import { ym } from "@/utils/yandex-metrika";

import { ChatIcon } from "@/icons/chat-icon";
import { MailIcon } from "@/icons/mail-icon";
import { VkontakteIcon } from "@/icons/vkontakte-icon";
import { TelegramIcon } from "@/icons/telegram-icon";
import { CloseIcon } from "@/icons/close-icon";

import styles from "./help-button.module.css";

export const HelpButton = () => {
  const supportContainerRef = useRef(null);
  const outsideClick = useOutsideAreaClick(supportContainerRef);

  const { isMobile } = useDeviceDetect();
  const [showHelpMenu, setShowHelpMenu] = useState(false);

  const openHelpMenu = () => {
    setShowHelpMenu(true);
    ym("reachGoal", "helpClick");
  };

  useEffect(() => {
    if (outsideClick) {
      if (showHelpMenu) {
        setShowHelpMenu(false);
      }
    }
  }, [outsideClick, showHelpMenu]);

  return (
    <div className={styles.container} ref={supportContainerRef}>
      <button className={styles.chat_button} onClick={openHelpMenu}>
        <ChatIcon width={36} height={36} title="Открыть быструю помощь" />
      </button>

      <div className={`${styles.menu_container} ${showHelpMenu ? styles.visible : styles.hidden}`}>
        <a
          className={styles.chat_button}
          href="mailto:help@bezperesdach.ru"
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={() => setShowHelpMenu(false)}
        >
          <MailIcon width={40} height={40} title="Написать на help@bezperesdach.ru" />
        </a>
        <a
          className={styles.chat_button}
          href={isMobile ? "vk://vk.com/bezperesdach_official" : "https://vk.com/bezperesdach_official"}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={() => setShowHelpMenu(false)}
        >
          <VkontakteIcon width={40} height={40} title="Перейти в группу Вконтакте" />
        </a>
        <a
          className={styles.chat_button}
          href={isMobile ? "tg://resolve?domain=bezperesdach_bot" : "https://bezperesdach_bot.t.me"}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={() => setShowHelpMenu(false)}
        >
          <TelegramIcon width={40} height={40} title="Перейти в Телеграм бота" />
        </a>
        <button className={styles.chat_button} onClick={() => setShowHelpMenu(false)}>
          <CloseIcon width={40} height={40} title="Закрыть быструю помощь" />
        </button>
      </div>
    </div>
  );
};
