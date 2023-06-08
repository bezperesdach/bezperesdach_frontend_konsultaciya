import React from "react";

export const TimeToCompleteIcon = ({ width = 48, height = 48, title, href, target, rel }: IconProps) => {
  const icon = (
    <>
      <path
        fill="#273443"
        fillRule="evenodd"
        d="M3.438 20.563c.291.291.645.437 1.062.437h8.25a5.516 5.516 0 0 1-.3-.725c-.083-.25-.158-.508-.225-.775H4.5v-15h15v7.7c.25.05.504.117.762.2.259.083.505.192.738.325V4.5c0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 19.5 3h-15c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 3 4.5v15c0 .417.146.77.438 1.063ZM12.274 17H7v-1.5h5.825a4.021 4.021 0 0 0-.325.725c-.083.25-.158.508-.225.775Zm3.325-4.25H7v-1.5h10v1a8.623 8.623 0 0 0-.725.213c-.217.075-.442.17-.675.287ZM17 8.5H7V7h10v1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="#1070EE"
        fillRule="evenodd"
        d="M18.325 22.975c-1.3 0-2.408-.463-3.325-1.388-.917-.924-1.375-2.02-1.375-3.287 0-1.3.458-2.413 1.375-3.338.917-.925 2.025-1.387 3.325-1.387 1.283 0 2.387.463 3.313 1.388.924.925 1.387 2.037 1.387 3.337 0 1.267-.462 2.363-1.387 3.287-.926.925-2.03 1.388-3.313 1.388ZM20.7 19.95l-.7.7-2.175-2.175v-3.2h1v2.8L20.7 19.95Z"
        clipRule="evenodd"
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
