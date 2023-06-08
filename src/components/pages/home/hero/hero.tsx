import React, { useState } from "react";
import Image from "next/image";
import { ButtonOrderPopupLoadingWrapper } from "@/components/create-order-popup/components/button-order-popup-loading-wrapper/button-order-popup-loading-wrapper";
import VideoComponent from "@/components/video-component/video-component";

import { KursovayaUslugaIcon } from "@/icons/uslugi/kursovaya-usluga-icon";
import { DiplomnayaUslugaIcon } from "@/icons/uslugi/diplomnaya-usluga-icon";
import Link from "next/link";
import urls from "@/utils/urls";
import { MagisterskayaUslugaIcon } from "@/icons/uslugi/magisterskaya-usluga-icon";
import { ReferatUslugaIcon } from "@/icons/uslugi/referat-usluga-icon";
import { DokladUslugaIcon } from "@/icons/uslugi/doklad-usluga-icon";
import { OtchetPoPraktikeUslugaIcon } from "@/icons/uslugi/otchet-po-praktike-usluga-icon";
import { PrezentaciyaUslugaIcon } from "@/icons/uslugi/prezentaciya-usluga-icon";
import { KonsultaciyaUslugaIcon } from "@/icons/uslugi/konsultaciya-usluga-icon";

import { useAppDispatch } from "@/store/hooks";
import { resetStateToStart, setPopupShown } from "@/store/reducers/orderPopupReducer";

import HeroImg from "@/public/assets/images/pages/home/hero/hero.webp";
import FallbackHeroImg from "@/public/assets/images/pages/home/hero/fallback-hero.png";
import HeroMov from "@/public/assets/images/pages/home/hero/hero.mov";
import HeroWebm from "@/public/assets/images/pages/home/hero/hero.webm";

import styles from "./hero.module.css";
import { ProjectTypes } from "@/utils/popupOrder/utils";

type Props = {
  heroPoints?: string[];
  uslugiTitle?: string;
  uslugiButtons?: {
    name: string | React.ReactElement<HTMLParagraphElement>;
    id: ProjectTypes;
    icon: React.ReactNode;
    priceStart: number;
  }[];
  additionalMessage?: string | React.ReactElement<HTMLParagraphElement>;
};

export const Hero = ({ heroPoints, uslugiTitle, uslugiButtons, additionalMessage }: Props) => {
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.hero}>
      <div className={`${styles.hero_container} dynamic_container`}>
        <div className={styles.container}>
          <div className={styles.text}>
            <div className={styles.text_main}>
              <h1>Сервис онлайн помощи студентам</h1>
              {heroPoints ? (
                heroPoints.map((point) => (
                  <p key={point} className="font_h4">
                    {point}
                  </p>
                ))
              ) : (
                <>
                  <p className="font_h4">Помогаем студентам по всей России получать отличные оценки. </p>
                  <p className="font_h4"> Соблюдаем все ГОСТы и методические рекомендации ВУЗов.</p>
                  <p className="font_h4">Бесплатные консультации по всем видам работ!</p>
                </>
              )}

              <ButtonOrderPopupLoadingWrapper onClick={() => dispatch(setPopupShown(true))}>
                Оставить заявку
              </ButtonOrderPopupLoadingWrapper>
            </div>
          </div>
          <div className={styles.image_container}>
            <Image
              src={HeroImg}
              placeholder="blur"
              className={styles.image}
              alt="hero"
              priority={true}
              sizes="(max-width:560px) 100vw, (max-width:768px) 80vw, (max-width: 1024px) 50vw,
          33vw"
              style={{ visibility: !isVisible ? "visible" : "hidden" }}
              onError={(e) => (e.currentTarget.src = FallbackHeroImg.src)}
            />
            <VideoComponent
              className={styles.animated_image}
              videoMov={HeroMov}
              videoWebm={HeroWebm}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </div>
        </div>
        <div className={styles.uslugi}>
          <h2 className="font_h2">{uslugiTitle ?? "Популярные услуги"}</h2>
          <div className={styles.uslugi_container} style={uslugiButtons ? { marginTop: "32px" } : {}}>
            {uslugiButtons ? (
              uslugiButtons.map((usluga) => (
                <button
                  className={styles.usluga}
                  key={usluga.id}
                  style={{ cursor: "pointer", background: "transparent", border: "unset" }}
                  onClick={() => {
                    dispatch(resetStateToStart(usluga.id));
                    dispatch(setPopupShown(true));
                  }}
                >
                  <span className={styles.usluga_icon}>{usluga.icon}</span>
                  {typeof usluga.name === "string" ? <p>{usluga.name}</p> : usluga.name}
                  {/* <p style={{ marginTop: "4px", color: "var(--global-color-blue)", opacity: "0.6" }}>от {usluga.priceStart} руб.</p> */}
                </button>
              ))
            ) : (
              <>
                <Link className={styles.usluga} href={urls.uslugi.kursovayaRabota}>
                  <span className={styles.usluga_icon}>
                    <KursovayaUslugaIcon height={80} accentColor="#ABCFFF" title="Курсовая работа" />
                  </span>
                  <p>Курсовая</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.diplomnayaRabota}>
                  <span className={styles.usluga_icon}>
                    <DiplomnayaUslugaIcon height={80} accentColor="#E9FFBB" title="Дипломная работа" />
                  </span>
                  <p>Дипломная</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.magisterskayaRabota}>
                  <span className={styles.usluga_icon}>
                    <MagisterskayaUslugaIcon height={80} accentColor="#FFDFAE" title="Магистерская работа" />
                  </span>
                  <p>Магистерская</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.referat}>
                  <span className={styles.usluga_icon}>
                    <ReferatUslugaIcon height={80} accentColor="#CAF7FD" title="Реферат" />
                  </span>
                  <p>Реферат</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.doklad}>
                  <span className={styles.usluga_icon}>
                    <DokladUslugaIcon height={80} accentColor="#FEDFFF" title="Доклад" />
                  </span>
                  <p>Доклад</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.otchetPoPraktike}>
                  <span className={styles.usluga_icon}>
                    <OtchetPoPraktikeUslugaIcon height={80} accentColor="#D2D7FF" title="Отчет по практике" />
                  </span>
                  <p>
                    Отчет <br />
                    по практике
                  </p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.prezentaciya}>
                  <span className={styles.usluga_icon}>
                    <PrezentaciyaUslugaIcon height={80} accentColor="#FFE1E3" title="Презентация" />
                  </span>
                  <p>Презентация</p>
                </Link>

                <Link className={styles.usluga} href={urls.uslugi.konsultaciya}>
                  <span className={styles.usluga_icon}>
                    <KonsultaciyaUslugaIcon height={80} accentColor="#CFFFEE" title="Онлайн консультация" />
                  </span>
                  <p>
                    Онлайн <br /> консультация
                  </p>
                </Link>
              </>
            )}
          </div>
          {additionalMessage && <div style={{ marginTop: "32px" }}>{additionalMessage}</div>}
        </div>
      </div>
    </section>
  );
};
