import React from "react";

export const ReshenieZadachUslugaIcon = ({
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
        fill="#fff"
        stroke="#273444"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M5.57 18.58c-.7 1.3-2.26 5.61-3.81 9.44-.45 1.11 11.77 5.89 11.98 5.16.61-2.14-1.95-6.68-.28-8.01 1.6-1.27 6.28-1.37 7.26 1.05.84 2.1-2.14 7.95-1.32 10.12 0 0 5.88 3.07 6.6 2.77 1.34-.56 3.91-8.12 4.56-10.17.47-1.49 3.98-3.14 4.14-.32.12 2.24 2.69 2.8 4.43 2.03 2.35-1.04 2.91-3.98 2.64-5.37-.2-1-2.23-4.21-5.07-2.38-1.71 1.09-2.95-.02-3.4-1.22-.68-1.84 2.29-5.72 3.55-8.27.35-.72-8.46-5.17-9.04-4.46-.7.87 0 5.04-2.94 5.7-2.31.52-5.29-1.07-5.89-3.09-.71-2.4.4-4.34 1.5-5.85.66-.91-6.36-3.44-8.41-3.59l-6.5 16.46Z"
      />
      <path
        fill={accentColor ?? "#fff"}
        stroke="#273444"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M51.64 65.29c-1.57 1.79-3.84 4.34-5.45 4.3-.86-.02-5.43-5.74-5.43-5.74l-4.31-5.72c-.45-.7-10.75-9.64-9.8-10.56 3.28-3.17 6.77-6.84 8.06-7.83l1.42-1.4c1.64-.48 3.94-.02 3.1 2.21-.87 2.32 1.47 4.03 3.57 4.03 2.84 0 4.72-2.73 5.06-4.25.25-1.1-.37-5.24-4.06-4.67-1.87.29-2.69-.86-2.86-2.08L48.61 26c2.01 1.07 10.6 9.59 9.53 10.21-1.78 1.04-5.98 1.95-6.33 4.69-.3 2.32 1.75 6.06 4.32 6.56 3.26.64 6.13-4.85 7.23-5.42.91-.46 5.93 5.84 5.25 6.41-2.41 2.02-8.96 9.59-10.63 10.97l-6.33 5.86Z"
      />
      <path
        fill="#000"
        d="M31.2 44.37c.68.36-.51 2.13.13 4.38.7 2.48 6.18 6.24 7.38 7.25 1.1.93 3.17 6.51 8.13 6.5 3.86 0 7.33-1.82 7.96-1.04.87 1.08-7.52 8.85-8.77 7.72-3.22-2.93-16.45-18.43-19.24-20.9-1.78-1.58 3.52-4.38 4.42-3.9Zm3.04-26.64c-.77.05-.18-3.26-1.9-4.84-1.9-1.74-5.41 5.85-10.55 3.91-7.31-2.76-3.74-13.34-7.95-10.72-3.28 2.03-4.29 7.55-5.23 7.22-1.31-.46 1.75-11.48 3.4-11.17 1.49.28 4.83 1.69 8.14 3.18 1.32.59-4.59 5.98 1.55 8.88 7.06 3.35 5.14-5.8 6.4-5.22 3.47 1.59 6.46 2.88 7.85 3.12 2.35.41-.69 5.57-1.71 5.64Z"
        opacity=".1"
      />
    </svg>
  );
};
