import Link from "next/link";
import Image from "next/image";
import React from "react";
import useDeviceDetect from "@/hooks/use-device-detect/use-device-detect";
import urls from "@/utils/urls";
import { useAppDispatch } from "@/store/hooks";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import { MenuItem } from "./components/menu-item/menu-item";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";

import GetPriceImage from "@/public/assets/images/footer/get-price.webp";
import { VkontakteIcon } from "@/icons/vkontakte-icon";
import { TelegramIcon } from "@/icons/telegram-icon";

import styles from "./footer.module.css";

type Props = {
  hideNavigation?: boolean;
};

export const Footer = ({ hideNavigation = false }: Props) => {
  const dispatch = useAppDispatch();
  const { isMobile } = useDeviceDetect();

  return (
    <footer className={styles.footer_container}>
      <div className={`${styles.footer} dynamic_container`}>
        <div className={styles.menu}>
          <div className={styles.first_block}>
            {!hideNavigation && (
              <div className={styles.items}>
                <div className={styles.first_column}>
                  <p className={styles.title}>У нас можно</p>
                  <ul className={styles.list}>
                    <MenuItem href={urls.uslugi.kursovayaRabota}>Заказать курсовую работу</MenuItem>
                    <MenuItem href={urls.uslugi.diplomnayaRabota}>Заказать дипломную работу</MenuItem>
                    <MenuItem href={urls.uslugi.magisterskayaRabota}>Заказать магистерскую диссертацию</MenuItem>
                    <MenuItem href={urls.uslugi.doklad}>Заказать доклад</MenuItem>
                    <MenuItem href={urls.uslugi.referat}>Заказать реферат</MenuItem>
                    <MenuItem href={urls.uslugi.prezentaciya}>Заказать презентацию</MenuItem>
                    <MenuItem href={urls.uslugi.otchetPoPraktike}>Заказать отчет по практике</MenuItem>
                    <MenuItem href={urls.uslugi.konsultaciya}>Получить бесплатную консультацию</MenuItem>
                  </ul>
                </div>
                <div className={styles.second_column}>
                  <p className={styles.title}>Меню</p>
                  <ul className={styles.list}>
                    <MenuItem href={urls.base}>Главная</MenuItem>
                    <MenuItem href={urls.prices}>Все услуги</MenuItem>
                    <MenuItem href={urls.ugolokStudenta.base}>Уголок студента</MenuItem>
                    <MenuItem href={urls.about_us}>О компании</MenuItem>
                    <MenuItem href={urls.work}>Авторам</MenuItem>
                  </ul>
                </div>
              </div>
            )}
            <div className={styles.company_info}>
              <p className={styles.company_name}>
                <span style={{ fontWeight: "bold" }}>Безпересдач</span> - онлайн-проект помощи студентам
              </p>
              <p className={styles.company_copyright}>
                Используя сервис “Безпересдач”, вы принимаете <Link href={urls.agreement}>пользовательское соглашение</Link>, а также{" "}
                <Link href="/assets/documents/processing-policy.pdf">политику обработки персональных данных</Link>
              </p>
            </div>
          </div>
          {!hideNavigation && (
            <div className={styles.get_price_container}>
              <p className={styles.title}>Бесплатная оценка стоимости</p>
              <ButtonOrderPopupLoadingWrapper className={styles.get_price_button} onClick={() => dispatch(setPopupShown(true))}>
                Узнать цену
              </ButtonOrderPopupLoadingWrapper>
              <div className={styles.image_container} onClick={() => dispatch(setPopupShown(true))}>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    sizes="1px"
                    srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
                  />
                  <Image
                    sizes="33vw"
                    src={GetPriceImage}
                    placeholder="blur"
                    className={`${styles.image} no_select image_no_pointer_events`}
                    alt="Узнать цену"
                  />
                </picture>
              </div>
              <div className={styles.socials}>
                <VkontakteIcon
                  href={isMobile ? "vk://vk.com/bezperesdach_official" : "https://vk.com/bezperesdach_official"}
                  title="Группа вконтакте"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                />
                <TelegramIcon
                  href={isMobile ? "tg://resolve?domain=bezperesdach_official" : "https://bezperesdach_official.t.me"}
                  title="Телеграм канал"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                />
              </div>
            </div>
          )}
        </div>
        <p className={styles.legal_notice}>
          Авторы сайта bezperesdach.ru предлагают услуги по подбору, обработке и организации информации по указанной заказчиком теме.
          Результат этой работы не является окончательным научным документом, но может быть использован как источник информации для его
          создания
        </p>
      </div>
    </footer>
  );
};
