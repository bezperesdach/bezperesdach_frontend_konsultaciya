import React from "react";
import Image from "next/image";
import QuestionCard from "./components/question-card/question-card";

import QuestionsPersonImg from "@/public/assets/images/faq/image.webp";
import FallBackQuestionsPersonImg from "@/public/assets/images/faq/fallback-image.png";

import styles from "./faq.module.css";
import useDeviceDetect from "@/hooks/use-device-detect/use-device-detect";

type Props = {
  title?: string;
  questions: { question: string; answer: React.ReactNode }[];
  questionsLeftLinks?: boolean;
};

export const Faq = ({ title, questions, questionsLeftLinks }: Props) => {
  const { isMobile } = useDeviceDetect();

  return (
    <section className={`${styles.faq_container} dynamic_container`}>
      <div className={styles.faq}>
        <h2>{title ?? "Вопрос-ответ"}</h2>
        <div className={styles.questions_image_container}>
          <div className={styles.questions_container}>
            {questions.map((item, i) => (
              <QuestionCard question={item.question} answer={item.answer} key={i} cardState={i === 0 ?? false} />
            ))}
            <h2 style={{ textAlign: "center", paddingTop: "32px" }}>Остались вопросы?</h2>
            <p className="font_h4" style={{ textAlign: "center" }}>
              Задай их нам лично через{" "}
              <a
                className={styles.blue_text}
                href={isMobile ? "vk://vk.com/im?sel=-217065664" : "https://vk.com/im?sel=-217065664"}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Вконтакте
              </a>{" "}
              или{" "}
              <a
                className={styles.blue_text}
                href={isMobile ? "tg://resolve?domain=bezperesdach_bot" : "https://t.me/bezperesdach_bot"}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Телеграм
              </a>
            </p>
          </div>
          <div className={styles.image_container}>
            <picture>
              <source
                media="(max-width: 1024px)"
                sizes="1px"
                srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
              />
              <Image
                src={QuestionsPersonImg}
                placeholder="blur"
                className={styles.image}
                alt="Вопрос-ответ"
                sizes="33vw"
                onError={(e) => (e.currentTarget.src = FallBackQuestionsPersonImg.src)}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
