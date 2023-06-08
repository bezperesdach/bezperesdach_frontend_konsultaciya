import React, { memo, useCallback, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { map } from "@/utils/utils";
import { Size } from "./contents";

type Props = {
  contentsWrapperRef: React.RefObject<HTMLDivElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  itemsRef: React.RefObject<HTMLDivElement>;
  innerDimensions: Size;
  contentsItemsHeights: number[];
  articleHOffsets: number[];
  hStartEnd: { start: number; end: number }[];
};

export const ProgressBar = ({
  canvasRef,
  itemsRef,
  articleHOffsets,
  contentsItemsHeights,
  contentsWrapperRef,
  innerDimensions,
  hStartEnd,
}: Props) => {
  const [showReadingBar, setShowReadingBar] = useState(false);
  const windowDimensions = useWindowSize();
  const [offset, setOffset] = useState(0);

  const clearCanvas = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }, []);

  const drawNotch = useCallback(
    (ctx: CanvasRenderingContext2D, offset: number, contentsItemsHeights: number[], articleHOffsets: number[]) => {
      let current = 0;
      contentsItemsHeights.map((_, i) => {
        if (offset > articleHOffsets[i] - 48) {
          current = i;
        }
      });

      ctx.fillStyle = "rgb(16 112 238 / 80%)";
      ctx.fillRect(
        0,
        0,
        8,
        contentsItemsHeights.reduce((prev, curr, i) => (i <= current ? prev + curr : prev + 0), 0)
      );
    },
    []
  );

  const drawBackground = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      offset: number,
      maxWidth: number,
      contentsItemsHeights: number[],
      hStartEnd: { start: number; end: number }[]
    ) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      let startingY = 0;

      contentsItemsHeights.map((_, i) => {
        const width = map(offset, hStartEnd[i].start, hStartEnd[i].end, 0, maxWidth);

        ctx.fillStyle = "rgb(16 112 238 / 10%)";
        ctx.fillRect(8, startingY, width, contentsItemsHeights[i]);

        startingY += contentsItemsHeights[i];
      });
    },
    []
  );

  useEffect(() => {
    const contentsWrapper = contentsWrapperRef.current;
    const canvas = canvasRef.current;
    const items = itemsRef.current;

    if (contentsWrapper && canvas && items && hStartEnd.length > 0) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        if (innerDimensions.width > 960) {
          if (items.offsetWidth !== canvas.width) {
            canvas.width = items.offsetWidth;
          }
          if (items.offsetHeight !== canvas.height) {
            canvas.height = items.offsetHeight;
          }

          if (!showReadingBar) {
            if (offset > hStartEnd[0].start - 36) {
              setShowReadingBar(true);
              canvas.height = items.offsetHeight;
              canvas.width = items.offsetWidth;
            }
          } else {
            if (offset <= hStartEnd[0].start - 36) {
              setShowReadingBar(false);
              clearCanvas(ctx);
            } else {
              drawBackground(ctx, offset, items.offsetWidth, contentsItemsHeights, hStartEnd);
              drawNotch(ctx, offset, contentsItemsHeights, articleHOffsets);
            }
          }
        } else {
          clearCanvas(ctx);
        }
      }
    }
  }, [
    offset,
    innerDimensions.width,
    innerDimensions.height,
    contentsWrapperRef,
    itemsRef,
    canvasRef,
    showReadingBar,
    windowDimensions.height,
    contentsItemsHeights,
    articleHOffsets,
    hStartEnd,
    clearCanvas,
    drawBackground,
    drawNotch,
  ]);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <></>;
};

export const MemoProgressBar = memo(ProgressBar);
