import React, { useEffect, useState, useRef } from "react";
import styles from "@/components/navbar/navbar.module.css";
import { useAppDispatch } from "@/store/hooks";
import { useDebounce } from "usehooks-ts";
import { setNavbarState } from "@/store/reducers/generalReducer";

type Props = {
  navbar: React.RefObject<HTMLDivElement>;
};

export const useAnimateNavbar = ({ navbar }: Props) => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean | null>(null);
  const debouncedShow = useDebounce(show, 160);
  const lastScrollY = useRef(0);

  useEffect(() => {
    dispatch(setNavbarState(debouncedShow));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedShow]);

  useEffect(() => {
    if (navbar.current) {
      if (show === null) {
        navbar.current.className = styles.navbar_container;
      }

      if (show) {
        if (navbar.current.classList.contains(styles.hidden)) {
          navbar.current.classList.replace(styles.hidden, styles.show);
        } else {
          navbar.current.classList.add(styles.fixed);
          setTimeout(() => navbar.current?.classList.add(styles.show), 100);
        }
      }
      if (show === false) {
        if (navbar.current.classList.contains(styles.show)) {
          navbar.current.classList.replace(styles.show, styles.hidden);
        }
      }
    }
  }, [navbar, show]);

  const controlNavbar = () => {
    if (window.scrollY > 80) {
      if (window.scrollY - lastScrollY.current > 4) {
        if (show || show === null) {
          setShow(false);
        }
      } else if (window.scrollY - lastScrollY.current < -4) {
        if (!show) {
          setShow(true);
        }
      }
    } else {
      if (window.scrollY - 8 <= 0) {
        setShow(null);
      }
    }

    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
