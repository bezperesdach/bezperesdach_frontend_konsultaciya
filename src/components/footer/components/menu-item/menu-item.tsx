import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../../footer.module.css";

type Props = {
  href: string;
  children: string;
};

export const MenuItem = ({ href, children }: Props) => {
  const router = useRouter();

  let relativeURL = "";

  const slug = router.query.slug;

  if (slug) {
    relativeURL = router.pathname.replace("[slug]", slug as string);
  } else {
    relativeURL = router.pathname;
  }

  const currentUrl = relativeURL === href;

  return (
    <>
      <li className={`${currentUrl && styles.inactive_link}`}>
        {currentUrl ? (
          <span className={styles.hover_select}>{children}</span>
        ) : (
          <Link prefetch={false} className={styles.hover_select} href={href}>
            {children}
          </Link>
        )}
      </li>
    </>
  );
};
