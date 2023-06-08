import React from "react";

export const ReferatUslugaIcon = ({
  width = "100%",
  height = "100%",
  title,
  strokeWidth = 1,
  accentColor,
}: Pick<PropsIcons, "width" | "height" | "title" | "accentColor" | "strokeWidth">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 70 71" fill="none" role="group">
      <title>{title}</title>

      <defs>
        <clipPath id={`a_${title}_${height}_${accentColor}`}>
          <path fill="none" d="M5.3 3.8H70v64.7H5.3z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#a_${title}_${height}_${accentColor})`}>
        <path fill="#fff" d="M53.4 29v-8.8L38.3 5H8.6c-.8 0-1.4.7-1.4 1.4v58c0 .9.6 1.5 1.4 1.5H52c.8 0 1.4-.6 1.4-1.4v-6.8" />
        <path
          fill="none"
          stroke="#273443"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.4 65.6c0 .2.5.4.7.4h20.7c4.6 0 10.7-1 15.3-1 2.9 0 4.4 1 7.3 1 .1 0 .6 0 1-.5.3-.2.4-.6.4-1v-6.7m0-28.8v-8.8l-15-15H8c-.8 0-1.4.6-1.4 1.3 0 1.4 1.5 7.1 1.5 8.5 0 7.4-.5 38.2-1 46.9"
        />
        <path
          fill="#fff"
          stroke="#273443"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M44 15.8c1.4 0-2.2 4.8-.9 4.8h9.7L37.7 5.5l.5 9.3c0 .7 5 1 5.8 1Z"
        />
        <path
          fill="none"
          stroke="#273443"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M29 28.6c2.2-.4 4.6 0 6.8 0m-20.7 0c2.4 0 6.4.9 8.7.3m-8.7 6.5c1.6 0 4.7.7 6.3.7 3 0 4.5-.7 7.5-.7m-13.8 6.9c2.2.5 3.1 1 4.5 1 2.3.2 4.1-.9 6.8-.9m-3.2 6.5c1.4 0 4-1.9 5-.3m-13.1.6c1.2 0 4 .5 5.3 0m17.7-34.5c0 1.3 4.6 6 5 6"
        />
      </g>
      <path
        fill={accentColor ?? "#fff"}
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        d="M46.9 56.4A54.8 54.8 0 0 0 63.5 68c.2 0 1.2-.5 1.8-1.6.7-1.3.2-2.6.1-2.8a53 53 0 0 1-14-10.4c-1.6 1-3 2.2-4.5 3.3Z"
      />
      <circle cx="38.9" cy="41.4" r="17.9" fill="#fff" />
      <path fill="#000" d="M50 54.4A58.1 58.1 0 0 0 65.3 66a3.6 3.6 0 0 0 0-2.5 44.1 44.1 0 0 1-14-10.5l-1.5 1.3Z" opacity=".1" />
      <path
        fill="#000"
        d="M51.8 28.7c-.1 0-2.2-2.1-5-3.4-1.9-.9-4.4-1.5-7-1.6 2 3.1 3.8 7 3.8 11.8a29.3 29.3 0 0 1-12 22.5 21 21 0 0 0 17.1-1.4c.6-.4 1.8-1.1 3-2.4a18.7 18.7 0 0 0 4.3-18c-.4-1.3-1.3-4.5-4.2-7.5Z"
        opacity=".1"
      />
      <circle cx="38.9" cy="41.3" r="17.9" fill="none" stroke="#273443" strokeWidth={strokeWidth} strokeMiterlimit="10" />
      <path
        fill="none"
        stroke="#273443"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26 34.5c2.1-.2 5.2-1.5 7.8-1.5 3 0 5.3 1.2 7.9 1.5m-7.9 5.1H35c1.3 0 3 .4 5.7 1.6m-15.7 0 3.7-.9M26.4 47c1.6-.5 3.1-1.5 5.4-1.4 1 0 4.4 1.1 5.4 1.4"
      />
    </svg>
  );
};
