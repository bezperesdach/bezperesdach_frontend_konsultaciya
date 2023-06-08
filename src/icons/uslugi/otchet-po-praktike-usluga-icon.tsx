import React from "react";

export const OtchetPoPraktikeUslugaIcon = ({
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
        stroke="#273443"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M51.73 14.58c7.47-.63 13.34 3.19 13.93 3.83 1.02 1.1 4.31 47.71 3.06 48.26-.98.43-9.11 1.88-17.23-5.74"
      />
      <path
        fill="#000"
        d="M55.12 63.69c2.36.99 3.17 2.1 4.76 2.87 1.45.71.47-5.18.05-8.76-1.49-12.53-1.4-27.26-1.39-29.15.03-4.67.27-8.41-2.27-12.06-2-2.87-4.68-2.91-5.57-2.26"
        opacity=".1"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M16.81 15.88c-9.08.8-15.52 7.33-15.41 8.95 1.02 15.9 5.69 32.75 6.69 43.29.15 1.62 23.92-3.52 30.22-7.38"
      />
      <path
        fill="#000"
        d="m34.38 62.59-16.69 4.95a8.55 8.55 0 0 1-1.77-1.93c-1.23-2.07-1.05-4.21-.98-5.28.29-4.48-.74-8.95-.74-13.43 0-7.66-.6-13.79-1.11-18.83-.61-6.11-1.27-9.46-1.54-11.58h7.69"
        opacity=".1"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M63.38 43.28a20.44 20.44 0 0 0-14.35-3.32m15.15-2.45c-8.14-.64-8.24-2.36-7.54-2m4.7-3.79c-5.96-.66-7.33-3.7-10.05-3.32m13.75-1.61c-3.31-.83-9.05-4.6-12.49-4.15M8.89 43.24a20.46 20.46 0 0 1 14.05-4.39m-15.3-1.31c8.06-1.25 8.02-2.98 7.36-2.56m-4.99-3.42c5.89-1.1 7.01-4.24 9.75-4.06m-13.83-.58c3.24-1.08 8.66-5.27 12.13-5.08"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M51.49 8.7c0-.88-37.65-1.14-36.5 3.98 2.61 11.6 1.13 38.87 3.4 51.57.33 1.86 28.45-.44 36.76-.52 2.11-.02-3.67-48.42-3.67-55.03h0Z"
      />
      <ellipse
        cx="35.05"
        cy="24.83"
        fill={accentColor ?? "#fff"}
        stroke="#000"
        strokeWidth={strokeWidth / 2}
        strokeMiterlimit="10"
        rx="13.95"
        ry="13.59"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={strokeWidth + strokeWidth / 2}
        strokeMiterlimit="10"
        d="M27.65 25.56c.45.9 2.23 3.07 5.04 4.58 3.51 1.89 5.78-3.96 10.88-9.6"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M24.29 42.71c8.05.99 18.25-2.43 25.73-1.88m-25.5 8.29c8.2-.03 5.69-.17 10.09-.88m3.17-.78c6.27-.83 7.58-.8 12.01-.66m-25.53 7.77c8.05.99 18.25-2.43 25.73-1.88"
      />
    </svg>
  );
};
