import { useState } from "react";
import styles from "./question-card.module.css";
import classNames from "classnames";

type Props = {
  question: string;
  answer: React.ReactNode;
  cardState?: boolean;
};

const QuestionCard = ({ question, answer, cardState = false }: Props) => {
  const [cardOpened, setCardOpened] = useState(cardState);

  return (
    <div className={styles.question_details}>
      <div>
        <div className={styles.question_summary} onClick={() => setCardOpened(!cardOpened)}>
          <h2>
            <button className={styles.question_title_button} aria-expanded={cardOpened}>
              {question}
            </button>
          </h2>

          <svg
            className={classNames(styles.card_button_icon, { [styles.card_button_icon_opened]: cardOpened })}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            width={48}
            height={48}
            style={!cardOpened ? { transition: "all 150ms ease-in-out" } : {}}
          >
            <circle cx="32" cy="32" r="32" fill="#fff" />
            <path stroke="#090B0C" d="M13.5 31.5h37m-18-18v37" />
          </svg>
        </div>
        <div
          className={styles.question_answer}
          aria-hidden={!cardOpened}
          role="region"
          aria-labelledby="panel2-title"
          style={!cardOpened ? { transition: "grid-template-rows 250ms ease-in-out", opacity: 0 } : {}}
        >
          <div aria-disabled={!cardOpened}>{typeof answer === "string" ? <p>{answer}</p> : answer}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
