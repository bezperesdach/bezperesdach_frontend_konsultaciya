import React from "react";

export const BiznesPlanUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 60 68" fill="none" role="group">
      <title>{title}</title>

      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="m3.56 56.71-.71-38.14 51-.84.42 35.09c.06 4.91-.6 4.54-5.73 4.54L7.99 61.57c-2.95 0-4.39-2.03-4.44-4.86Z"
      />
      <path
        fill="#000"
        d="M9.96 22.09c.02-1.35-4.2-.61-4.38-.18-1.76 4.21-1.22 31.78-.2 36.73.03.16 5.62 2.01 6.49-.34 1.72-4.66-2.01-29.99-1.91-36.2Z"
        opacity=".1"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={(strokeWidth * 3) / 4}
        strokeMiterlimit="10"
        d="M41.87 14.94c-1.35-1.48-35.1-.27-35.1-.27 0 4.29.98 40.92.73 43.01l32.65-.66"
      />
      <path
        d="M13.91 18.49c.02-1.35-4.2-.61-4.38-.18-1.76 4.21-1.22 31.78-.2 36.73.03.16 5.62 2.01 6.49-.34 1.72-4.66-2.01-29.99-1.91-36.2Z"
        opacity=".1"
      />
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={(strokeWidth * 3) / 4}
        strokeMiterlimit="10"
        d="M13 8.91c0 4.04 1.19 46.87.89 48.83-.4 2.7 38.56-.11 40.65-1.94 1.66-1.46.06-44.2.02-46.64C54.52 7.04 13 8.91 13 8.91Z"
      />
      <g strokeMiterlimit="10">
        <path stroke={accentColor ?? "#fff"} strokeWidth={strokeWidth * 2} d="M16.27 14.21c11.22 1.36 29.34-2.61 35.37.74" />
        <path
          fill={accentColor ?? "#fff"}
          stroke="#273443"
          strokeWidth={(strokeWidth * 3) / 4}
          strokeLinecap="round"
          d="M18.36 14.47c9.94.84 26.22-1.98 31.56.09"
        />
        <path
          fill="none"
          stroke="#273443"
          strokeWidth={(strokeWidth * 3) / 4}
          strokeLinecap="round"
          d="M16.8 20.69c15.19-1.57 19.35.6 32.95-.34"
        />
      </g>
      <path
        fill="#fff"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M47.42 61.86c4.22 0 9.43-3.54 9.5-7.96.1-6.8.33-14.84.17-17.33-.61-9.51.11-5.08-.43-11.48 0-.38 0-.57-.37-.94s-.82-.36-.91-.36l-44.18.66c-.7.01-1.25.61-1.24 1.34.21 14.98.47 14.68.68 29.66.08 2.66.43 4.34-3.54 6.01l40.31.39Z"
      />
      <path
        fill="#000"
        d="M11.49 56.83c-1.29.08-2.78 4.59-2.35 4.74 4.15 1.52 32.09 0 38.85 0 4.27 0 10.5-7.9 8.76-6.45-5.04 4.21-39.34 1.34-45.27 1.7Z"
        opacity=".1"
      />
      <path
        fill="#000"
        d="M51.64 39.65c.13 1.41 1.04 3.32-.78 3.27-3.65-.09-29.49 1.37-31.27.78-1.17-.39-1.14-2-1.34-2.52l33.4-1.53Z"
        opacity=".1"
      />
      <path
        fill="#caf7fd"
        stroke="#273443"
        strokeWidth={(strokeWidth * 3) / 4}
        strokeMiterlimit="10"
        d="M17.55 31.65c-.86 1.71-.99 10.15.19 9.66 3.05-1.25 34.21.78 34.55-1.45.27-1.77.88-7.16 0-8.48-.79-1.19-34.34-.55-34.75.27Z"
      />
    </svg>
  );
};
