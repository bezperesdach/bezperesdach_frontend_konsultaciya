import Link from "next/link";
import React from "react";
import { generateJsonLdFromCrumbs, parseUrlToCrumbs } from "@/utils/bread-crumbs/utils";
import StructuredData from "../structured-data/structured-data";

import styles from "./next-bread-crumbs.module.css";

type Props = {
  url: string;
  activeItem?: string;
};

export const NextBreadCrumbs = ({ url, activeItem }: Props) => {
  const crumbs = parseUrlToCrumbs(url, activeItem);

  const dataStructure = generateJsonLdFromCrumbs(crumbs);

  return (
    <>
      <StructuredData data={dataStructure} nameKey="structured-data-navigation" />

      <ul className={styles.bread_crumbs}>
        {crumbs.map((crumb, i) => (
          <li key={i}>
            {i < crumbs.length - 1 ? (
              <Link href={crumb.url}>
                <span>{crumb.name}</span>
              </Link>
            ) : (
              crumb.name
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
