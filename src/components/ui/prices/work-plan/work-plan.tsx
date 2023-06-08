import { hoursToWordAndNumber } from "@/utils/utils";
import React from "react";

import styles from "./work-plan.module.css";

type CardProps = {
  className?: string;
  number: number;
  title: string;
  text: string;
  deadline: React.ReactNode;
};

const Card = ({ className, number, title, text, deadline }: CardProps) => {
  return (
    <div className={`${styles.card_container} ${className}`}>
      <div className={styles.card}>
        <div className={`${styles.card_text} ${styles.vertical}`}>
          <h3>{title}</h3> <p>{text}</p>
        </div>
        <div className={`${styles.card_deadline}  ${styles.vertical}`}>{deadline}</div>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

const HorizontalCard = ({ className, number, title, text, deadline }: CardProps) => {
  return (
    <div className={`${styles.card_container} ${className}`}>
      <div className={styles.card_horizontal}>
        <div className={`${styles.card_text} ${styles.horizontal}`}>
          <h3>{title}</h3> <p>{text}</p>
        </div>
        <div className={`${styles.card_deadline}  ${styles.horizontal}`}>{deadline}</div>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

type Props = {
  title: string;
  description: string;
  cards: {
    title: string;
    text: string;
    timeToCompleteInH: number;
  }[];
};

export const WorkPlan = ({ title, description, cards }: Props) => {
  return (
    <section className={styles.work_plan_container}>
      <div className={`${styles.work_plan} dynamic_container`}>
        <h2>{title}</h2>
        <p className="font_h4">{description}</p>

        {cards.length === 2 && (
          <div className={styles.cards_vertical_container}>
            <div className={styles.horizontal_cards}>
              <HorizontalCard
                className={styles.horizontal_card}
                number={1}
                title={cards[0].title}
                text={cards[0].text}
                deadline={
                  <p>
                    от {hoursToWordAndNumber(cards[0].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                    {hoursToWordAndNumber(cards[0].timeToCompleteInH).word}
                  </p>
                }
              />

              <HorizontalCard
                className={styles.horizontal_card}
                number={2}
                title={cards[1].title}
                text={cards[1].text}
                deadline={
                  <p>
                    от {hoursToWordAndNumber(cards[1].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                    {hoursToWordAndNumber(cards[1].timeToCompleteInH).word}
                  </p>
                }
              />
            </div>
          </div>
        )}

        {cards.length >= 3 && (
          <div className={styles.cards_vertical_container}>
            <div className={styles.cards_container}>
              <Card
                className={styles.vertical_card}
                number={1}
                title={cards[0].title}
                text={cards[0].text}
                deadline={
                  <p>
                    от {hoursToWordAndNumber(cards[0].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                    {hoursToWordAndNumber(cards[0].timeToCompleteInH).word}
                  </p>
                }
              />

              <div className={styles.horizontal_cards}>
                <HorizontalCard
                  className={styles.horizontal_card}
                  number={2}
                  title={cards[1].title}
                  text={cards[1].text}
                  deadline={
                    <p>
                      от {hoursToWordAndNumber(cards[1].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                      {hoursToWordAndNumber(cards[1].timeToCompleteInH).word}
                    </p>
                  }
                />

                <HorizontalCard
                  className={styles.horizontal_card}
                  number={3}
                  title={cards[2].title}
                  text={cards[2].text}
                  deadline={
                    <p>
                      от {hoursToWordAndNumber(cards[2].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                      {hoursToWordAndNumber(cards[2].timeToCompleteInH).word}
                    </p>
                  }
                />
              </div>
            </div>
            {cards.length === 4 && (
              <HorizontalCard
                className={styles.horizontal_card}
                number={4}
                title={cards[3].title}
                text={cards[3].text}
                deadline={
                  <p>
                    от {hoursToWordAndNumber(cards[3].timeToCompleteInH).amount} <br className={styles.horizontal_break} />{" "}
                    {hoursToWordAndNumber(cards[3].timeToCompleteInH).word}
                  </p>
                }
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
