import classNames from "classnames";
import useDeviceDetect from "@/hooks/use-device-detect/use-device-detect";
import { MailIcon } from "@/icons/mail-icon";
import { VkontakteIcon } from "@/icons/vkontakte-icon";
import { TelegramIcon } from "@/icons/telegram-icon";

import styles from "./contact-us.module.css";

const ContactUs = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <section className={styles.wrapper}>
      <div className={classNames(styles.container, "dynamic_container")}>
        <h2>Я хочу стать автором студенческих работ</h2>
        <p className="font_h4">
          Чтобы стать автором студенческих работ в компании Безпересдач нужно выполнить пару простых шагов. Выбери снизу наиболее
          удобный тебе вариант связи и напиши нам с пометкой &quot;Хочу стать автором&quot;. А дальше дело за нами :)
        </p>
        <div className={styles.social_container}>
          <a className={styles.social} href="mailto:work@bezperesdach.ru" target="_blank" rel="nofollow noopener noreferrer">
            <MailIcon title="написать на почту" />
            <p className={classNames("font_h4")}>work@bezperesdach.ru</p>
          </a>
          <a
            className={styles.social}
            href={isMobile ? "vk://vk.com/write787514893" : "https://vk.com/write787514893"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <VkontakteIcon title="написать в ВК" />
            <p className={classNames("font_h4")}>@bezperesdachHR</p>
          </a>
          <a
            className={styles.social}
            href={isMobile ? "tg://resolve?domain=bezperesdach_help" : "https://bezperesdach_help.t.me"}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <TelegramIcon title="написать в Телеграм" />
            <p className={classNames("font_h4")}>@bezperesdach_help</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
