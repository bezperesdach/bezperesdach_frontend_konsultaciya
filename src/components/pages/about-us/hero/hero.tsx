import React from "react";
import Image from "next/image";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";

import HeroImg from "@/public/assets/images/pages/about-us/hero/hero.webp";
import FallbackHeroImg from "@/public/assets/images/pages/about-us/hero/hero.png";

import styles from "./hero.module.css";

export const AboutUsHero = () => {
  return (
    <div className={styles.about_us}>
      <div className={`${styles.container} dynamic_container`}>
        <div className={styles.text}>
          <div className={styles.text_main}>
            <NextBreadCrumbs url="/about_us" />
            <h1>О сервисе Безпересдач</h1>
            <p className={styles.about}>
              Онлайн-сервис &ldquo;Безпересдач&rdquo; - это команда опытных преподавателей, которые знают своё дело и любят помогать
              студентам с проблемами в учебе.
            </p>
            <p className={styles.about}>
              На нашем сайте вы можете оставить заявку на выполнение реферата, доклада, презентации, курсовой работы, дипломной работы
              или любой другой студенческой работы. Мы проведём оценку стоимости выполнения и ответим вам по выбранному методу связи в
              кратчайшие сроки
            </p>
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
            onError={(e) => (e.currentTarget.src = FallbackHeroImg.src)}
          />
        </div>
      </div>
    </div>
  );
};
