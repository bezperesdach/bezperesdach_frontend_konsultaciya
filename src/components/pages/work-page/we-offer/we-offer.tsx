import Image, { StaticImageData } from "next/image";

import styles from "./we-offer.module.css";

type CardProps = {
  className?: string;
  title: string;
  text: string;
  image: StaticImageData;
  fallBackImage: StaticImageData;
};

const Card = ({ className, title, text, image, fallBackImage }: CardProps) => {
  return (
    <div className={`${styles.card_container} ${className}`}>
      <div className={styles.card}>
        <div className={`${styles.card_text} ${styles.vertical}`}>
          <h3>{title}</h3> <p>{text}</p>
        </div>
        <div className={styles.image_container}>
          <Image
            src={image}
            placeholder="blur"
            className={styles.image}
            alt="иконка"
            onError={(e) => (e.currentTarget.src = fallBackImage.src)}
          />
        </div>
      </div>
    </div>
  );
};

const HorizontalCard = ({ className, title, text, image, fallBackImage }: CardProps) => {
  return (
    <div className={`${styles.card_container} ${className}`}>
      <div className={styles.card_horizontal}>
        <div className={`${styles.card_text} ${styles.horizontal}`}>
          <h3>{title}</h3> <p>{text}</p>
        </div>
        <div className={styles.image_container}>
          <Image
            src={image}
            placeholder="blur"
            className={styles.image}
            alt="иконка"
            onError={(e) => (e.currentTarget.src = fallBackImage.src)}
          />
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
    image: StaticImageData;
    fallBackImage: StaticImageData;
  }[];
};

const WeOffer = ({ title, description, cards }: Props) => {
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
                title={cards[0].title}
                text={cards[0].text}
                image={cards[0].image}
                fallBackImage={cards[0].fallBackImage}
              />

              <HorizontalCard
                className={styles.horizontal_card}
                title={cards[1].title}
                text={cards[1].text}
                image={cards[1].image}
                fallBackImage={cards[1].fallBackImage}
              />
            </div>
          </div>
        )}

        {cards.length >= 3 && (
          <div className={styles.cards_vertical_container}>
            <div className={styles.cards_container}>
              <Card
                className={styles.vertical_card}
                title={cards[0].title}
                text={cards[0].text}
                image={cards[0].image}
                fallBackImage={cards[0].fallBackImage}
              />

              <div className={styles.horizontal_cards}>
                <HorizontalCard
                  className={styles.horizontal_card}
                  title={cards[1].title}
                  text={cards[1].text}
                  image={cards[1].image}
                  fallBackImage={cards[1].fallBackImage}
                />

                <HorizontalCard
                  className={styles.horizontal_card}
                  title={cards[2].title}
                  text={cards[2].text}
                  image={cards[2].image}
                  fallBackImage={cards[2].fallBackImage}
                />
              </div>
            </div>
            {cards.length === 4 && (
              <HorizontalCard
                className={styles.horizontal_card}
                title={cards[3].title}
                text={cards[3].text}
                image={cards[3].image}
                fallBackImage={cards[3].fallBackImage}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default WeOffer;
