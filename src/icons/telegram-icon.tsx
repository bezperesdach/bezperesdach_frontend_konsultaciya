import React from "react";

export const TelegramIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path
        fill="url(#telegramIconGradient)"
        d="M45.71 91.42c25.245 0 45.71-20.465 45.71-45.71S70.955 0 45.71 0 0 20.465 0 45.71s20.465 45.71 45.71 45.71Z"
      />
      <path
        fill="#C1DAEA"
        d="m30.94 49.05 5.42 15.01s.68 1.4 1.4 1.4c.72 0 11.52-11.23 11.52-11.23l12.01-23.19-30.16 14.14-.19 3.87Z"
      />
      <path fill="#9CC6D9" d="m38.13 52.9-1.04 11.06s-.44 3.39 2.95 0 6.63-6 6.63-6l-8.55-5.06h.01Z" />
      <path
        fill="#fff"
        d="m31.04 49.59-11.15-3.63s-1.33-.54-.9-1.77c.09-.25.27-.47.8-.84 2.47-1.72 45.75-17.28 45.75-17.28s1.22-.41 1.94-.14c.33.13.54.27.72.78.06.19.1.59.1.98 0 .29-.04.55-.06.97-.26 4.25-8.15 35.99-8.15 35.99s-.47 1.86-2.16 1.92c-.62.02-1.36-.1-2.26-.87-3.32-2.85-14.79-10.56-17.32-12.26a.528.528 0 0 1-.21-.34c-.04-.18.16-.4.16-.4s19.97-17.75 20.5-19.61c.04-.14-.11-.22-.32-.15-1.33.49-24.32 15.01-26.86 16.61-.15.09-.56.03-.56.03l-.02.01Z"
      />
      <defs>
        <linearGradient id="telegramIconGradient" x1="45.71" x2="45.71" y1="91.42" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0093D4" />
          <stop offset="1" stopColor="#00B0E5" />
        </linearGradient>
      </defs>
    </>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 92 92" role="group" fill="none">
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
