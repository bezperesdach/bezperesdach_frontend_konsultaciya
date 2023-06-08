import React from "react";

export const SearchIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <g clipPath="url(#a)">
        <path
          fill="#3688FF"
          d="M9.14 17.03A8.32 8.32 0 1 1 9.16.39a8.32 8.32 0 0 1-.02 16.64Zm0-15.04a6.74 6.74 0 1 0 .01 13.47 6.74 6.74 0 0 0-.01-13.47Z"
        />
        <path fill="#5F6379" d="M17.65 18.02a.8.8 0 0 1-.56-.24L15.3 16a.79.79 0 1 1 1.12-1.12l1.78 1.79a.79.79 0 0 1-.56 1.35Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h19v19H0z" />
        </clipPath>
      </defs>
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 19" fill="none" role="group">
      <title>{title}</title>
      {href ? (
        <a href={href} target={target} rel={rel} aria-label={title}>
          {icon}
        </a>
      ) : (
        icon
      )}
    </svg>
  );
};
