import React from "react";

export const KursovayaUslugaIcon = ({
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
        fill="#fff"
        d="M1.2 10.8c0-2.6 3.9-9.3 9.3-9.3C21.7 1.5 57-1 57 3c.3 15.7.3 40.7 0 47.2-.1 2-3.2.7-3.2 1.3-.6 5.3.9 13.6 0 13.6-10.5 0-32.6-.4-47.3-.3-4.6 0-5.5-5-5.4-8.7.6-11.7-.5-27.6 0-45.3Z"
      />
      <path fill="#000" d="M2 58.4c2.3-.2 3.3.2 7.6-2.4 5-3.1 30-.8 44.3-.9v-3l-45.3-.3" opacity=".1" />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M14 58.4h39.4m-9.3 6.9h13.6m-3.2 0H8.6c-3.7 0-6.7-3-6.7-6.7v-.2c0-3.7 4.6-4.4 6.7-6.7h45.9v13.6Z"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M8.6 51.7h47.7c.8 0 1.4-.6 1.4-1.4V3.2c0-.1 0-.6-.4-1s-.6-.4-1-.4c-6.8-.5-12.7-1.2-28.4 0-5.6.4-11.2 0-16.9 0-1 0-2.3.1-3.6.8C5.2 3.9 3.9 6.7 1.9 11v47.4"
      />
      <path fill="#000" d="M22.3 17.4c0 1.4-1.3 5 5.5 5 5.3-.1 15.3-1.1 18.5-1.3 1.3-.1 1-2 1.2-3" opacity=".1" />
      <path
        fill={accentColor ?? "#fff"}
        d="m23.2 11.2 21.8.4c.7 0 1.8.9 1.9 1.6l.3 5.8c.1.8-.5.6-1.4.6l-20.1.3c-1.8 0-3-.4-3.2-2.2v-4.5c-.2-.8-.2-1.9.6-1.9l.1-.1Z"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M22.3 11.2H45c1.7 0 2.5 3.5 2.5 5.2v2.4m-.1 1.1H25.3a3 3 0 0 1-3-3v-5.7M11.1 1.8c0 7.8.5 12.8 0 23.3s0 17.8 0 26.6"
      />
    </svg>
  );
};
