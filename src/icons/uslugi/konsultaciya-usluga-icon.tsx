import React from "react";

export const KonsultaciyaUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 88" fill="none" role="group">
      <title>{title}</title>

      <path
        fill="#fff"
        d="M2.42 20C4.1 34.51.98 77.34 6.38 75.42c37.92-13.48 69.21-4.92 68.73-6.24-5.24-14.4 4.32-52.78 3.12-53.14-15.21-4.56-29.39-3.12-72.33 1.56L5.66 20H2.42Z"
      />
      <path
        fill="#000"
        d="M3.14 21.2c-.18 5.92 1.3 8.92 3.6 14.38 8.91 20.83 9.96 27.96 40 32.36-16.99.91-31.25 5.92-40.36 7.47-3.84-3.6-3.48-37.42-3.96-55.42l.72 1.2Z"
        opacity=".1"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M2.35 20.03c.84 20.01.41 56.63 4.09 55.33 30-10.66 60.44-6.89 68.66-6.21M5.75 17.62c31.62-2.33 54.02-8.38 72.5-1.6 2.38.87-8.3 34.97-3.15 53.12"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M40.2 85.39c1.03-15.02-1.09-10.01-.98-15.23.04-1.73 8.72-2.95 7.85-1.01-2.18 4.86-1.11 13.45-.99 16.24"
      />
      <path
        fill={accentColor ?? "#fff"}
        stroke="#000"
        strokeWidth={strokeWidth / 2}
        strokeMiterlimit="10"
        d="M44.8 63.99c-18.07-7.45-28.63-20.08-26.89-30.43.98-5.82 6.39-14.05 13.24-13.5 4.88.39 9.43 5.17 11.11 11.84 1.53-6.36 6-10.92 10.87-11.35 6.46-.59 11.45 6.24 12.89 10.9 2.99 9.66-5.29 22.94-21.23 32.54h.01Z"
      />
    </svg>
  );
};
