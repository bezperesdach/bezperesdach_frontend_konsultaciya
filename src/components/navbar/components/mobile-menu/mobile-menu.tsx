import React, { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

import styles from "../../navbar.module.css";

type Props = {
  mobileMenuRef: React.RefObject<HTMLUListElement>;
  children: React.ReactNode[];
};

export const MobileMenu = ({ mobileMenuRef, children }: Props) => {
  const windowDimensions = useWindowSize();
  const [isOverflown, setIsOverflown] = useState(false);

  const checkForOverflow = () => {
    if (mobileMenuRef.current) {
      if (mobileMenuRef.current.scrollWidth > mobileMenuRef.current.clientWidth) {
        setIsOverflown(true);
      } else {
        setIsOverflown(false);
      }
    }
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      const menuElem = mobileMenuRef.current;

      if (isOverflown) {
        menuElem.classList.add(styles.mobile_menu_overflow);
      } else {
        menuElem.classList.remove(styles.mobile_menu_overflow);
      }
    }
  }, [isOverflown, mobileMenuRef]);

  useEffect(() => {
    checkForOverflow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowDimensions.width]);

  return (
    <ul ref={mobileMenuRef} className={styles.mobile_menu}>
      {children}
      {isOverflown && <div className={styles.overflow_arrow}>{">"}</div>}
    </ul>
  );
};
