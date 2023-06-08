import React from "react";

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 49">
  <g clipPath="url(#a)">
    <path d="M0 48.5h48V.5H0v48Z" />
    <path stroke="#090B0C" strokeLinejoin="round" strokeWidth="2" d="M24 4.5a20 20 0 1 0 0 40 20 20 0 0 0 0-40Z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M48 48.5H0V.5h48z" />
    </clipPath>
  </defs>
</svg>;

export const ArrowInCircle = ({
  width = "100%",
  height = "100%",
  title,
  orientation = "back",
  accentColor,
  color,
  filled = false,
  strokeWidth,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor"> & {
  orientation?: "back" | "forward";
  color?: string;
  filled?: boolean;
  strokeWidth?: number;
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 49" fill="none" role="group">
      <title>{title}</title>

      <path d="M48 .5H0v48h48V.5Z" />
      <path
        stroke={accentColor ?? "#090B0C"}
        fill={filled ? accentColor : "transparent"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24 44.5a20 20 0 1 0 0-40 20 20 0 0 0 0 40Z"
      />
      {orientation === "forward" ? (
        <path
          fill={color ?? "#090B0C"}
          d="M20.7 12 33 24.1 20.7 36.5 19 34.7l10.5-10.5L19 13.7l1.7-1.8Z"
          stroke={color ?? "#090B0C"}
          strokeWidth={strokeWidth ?? "0"}
          strokeLinejoin="round"
        />
      ) : (
        <path
          fill={color ?? "#090B0C"}
          d="M27.3 37 15 24.9l12.3-12.3 1.7 1.8-10.5 10.5L29 35.3l-1.7 1.8Z"
          stroke={color ?? "#090B0C"}
          strokeWidth={strokeWidth ?? "0"}
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
