import React from "react";

export const DiplomnayaUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 64" fill="none" role="group">
      <title>{title}</title>

      <path
        fill={accentColor ?? "#fff"}
        d="M71.4 10.6h2.4c.8 0 1.5.8 1.5 1.6V58c0 1-.7 1.6-1.5 1.6H6c-.8 0-1.5-.7-1.5-1.6V12.2c0-.8.7-1.6 1.5-1.6h67.7"
      />
      <path fill="#000" d="M9.6 56.1c-2.2-1 16.9-10 26.4-2.8 1 .7 3.1 3.2 2.3 2.9-10.5-4.4-24.5 2-28.7 0Z" opacity=".1" />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="m71.8 9.5 1.9-.4c.8 0 1.5.8 1.5 1.6v45.7c0 1-.7 1.6-1.5 1.6H6c-.8 0-1.5-.7-1.5-1.6 0-7.6-.6-10.8 0-22.9.7-10.5 0-15.2 0-22.8"
      />
      <path fill="#000" d="M41.4 56.9c-2.3-1 16.8-10 26.3-2.9 1 .8 3.2 3.3 2.3 3-10.5-4.4-24.4 1.9-28.6-.1Z" opacity=".1" />
      <path
        fill="#000"
        d="M70.2 37.3C70 25 72 16.6 69.7 10.4l-4.4.2c2.8 0 2 .5 5 .5.7 0 1.4.8 1.4 1.6l.3 42-3 1.3 1.2-18.7"
        opacity=".1"
      />
      <path fill="#fff" d="M37.7 56c-9-10.8-28.4 0-28.4 0V11s19-12 30.6.2l-.4 46.3" />
      <path
        fill="#000"
        d="M34.6 22.4c-.1 4.4 0 8.8-1.7 14.4-.9 2.8-2 6.8-5 10.5a19.7 19.7 0 0 1-4 3.7c5.1-.2 10.7 1.2 15.5 6.2l.5-45.9a24.5 24.5 0 0 0-4.8-4c-.3 3.8-.4 8.8-.5 15Z"
        opacity=".1"
      />
      <path fill="#fff" d="M64.3 3v43.7L39.4 57.6l.5-46.3 22.5-9" />
      <path fill="#fff" d="M55.9 51.2c8.4 0 13.8 4 13.8 4V10.5s-2.3-1.6-5.8-3l-12 6.5 4 37.3Z" />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M37.6 56C33 45 9.2 56 9.2 56c-.3-4.5-.6-9.4 0-21.5 1.1-12 0-15.6 0-23.4a47 47 0 0 1 12-3.5c6.6-1.2 14.3-1.1 18.7 3.7l-.5 46.3m17-5.7c8.4 0 13.8 4 13.8 4V11.1S68 9.5 64.4 8"
      />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M64.3 3c0 8.7.4 12.8 0 26-.2 6 0 11.8 0 17.7L39.4 57.5l.5-46.2 7.3-3c14.3-4.3 10.1-4 15.2-6M15.6 19.2s11.7-4.3 18-1.3m-18 9.3s1.1-4.6 18-1.3m-3.7 6.5c1.9 0 3.3.5 3.8 1.5m-18.1 1.3s2.7-.9 6-1.7m-6 9.7s11.1-5.7 18-1.3m-10.2-8.7c.3-.2 3.3-1 5-.8"
      />
    </svg>
  );
};
