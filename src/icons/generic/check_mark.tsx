import React from "react";

export const CheckMark = ({
  width = "100%",
  height = "100%",
  accentColor,
  title,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none" role="group">
      <title>{title}</title>
      <path fill={accentColor ?? "#fff"} d="m10 17.9-5.7-5.6 1.1-1.1 4.5 4.5 9.7-9.6 1 1L10 18Z" />
    </svg>
  );
};
