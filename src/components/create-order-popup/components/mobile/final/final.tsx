import { CheckMark } from "@/icons/generic/check_mark";
import { Request } from "./components/request/request";
import { Contact } from "./components/contact/contact";

import styles from "./final.module.css";

export const Final = () => {
  return (
    <div className={styles.container}>
      <Request />
      <div className={styles.we_are_ready_container}>
        <p style={{ fontSize: "28px", fontWeight: "600", color: "#00BE57", marginTop: "8px", marginBottom: "8px" }}>
          Ура! Мы готовы оценить стоимость работы!
        </p>

        <div className={styles.advantages}>
          <div className={styles.advantage}>
            <div className={styles.check_mark}>
              <CheckMark title="Конфиденциально" accentColor="#00BE57" />
            </div>
            <p>Конфиденциально</p>
          </div>

          <div className={styles.advantage}>
            <div className={styles.check_mark}>
              <CheckMark title="Без спама" accentColor="#00BE57" />
            </div>
            <p>Без спама</p>
          </div>

          <div className={styles.advantage}>
            <div className={styles.check_mark}>
              <CheckMark title="Скидка на заказ" accentColor="#00BE57" />
            </div>
            <p>Скидка на заказ</p>
          </div>
        </div>
      </div>
      <Contact className={styles.contact_wrapper} />
    </div>
  );
};
