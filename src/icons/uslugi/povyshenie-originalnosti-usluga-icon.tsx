<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 71"></svg>;

import React from "react";

export const PovyshenieOriginalnostiUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 70 71" fill="none" role="group">
      <title>{title}</title>

      <path
        fill={accentColor ?? "#fff"}
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M13.1 12.01c-3.16-.2-6.65 2.72-6.53 6.2.1 2.85 2.6 5.07 4.87 5.51 3.42.65 7.41-2.51 7.31-6.08-.08-2.95-2.94-5.45-5.65-5.62Zm18.65.15C28.88 13.48 6.59 53.58 8.03 56.77c1.06 2.33 4.13 2.27 4.75 2.22 2.67-.24 23.9-42.9 24.53-44.62.98-2.66-4.92-2.5-5.56-2.2Zm.86 29.32c-5.31 0-6.21 4.56-6.09 8.04.1 2.85 2.6 5.07 4.87 5.51 3.42.65 7.41-2.51 7.31-6.08-.08-2.95-.63-7.46-6.09-7.46Z"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M55.62 1.94c-2.71-.92-15.05 21.18-12.67 22.9.86.62 2.71-1.52 5.36-3.43 1.51 10.85-.15 43.91 2.15 43.61 3.37-.44 9.32-1.89 9.32-1.89-.54-4-.63-35.61-.49-43.38 3.12 1.6 4.7 4.53 5.67 3.95 2.34-1.39-6.72-20.88-9.34-21.77Z"
      />
      <path
        fill="#000"
        d="M56.96 19.48c-4.6 2.33 1.65 23.56-1.87 38.49-1.06 4.48-5.26 5.9-4.62 7.06.66 1.19 9.32-1.89 9.32-1.89.02-3.16-.75-38.19-.49-43.38.04-.85-1.61-.65-2.34-.28Z"
        opacity=".1"
      />
    </svg>
  );
};
