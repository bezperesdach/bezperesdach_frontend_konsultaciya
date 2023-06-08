import Link from "next/link";
import React from "react";

import styles from "./link-button.module.css";

type Props =
  | {
      children: string;
      className?: string;
      href: string;
      height?: number;
      disabled?: boolean;
      form?: string;
      loading?: boolean;
      error?: boolean;
      backgroundColor?: string;
      color?: string;
      borderRadius?: number;
      outlined?: false;
      outlineWidth?: number;
      outlineBackgroundColor?: string;
      outlineColor?: string;
      outlineAnimatedColor?: string;
      type?: "button" | "submit" | "reset";
      style?: React.CSSProperties;
      onClick?: () => void;
    }
  | {
      children: string;
      className?: string;
      href: string;
      height?: number;
      disabled?: boolean;
      form?: string;
      loading?: boolean;
      error?: boolean;
      backgroundColor?: string;
      color?: string;
      borderRadius?: number;
      outlined: true;
      outlineWidth: number;
      outlineBackgroundColor: string;
      outlineColor: string;
      outlineAnimatedColor: string;
      type?: "button" | "submit" | "reset";
      style?: React.CSSProperties;
      onClick?: () => void;
    };

export const LinkButton = ({
  className,
  children,
  href,
  height = 55,
  color,
  backgroundColor,
  outlined = false,
  outlineAnimatedColor,
  outlineBackgroundColor: outlineBackgroundColor,
  outlineColor: outlineColor,
  outlineWidth = 50,
  borderRadius = 8,
  style,
  onClick,
}: Props) => {
  return (
    <Link
      className={`${outlined ? styles.button_outline : styles.button} ${className}`}
      href={href}
      style={
        {
          "--background-color": backgroundColor ?? "rgb(17 112 238)",
          "--foreground-color": color ?? "#fff",
          "--outline-background-color": outlineBackgroundColor ?? "rgb(17 112 238)",
          "--outline-foreground-color": outlineColor ?? "rgb(17 112 238)",
          "--outline-animated-foreground-color": outlineAnimatedColor ?? "#fff",
          "--outline-width": outlineWidth + "px",
          "--border-radius": borderRadius + "px",
          "--height": height + "px",
          ...style,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
