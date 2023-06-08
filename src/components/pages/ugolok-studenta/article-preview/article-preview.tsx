/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TimeToCompleteIcon } from "@/icons/time-to-complete-icon";
import { DateIcon } from "@/icons/date-icon";
import { getFullDateStr } from "@/utils/utils";
import Link from "next/link";
import { Tags } from "../components/tags/tags";
import { DateUpdateIcon } from "@/icons/date-update-icon";

import styles from "./article-preview.module.css";

type Props = {
  title: string;
  description: string;
  previewImageUrl: string;
  tags: string[];
  url: string;
  timeToRead: number;
  creationDate: Date;
  updateDate?: Date;
};

const ArticlePreview = ({ title, description, previewImageUrl, tags, timeToRead, url, creationDate, updateDate }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <img src={previewImageUrl} className={`${styles.image} no_select image_no_pointer_events`} alt="thumbnail" />

        <div className={styles.load_wrapper}>
          <div className={styles.image_loading} />
        </div>
      </div>

      <div className={styles.data}>
        <h2 className={styles.title}>{title}</h2>
        <Tags tags={tags} />

        <p className={styles.description}>{description}</p>

        <div className={styles.info_container}>
          <div className={styles.info}>
            <Link href={url} className={styles.read}>
              Подробнее
            </Link>
            <div>
              <TimeToCompleteIcon width={24} height={24} title="Время чтения" />
              <p>{timeToRead} мин.</p>
            </div>
            <div className={styles.date}>
              <div>
                <DateIcon width={24} height={24} title="Дата публикации" />
                <p>{getFullDateStr(creationDate.toLocaleDateString("ru-RU"))}</p>
              </div>
              {updateDate && (
                <div>
                  <DateUpdateIcon width={24} height={24} title="Дата публикации" />
                  <p>{getFullDateStr(updateDate.toLocaleDateString("ru-RU"))}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePreview;
