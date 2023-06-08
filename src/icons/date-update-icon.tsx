import React from "react";

export const DateUpdateIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path
        fill="#273443"
        fillRule="evenodd"
        d="M4.5 22c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V5c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h1.63V2h1.62v1.5h8.5V2h1.63v1.5h1.62c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v7.5h-1.5V9.75h-15V20.5h8.1V22H4.5Zm15-13.75h-15V5h15v3.25Z"
        clipRule="evenodd"
      />
      <path
        fill="#1070EE"
        d="M19 24a4.82 4.82 0 0 1-3.19-1.14A4.9 4.9 0 0 1 14.1 20h1.55A3.45 3.45 0 0 0 19 22.5c.97 0 1.8-.34 2.48-1.02A3.37 3.37 0 0 0 22.5 19c0-.97-.34-1.8-1.02-2.48A3.37 3.37 0 0 0 19 15.5a3.45 3.45 0 0 0-2.45 1H18V18h-4v-4h1.5v1.43c.45-.44.98-.78 1.57-1.04.6-.26 1.25-.39 1.93-.39 1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 24 19c0 1.38-.49 2.56-1.46 3.54A4.82 4.82 0 0 1 19 24Z"
      />
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" role="group">
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
