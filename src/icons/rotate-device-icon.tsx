import React from "react";

export const RotateDeviceIcon = ({ width = 48, height = 48, title }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      xmlSpace="preserve"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 700 700"
    >
      <title>{title}</title>
      <path
        fillRule="nonzero"
        d="M565 331H369V135a19 19 0 0 0-19-18H135a19 19 0 0 0-18 18v430a19 19 0 0 0 18 18h430a19 19 0 0 0 18-18V350a19 19 0 0 0-18-19ZM126 546V154c0-5 4-9 9-9h215a9 9 0 0 1 9 9v392a9 9 0 0 1-9 9H135c-5 0-9-4-9-9Zm429 19a9 9 0 0 1-9 9H366l3-9V341h177a9 9 0 0 1 9 9v215Z"
      />
      <path fillRule="nonzero" d="M443 177a84 84 0 0 1 84 84h-18a65 65 0 0 0-66-65v9l-28-18 28-19v9Z" />
    </svg>
  );
};
