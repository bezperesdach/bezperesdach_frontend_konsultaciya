// import Link from "next/link";
import React from "react";
import { getProjectTypeOption } from "@/utils/popupOrder/utils";
import Link from "next/link";
import { uslugaPageExists } from "@/utils/urls";

import styles from "./tags.module.css";

type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => {
  if (tags && tags.length > 0) {
    return (
      <ul className={styles.tags}>
        {tags.map((tag) => {
          const foundTag = getProjectTypeOption(tag);

          return foundTag ? (
            <li className={styles.tag} key={tag}>
              {uslugaPageExists(tag) ? <Link href={"/prices/" + tag}>{foundTag}</Link> : <p>{foundTag}</p>}
            </li>
          ) : null;
        })}
      </ul>
    );
  }
  return null;
};
