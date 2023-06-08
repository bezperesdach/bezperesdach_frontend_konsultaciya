import React from "react";

export const CloseIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path fill="#fff" fillOpacity=".01" d="M0 0h48v48H0z" />
      <path
        fill="#1070EE"
        stroke="#1070EE"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
      />
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill="none" role="group">
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
