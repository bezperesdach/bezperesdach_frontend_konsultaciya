import React from "react";

export const DokladUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 81 74" fill="none" role="group">
      <title>{title}</title>

      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.14 9.32c.71 10.95 1.03 21.27 0 34.1-.75 9.35 0 18.76 0 28.13A180.3 180.3 0 0 1 48.2 68.5c3.72 0 7.74.56 11.46.56V9.32H19.1"
      />
      <path
        fill="#000"
        d="M23.16 63.73H19.1c0-3.83.53-7.7 0-11.49-1.06-7.66.6-17.4 1.05-25.24.38-6.52-1.05-11.16-1.05-17.69l4.06.36v54.06Z"
        opacity=".1"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.1 25.02c14.69-4 19.1-3.43 25.99-2.28M19.84 33c6.66-.95 18.74 3.28 21.03 0M19.1 42c5.01-1.36 8.82-2.19 11.94-2.65"
      />
      <path
        fill="#000"
        d="M59.61 64.18c-4.23 0-6.56-.39-10.79-.39-8.58 0-19.46 2.24-28.04 2.24 0-2.24-.26-5.79-.26-8.03h38.43l.66 6.19Z"
        opacity=".2"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.1 50.62c17.41 0 19.1-3.43 25.99-2.28"
      />
      <path
        fill="#fff"
        stroke="#313f4c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 2.45c.71 10.95 1.03 21.27 0 34.1-.75 9.35 0 18.76 0 28.13a180.3 180.3 0 0 1 34.06-3.05c3.72 0 7.74.56 11.46.56V2.45c-9.67 0-18.08 1.32-27.75 1.32-6.52 0-12.27-1.32-17.77-1.32Z"
      />
      <path
        fill={accentColor ?? "#fff"}
        d="M28.41 20.53c15.81-3.18 19.76-3.43 26.88-2.28l-.17-4.75c-7.12-1.14-11.69-1.71-26.88 2.28l.17 4.75Z"
      />
      <path
        fill="none"
        stroke="#313f4c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28.78 18.16c14.69-4 19.1-3.43 25.99-2.28"
      />
      <path fill={accentColor ?? "#fff"} d="M53.87 26.19c-2.28 3.28-14.37-.95-21.03 0v-4.65c6.66-.95 18.74 3.28 21.03 0v4.65Z" />
      <path
        fill="none"
        stroke="#313f4c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M32.84 23.87c6.66-.95 18.74 3.28 21.03 0"
      />
      <path fill={accentColor ?? "#fff"} d="M56.35 30.94a45.33 45.33 0 0 0-6.46-.98v4.09c2.19.13 4.19.52 6.46.98v-4.09Z" />
      <path
        fill="none"
        stroke="#313f4c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M49.89 32.05c2.19.11 4.19.42 6.46.8"
      />
      <path fill={accentColor ?? "#fff"} d="M42.62 34.19c-3.2.4-7.15 1.34-12.4 3.04l-.18-3.78c5.25-1.7 9.2-2.64 12.4-3.04l.18 3.78Z" />
      <path
        fill="none"
        stroke="#313f4c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30.36 35.13c5.01-1.36 8.82-2.19 11.94-2.65"
      />
      <path fill={accentColor ?? "#fff"} d="M58.23 43.49c-7.8-1.14-9.72 2.28-29.45 2.28v-4.04c19.73 0 21.65-3.43 29.45-2.28v4.04Z" />
      <path
        stroke="#313f4c"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        d="M31 43.75c17.41 0 19.1-3.43 25.99-2.28"
      />
    </svg>
  );
};
