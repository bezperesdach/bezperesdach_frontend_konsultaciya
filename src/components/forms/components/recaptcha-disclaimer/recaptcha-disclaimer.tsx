import React from "react";
import Image from "next/image";

import RecaptchaLogo from "@/public/assets/images/recaptcha-logo.svg";

import styles from "./recaptcha-disclaimer.module.css";

interface Props {
  color?: string;
}

export const RecaptchaDisclaimer = ({ color }: Props) => {
  return (
    <div className={styles.recaptcha} style={{ color }}>
      <div className={styles.recaptcha_logo_text}>
        <p>
          Мы используем{" "}
          <a href="https://www.google.com/recaptcha/about/" className={styles.link} target="_blank" rel="nofollow noopener noreferrer">
            reCAPTCHA
          </a>
        </p>
        <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="nofollow noopener noreferrer">
          <Image src={RecaptchaLogo} className={styles.recaptcha_logo} alt={"recaptcha logo"} />
        </a>
      </div>
      <p className={styles.agreements}>
        {" "}
        <a href="https://policies.google.com/privacy" className={styles.link} target="_blank" rel="nofollow noopener noreferrer">
          Политика конфиденциальности
        </a>{" "}
        и{" "}
        <a href="https://policies.google.com/terms" className={styles.link} target="_blank" rel="noreferrer">
          пользовательское соглашение
        </a>{" "}
      </p>
    </div>
  );
};
