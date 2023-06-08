import Link from "next/link";
import React from "react";

import styles from "./logo.module.css";

export const MiniLogo = ({ className, width = 48, height = 48, title, href, target, rel, prefetch = true }: PropsIcons) => {
  return (
    <Link className={className} id={styles.logo_link} href={href} target={target} rel={rel} aria-label={title} prefetch={prefetch}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 175 175"
        width={width}
        height={height}
        role="group"
      >
        <title>{title}</title>

        <path fill="#fff" d="M84 71h15v33H84V71Zm75-46L112 7v35" />
        <path
          fill="#1170EE"
          id={styles.fill_focus}
          d="M123 69H82c-10 0-18 9-18 19s8 17 17 17h31c8 0 13 6 13 13v5c0 7-5 13-13 13l-49-1c-6 0-11-5-11-11V57c0-8 6-15 15-15h51l41-17-41-18H48C28 7 13 22 13 41v89c0 22 17 39 39 39h71c22 0 40-17 40-39v-20c0-23-18-41-40-41Zm-26 32h-9V74h9v27Z"
        />
        <path fill="#fff" fillRule="nonzero" d="m141 23-23-7-5 4 5 5-5 5 5 3 23-7v-3Z" />
      </svg>
    </Link>
  );
};
