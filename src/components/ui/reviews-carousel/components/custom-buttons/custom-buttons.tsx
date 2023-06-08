import { ArrowInCircle } from "@/icons/arrow-in-circle";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { ButtonGroupProps } from "react-multi-carousel";

import styles from "./custom-buttons.module.css";

type Arrow = {
  onClick: () => void;
};

const CustomLeftArrow = ({ onClick }: Arrow) => <i onClick={() => onClick()} className="custom-left-arrow" />;

const CustomRightArrow = ({ onClick }: Arrow) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

interface ButtonsGroup extends ButtonGroupProps {
  avgRating: number;
}

const CustomButtonGroupAsArrows = ({ goToSlide, carouselState, avgRating }: ButtonsGroup) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { totalItems, currentSlide, slidesToShow } = carouselState!;
  const windowDimensions = useWindowSize();
  const [previousWidth, setPreviousWidth] = useState(0);

  const changeSlide = (val: "next" | "previous") => {
    if (goToSlide) {
      if (val === "next") {
        if (currentSlide < totalItems - slidesToShow) {
          goToSlide(currentSlide + slidesToShow);
        }
      } else {
        if (currentSlide >= slidesToShow) {
          goToSlide(currentSlide - slidesToShow);
        }
      }
    }
  };

  useEffect(() => {
    if (windowDimensions.width !== previousWidth) {
      goToSlide && goToSlide(0);
    }

    setPreviousWidth(windowDimensions.width);
  }, [goToSlide, windowDimensions.width, previousWidth]);

  return (
    <div className={styles.custom_buttons}>
      <div>
        <h3 className={styles.avg_rating}>
          Средний рейтинг <span className={`${styles.avg_rating_score} font_h1`}>{avgRating}</span>
        </h3>
      </div>

      {Math.ceil(totalItems / slidesToShow) > 1 && (
        <div className={styles.buttons_container}>
          <button
            className={`${styles.arrow_button} ${currentSlide === 0 ? styles.arrow_button_inactive : ""}`}
            onClick={() => changeSlide("previous")}
          >
            <ArrowInCircle width={48} height={48} title="Прокрутить отзывы назад" />
          </button>

          <p className={`${styles.pages} font_h2`}>
            {currentSlide / slidesToShow + 1}/{Math.ceil(totalItems / slidesToShow)}
          </p>

          <button
            className={`${styles.arrow_button} ${currentSlide === totalItems - slidesToShow ? styles.arrow_button_inactive : ""}`}
            onClick={() => changeSlide("next")}
          >
            <ArrowInCircle width={48} height={48} title="Прокрутить отзывы вперед" orientation="forward" />
          </button>
        </div>
      )}
    </div>
  );
};

export { CustomLeftArrow, CustomRightArrow, CustomButtonGroupAsArrows };
