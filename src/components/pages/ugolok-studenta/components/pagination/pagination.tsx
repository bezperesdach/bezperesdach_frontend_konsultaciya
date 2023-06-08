import React, { useMemo } from "react";
import urls from "@/utils/urls";

import styles from "./pagination.module.css";

type Props = {
  className?: string;
  start: number;
  limit: number;
  total: number;
};

export const Pagination = ({ className, start, limit, total }: Props) => {
  const pages = useMemo(() => {
    const links = [];
    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.ceil(start === 0 ? 1 : start / limit);

    if (currentPage > 2) {
      links.push(
        <li key={0}>
          <a className={`${styles.link} ${styles.inactive}`} href={`${urls.host}${urls.ugolokStudenta.base}`}>
            {1}
          </a>
          <hr className={styles.separator} />
        </li>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      if (Math.abs(i - currentPage) < 2) {
        links.push(
          <li key={i}>
            <a
              className={`${styles.link} ${i === currentPage ? styles.active : styles.inactive}`}
              href={`${urls.host}${urls.ugolokStudenta.base}/page/${i}`}
            >
              {i}
            </a>
          </li>
        );
      }
    }

    if (currentPage < totalPages - 1) {
      links.push(
        <li key={totalPages}>
          <hr className={styles.separator} />
          <a className={`${styles.link} ${styles.inactive}`} href={`${urls.host}${urls.ugolokStudenta.base}/page/${pages}`}>
            {totalPages}
          </a>
        </li>
      );
    }

    return links;
  }, [start, limit, total]);

  return (
    <nav className={className}>
      <ol className={styles.main}>{pages}</ol>
    </nav>
  );
};
