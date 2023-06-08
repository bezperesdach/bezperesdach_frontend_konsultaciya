import React from "react";

export const MailIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path
        fill="url(#mailIconGradient)"
        d="M45.71 91.42c25.245 0 45.71-20.465 45.71-45.71S70.955 0 45.71 0 0 20.465 0 45.71s20.465 45.71 45.71 45.71Z"
      />
      <path
        fill="#fff"
        d="M67.48 23.22H24.5c-3.62 0-6.56 2.94-6.56 6.56v32.16c0 3.62 2.94 6.56 6.56 6.56h42.99c3.62 0 6.56-2.94 6.56-6.56V29.78c0-3.62-2.94-6.56-6.56-6.56h-.01Zm-4.36 6.41L46.02 41.9 29.43 29.63h33.69Zm4.36 32.47H24.5c-.08 0-.15-.07-.15-.15v-28.1l21.61 15.98 21.67-15.54v27.66c0 .08-.07.15-.15.15Z"
      />
      <defs>
        <linearGradient id="mailIconGradient" x1="45.71" x2="45.71" y1="84.78" y2="-6.63" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F29100" />
          <stop offset="1" stopColor="#F8B133" />
        </linearGradient>
      </defs>
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 92 92" fill="none" role="group">
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
