import React, { useEffect, useMemo, useRef, useState } from "react";
import { useElementSize } from "usehooks-ts";
import { MemoContents } from "./components/contents/contents";
import { SuggestToBuy } from "@/components/ui/suggest-to-buy/suggest-to-buy";
import { ProjectTypes } from "@/utils/popupOrder/utils";
import { debounce } from "@/utils/utils";

import styles from "./article-full.module.css";

type Props = {
  article: IArticleFull;
};

export const ArticleFull = ({ article }: Props) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const [innerWidthRef, innerDimensions] = useElementSize();
  const [articleHOffsets, setArticleHOffsets] = useState<number[]>([]);
  const [hStartEnd, setHStartEnd] = useState<{ start: number; end: number }[]>([]);

  const measure = useMemo(
    () =>
      debounce(() => {
        if (articleRef.current) {
          const array: number[] = [];
          const itemsArr: { start: number; end: number }[] = [];

          const items = articleRef.current.querySelectorAll<HTMLHeadingElement>(".ck-content h2");

          items.forEach((item) => array.push(item.offsetTop));

          array.push(articleRef.current.offsetTop + articleRef.current.clientHeight);

          for (let i = 1; i < array.length; i++) {
            itemsArr.push({ start: array[i - 1] + 24, end: array[i] - 24 });
          }

          setArticleHOffsets(array);
          setHStartEnd(itemsArr);
        }
      }, 500),
    []
  );

  useEffect(() => {
    if (articleRef.current) {
      measure();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerDimensions.height, innerDimensions.width, articleRef]);

  return (
    <article className={styles.main} ref={innerWidthRef}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className={styles.main_container}>
        <div className={`ck-content ${styles.body}`} ref={articleRef} dangerouslySetInnerHTML={{ __html: article.body }} />
        <MemoContents
          html={article.contents}
          innerDimensions={innerDimensions}
          articleHOffsets={articleHOffsets}
          hStartEnd={hStartEnd}
        />
      </div>
      <SuggestToBuy
        title={article.suggestToBuyText}
        projectType={article.suggestToBuyProjectType as ProjectTypes}
        buttonText={"Оставить заявку"}
      />
    </article>
  );
};
