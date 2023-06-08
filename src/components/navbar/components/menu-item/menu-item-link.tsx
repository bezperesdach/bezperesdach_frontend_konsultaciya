import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./menu-item.module.css";

type Props = {
  url: string;
  allowedUrl?: (url: string) => boolean;
  reverseUrl?: boolean;
  children: string;
};

export const MenuItemLink = ({ url, allowedUrl, reverseUrl = false, children }: Props) => {
  const router = useRouter();

  let relativeURL = "";

  const slug = router.query.slug;

  if (slug) {
    relativeURL = router.pathname.replace("[slug]", slug as string);
  } else {
    relativeURL = router.pathname;
  }

  const currentUrl = allowedUrl && slug ? allowedUrl(slug as string) : relativeURL === url;

  return (
    <>
      {reverseUrl ? (
        <>
          {relativeURL != url && (
            <li className={`${styles.list} no_select`}>
              {currentUrl ? (
                <span>{children}</span>
              ) : (
                <Link prefetch={false} className={styles.hover_select} href={url}>
                  {children}
                </Link>
              )}
            </li>
          )}
        </>
      ) : (
        <li className={`${styles.list} no_select`}>
          {currentUrl ? (
            <span>{children}</span>
          ) : (
            <Link prefetch={false} className={styles.hover_select} href={url}>
              {children}
            </Link>
          )}
          {currentUrl && <div className={styles.line} />}
        </li>
      )}
    </>
  );
};
