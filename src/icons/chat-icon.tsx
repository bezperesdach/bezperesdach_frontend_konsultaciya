import React from "react";

export const ChatIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path
        d="M39.767 25.913a1 1 0 0 1-.878-.519c-2.795-5.097-8.115-8.679-13.883-9.349a1 1 0 1 1 .23-1.986c6.401.743 12.304 4.718 15.406 10.373a1 1 0 0 1-.875 1.481z"
        fill="#1081e0"
      />
      <path
        d="m0 58 4.042-12.125a22.984 22.984 0 0 1-3.231-11.78C.81 21.34 11.15 11 23.905 11S47 21.34 47 34.095 36.66 57.19 23.905 57.19c-3.881 0-7.535-.961-10.745-2.653L0 58z"
        fill="#af7bad"
      />
      <path
        d="M23.905 11C36.66 11 47 21.34 47 34.095c0 3.378-.731 6.583-2.034 9.475L58 47l-4.042-12.125a22.984 22.984 0 0 0 3.231-11.78C57.19 10.34 46.85 0 34.095 0c-9.426 0-17.528 5.65-21.118 13.746A22.99 22.99 0 0 1 23.905 11z"
        fill="#662381"
      />
    </>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={width}
      height={height}
      enableBackground="new 0 0 58 58"
      viewBox="0 0 58 58"
      role="group"
    >
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
