import React from "react";

export const NauchnayaStatyaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 80" fill="none" role="group">
      <title>{title}</title>

      <path
        fill="#fff"
        stroke="#273444"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M56.37 77.38c7.65-21.02 15.21-55.31 16.62-61.17.75-3.11-44.5-4.12-47.46-.24C23.97 18.01.57 67.4.86 70.6l2.55 5.25s49.72 2.64 52.96 1.53Z"
      />
      <path
        fill="#000"
        d="M4.66 67.79c-3.25-.16.72 6.92 1.19 6.93 9.34.19 49.25 2.4 50.35 1.34s-.73-5.01-1.6-5.28c-1.54-.48-46.09-2.8-49.94-2.99Z"
        opacity=".1"
      />
      <path
        fill="#fff"
        stroke="#273444"
        strokeWidth={strokeWidth / 2}
        strokeMiterlimit="10"
        d="M78.38 3.89 58.72 71.02 6.46 69.67 28.47 3.26l49.91.63z"
      />
      <path
        fill="#fff"
        stroke="#273444"
        strokeWidth={strokeWidth / 2}
        strokeMiterlimit="10"
        d="M75.79 6.75 56.13 73.88 3.86 72.53 25.88 6.12l49.91.63z"
      />
      <path
        fill="#fff"
        stroke="#273444"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M22.96 10.12C18.3 8.96 2.46 64.95.86 70.6c0 0 45.83 1.25 50.85 1.96 4.1.58 18.68-57.34 18.73-61.66.04-2.72-44.04.07-47.48-.78Z"
      />
      <path
        fill="#000"
        d="M28.21 19.28c-2.4 1.94-6.81 13.89-4.84 15.35 3.2 2.38 31.05 1.88 33.32 1.82s4.59-16.67 3.58-17.17c-4.02-1.97-29.86-1.77-32.06 0Z"
        opacity=".1"
      />
      <path
        fill={accentColor ?? "#fff"}
        stroke="#273444"
        strokeMiterlimit="10"
        d="M27.3 19.44s-4.24 9.83-4.42 12.29 19.54 1.04 31.49 1.58c0 0 4.58-12.45 2.76-13.87s-26.52.53-29.83 0Z"
      />
    </svg>
  );
};
