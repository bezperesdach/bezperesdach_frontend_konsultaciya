import Image from "next/image";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import { ProjectTypes } from "@/utils/popupOrder/utils";

import imageBackground from "@/public/assets/images/suggest-to-order/suggest-to-order-background.webp";

import styles from "./sidebar-suggest-konsultaciya.module.css";

type Props = {
  closeSidebarOpenOrderPopup: (item: ProjectTypes) => void;
};

const SidebarSuggestKonsultaciya = ({ closeSidebarOpenOrderPopup }: Props) => {
  return (
    <div className={styles.inner}>
      <p className={styles.title}>Не нашли нужную услугу?</p>
      <p className={styles.subtitle}>
        Не переживайте, мы выполняем все студенческие работы <br />
        <br />
        Воспользуйтесь онлайн консультацией чтобы узнать стоимость выполнения своей работы
      </p>
      <ButtonOrderPopupLoadingWrapper
        className={styles.button}
        onClick={() => closeSidebarOpenOrderPopup("konsultaciya")}
        borderRadius={8}
      >
        Узнать цену
      </ButtonOrderPopupLoadingWrapper>
      <div className={styles.image_container}>
        <Image src={imageBackground} className={styles.image} alt="фон" />
      </div>
    </div>
  );
};

export default SidebarSuggestKonsultaciya;
