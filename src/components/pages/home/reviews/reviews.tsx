import { ReviewsCarousel } from "@/components/ui/reviews-carousel/reviews-carousel";
import React from "react";

import styles from "./reviews.module.css";

type Props = {
  randomReviews: RandomReviews;
};

export const Reviews = ({ randomReviews }: Props) => {
  return (
    <section className={`${styles.reviews} dynamic_container`}>
      <h2>Отзывы</h2>
      <ReviewsCarousel randomReviews={randomReviews} />
    </section>
  );
};
