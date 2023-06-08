import React from "react";
import Image from "next/image";

import OurAdvantagesImg from "@/public/assets/images/pages/home/our-advantages/our-advantages.webp";
import FallbackOurAdvantagesImg from "@/public/assets/images/pages/home/our-advantages/our-advantages.png";

import One from "@/public/assets/images/pages/home/our-advantages/1.webp";
import OneVideoMov from "@/public/assets/images/pages/home/our-advantages/1.mov";
import OneVideoWebm from "@/public/assets/images/pages/home/our-advantages/1.webm";
import FallbackOne from "@/public/assets/images/pages/home/our-advantages/1.png";
import Two from "@/public/assets/images/pages/home/our-advantages/2.webp";
import TwoVideoMov from "@/public/assets/images/pages/home/our-advantages/2.mov";
import TwoVideoWebm from "@/public/assets/images/pages/home/our-advantages/2.webm";
import FallbackTwo from "@/public/assets/images/pages/home/our-advantages/2.png";
import Three from "@/public/assets/images/pages/home/our-advantages/3.webp";
import FallbackThree from "@/public/assets/images/pages/home/our-advantages/3.png";
import ThreeVideoMov from "@/public/assets/images/pages/home/our-advantages/3.mov";
import ThreeVideoWebm from "@/public/assets/images/pages/home/our-advantages/3.webm";
import Four from "@/public/assets/images/pages/home/our-advantages/4.webp";
import FallbackFour from "@/public/assets/images/pages/home/our-advantages/4.png";
import FourVideoMov from "@/public/assets/images/pages/home/our-advantages/4.mov";
import FourVideoWebm from "@/public/assets/images/pages/home/our-advantages/4.webm";

import styles from "./our-advantages.module.css";
import { Card } from "./components/card/card";

type Props = {
  title?: string;
  cards?: {
    title: string;
    text: string;
  }[];
};

export const OurAdvantages = ({ title, cards }: Props) => {
  return (
    <section className={styles.our_advantages}>
      <div className={`${styles.our_advantages_container} dynamic_container`}>
        <h2>{title ?? "Наши преимущества"}</h2>
        <div className={styles.text_image_container}>
          <div className={styles.text}>
            <div className={styles.row}>
              <Card
                title={cards && cards[0] ? cards[0].title : "Лучшие авторы"}
                text={
                  cards && cards[0]
                    ? cards[0].text
                    : "Наш строгий и требовательный отбор авторов позволил нам собрать команду преподавателей с многолетним стажем и студентов-отличников лучших вузов страны. Ваша работа в надежных руках!"
                }
                img={One}
                fallbackImg={FallbackTwo}
                alt={cards ? cards[0].title : "Лучшие авторы"}
                videoMov={TwoVideoMov}
                videoWebm={TwoVideoWebm}
              />
              <Card
                title={cards && cards[1] ? cards[1].title : "Бесплатные правки и доработки"}
                text={
                  cards && cards[1]
                    ? cards[1].text
                    : "Абсолютно любые правки в контексте вашей работы бесплатны без ограничений по времени и количеству"
                }
                img={Two}
                fallbackImg={FallbackOne}
                alt="Бесплатные правки"
                videoMov={OneVideoMov}
                videoWebm={OneVideoWebm}
              />
            </div>
            <div className={styles.row}>
              <Card
                title={cards && cards[2] ? cards[2].title : "Полная анонимность"}
                text={
                  cards && cards[2]
                    ? cards[2].text
                    : "Мы ценим вашу конфиденциальность и безопасность. Поэтому мы не передаем никаких данных о вас и вашем заказе третьим лицам. Вы можете быть уверены, что никто не узнает о том, что вы обратились к нам за помощью"
                }
                img={Three}
                fallbackImg={FallbackThree}
                alt="Анонимность"
                videoMov={ThreeVideoMov}
                videoWebm={ThreeVideoWebm}
              />
              <Card
                title={cards && cards[3] ? cards[3].title : "Гарантия до самой защиты"}
                text={
                  cards && cards[3]
                    ? cards[3].text
                    : "Мы не только предоставляем вам выполненную работу, но и поддерживаем вас до момента ее защиты! Наша поддержка ответит на любые вопросы в любое время."
                }
                img={Four}
                fallbackImg={FallbackFour}
                alt="Гарантия"
                videoMov={FourVideoMov}
                videoWebm={FourVideoWebm}
              />
            </div>
          </div>

          <div className={styles.image_container}>
            <picture>
              <source
                media="(max-width: 1024px)"
                sizes="1px"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
              />
              <Image
                src={OurAdvantagesImg}
                placeholder="blur"
                className={styles.image}
                alt="Наши преимущества"
                sizes="33vw"
                onError={(e) => (e.currentTarget.src = FallbackOurAdvantagesImg.src)}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
