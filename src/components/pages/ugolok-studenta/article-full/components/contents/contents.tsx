import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { MemoProgressBar } from "./progress-bar";
import { debounce } from "@/utils/utils";

import styles from "../../article-full.module.css";
import { useAppSelector } from "@/store/hooks";

export type Size = {
  width: number;
  height: number;
};

type Props = {
  html: string;
  innerDimensions: Size;
  articleHOffsets: number[];
  hStartEnd: { start: number; end: number }[];
};

export const Contents = ({ html, innerDimensions, articleHOffsets, hStartEnd }: Props) => {
  const navbarShown = useAppSelector((state) => state.generalReducer.navbarShown);
  const contentsWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const debouncedDimensions = useDebounce(innerDimensions, 1000);
  const [contentsItemsHeights, setContentsItemsHeights] = useState<number[]>([]);

  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const measure = useMemo(
    () =>
      debounce(() => {
        if (itemsRef.current) {
          const items: number[] = [];
          itemsRef.current.querySelectorAll("li").forEach((item) => items.push(item.offsetHeight));
          setContentsItemsHeights(items);
        }
      }, 500),
    []
  );

  useEffect(() => {
    if (itemsRef.current) {
      measure();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedDimensions.height, debouncedDimensions.width, itemsRef]);

  return (
    <div
      className={`${styles.contents_wrapper} ${navbarShown ? styles.contents_navbar_padding : ""}`}
      ref={contentsWrapperRef} /* style={{ borderLeft: "2px dashed rgb(39 52 67 / 30%)" }} */
    >
      <div className={styles.contents_container}>
        <h2 className={styles.contents_title}>Содержание</h2>

        <input
          className={styles.checkbox}
          type="checkbox"
          name="содержание"
          id="show_contents"
          checked={mobileMenuShown}
          onChange={() => setMobileMenuShown(!mobileMenuShown)}
        />
        <label className={styles.label} htmlFor="show_contents" />
      </div>
      <div className={`${styles.items_wrapper} ${!mobileMenuShown ? styles.items_wrapper_hidden : ""}`}>
        <div className={styles.contents} ref={itemsRef} dangerouslySetInnerHTML={{ __html: html }} />
        <canvas className={styles.canvas_progress_bar} ref={canvasRef}>
          <MemoProgressBar
            itemsRef={itemsRef}
            contentsWrapperRef={contentsWrapperRef}
            canvasRef={canvasRef}
            innerDimensions={innerDimensions}
            articleHOffsets={articleHOffsets}
            contentsItemsHeights={contentsItemsHeights}
            hStartEnd={hStartEnd}
          />
        </canvas>
      </div>
    </div>
  );
};

export const MemoContents = memo(Contents);
