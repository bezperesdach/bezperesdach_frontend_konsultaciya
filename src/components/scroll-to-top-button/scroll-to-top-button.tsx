import React, { useEffect, useRef, useState } from "react";

import styles from "./scroll-to-top-button.module.css";

export const ScrollTopButton = () => {
  const [isVisible, setVisible] = useState(false);

  const lastScrollY = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showHideButton = () => {
    lastScrollY.current = window.scrollY;

    const currentPosInPercents = Math.trunc(((lastScrollY.current + window.innerHeight) / document.body.offsetHeight) * 100);

    if (lastScrollY.current > 1000 || currentPosInPercents > 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showHideButton, { passive: true });

    return () => {
      window.removeEventListener("scroll", showHideButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div className={`${styles.scroll_top_wrap} ${isVisible ? styles.visible : styles.hidden}`}>
      <a role="button" aria-label="Scroll to top" onClick={scrollToTop}>
        <div className={styles.svg_wrap}>
          <svg viewBox="0 0 48 48" width="48px" height="48px" xmlns="http://www.w3.org/2000/svg">
            <path id={styles.scroll_top_arrow} d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
};
