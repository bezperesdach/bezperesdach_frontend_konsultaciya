import React from "react";
import Carousel from "react-multi-carousel";
import { CustomButtonGroupAsArrows } from "./components/custom-buttons/custom-buttons";
import { ReviewCard } from "./components/review-card/review-card";

import styles from "./reviews-carousel.module.css";
import "react-multi-carousel/lib/styles.css";

type Props = {
  randomReviews: RandomReviews;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1150 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1150, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const ReviewsCarousel = ({ randomReviews }: Props) => {
  return (
    <div className={styles.reviews_block}>
      <div className={styles.carousel_container}>
        <Carousel
          arrows={false}
          swipeable={false}
          draggable={false}
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroupAsArrows avgRating={randomReviews.avgRating} />}
          containerClass={styles.carousel}
          itemClass={styles.review_container}
          responsive={responsive}
          slidesToSlide={3}
        >
          {randomReviews.reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                name={review.name}
                text={review.text}
                avatar={review.avatar}
                date={review.date}
                rating={review.rating}
                projectType={review.projectType}
                anonymous={review.anonymous}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
