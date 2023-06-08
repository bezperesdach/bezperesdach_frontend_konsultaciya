import React from "react";
import Image from "next/image";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";

import HeroImg from "@/public/assets/images/pages/work/hero/hero.webp";
import FallbackHeroImg from "@/public/assets/images/pages/work/hero/hero.png";

import styles from "./hero.module.css";

const WorkHero = () => {
  return (
    <div className={styles.about_us}>
      <div className={`${styles.container} dynamic_container`}>
        <div className={styles.text}>
          <div className={styles.text_main}>
            <NextBreadCrumbs url="/work" />
            <h1>Стань автором студенческих работ, зарабатывай вместе с Безпересдач</h1>
            <p className={styles.about}>Мы постоянно развиваемся и нам всегда нужны ответственные и квалифицированные исполнители</p>
            <p className={styles.about}>Стань частью нашей команды и начни зарабатывать удаленно своими знаниями</p>
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

export default WorkHero;
