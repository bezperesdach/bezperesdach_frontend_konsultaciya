import React from "react";

import styles from "./button.module.css";

export type ButtonProps =
  | {
      children: React.ReactNode;
      className?: string;
      onClick?: () => void;
      disabled?: boolean;
      form?: string;
      loading?: boolean;
      error?: boolean;
      color?: string;
      backgroundColor?: string;
      backgroundAnimatedColor?: string;
      borderRadius?: number;
      outlined?: false;
      outlineWidth?: number;
      outlineBackgroundColor?: string;
      outlineColor?: string;
      outlineAnimatedColor?: string;
      type?: "button" | "submit" | "reset";
      style?: React.CSSProperties;
    }
  | {
      children: React.ReactNode;
      className?: string;
      onClick?: () => void;
      disabled?: boolean;
      form?: string;
      loading?: boolean;
      error?: boolean;
      color?: string;
      backgroundColor?: string;
      backgroundAnimatedColor?: string;
      borderRadius?: number;
      outlined: true;
      outlineWidth: number;
      outlineBackgroundColor: string;
      outlineColor: string;
      outlineAnimatedColor: string;
      type?: "button" | "submit" | "reset";
      style?: React.CSSProperties;
    };

export const Button = ({
  children,
  className,
  form,
  type,
  color,
  backgroundColor,
  backgroundAnimatedColor,
  outlined = false,
  outlineAnimatedColor,
  outlineBackgroundColor: outlineBackgroundColor,
  outlineColor: outlineColor,
  outlineWidth = 50,
  borderRadius = 8,
  onClick,
  loading,
  error,
  disabled,
  style,
}: ButtonProps) => {
  const buttonLoading = () => {
    if (error) {
      return <>ОШИБКА</>;
    }

    if (loading) {
      return (
        <>
          <span className={styles.button_loading} />
          {children}
        </>
      );
    }

    return <>{children}</>;
  };

  const onClickHandler = () => {
    if (error) {
      return undefined;
    }
    if (loading) {
      return undefined;
    }

    return onClick && onClick();
  };

  return (
    <button
      className={`${className} ${outlined ? styles.button_outline : styles.button} ${error ? styles.button_error : ""} ${
        loading ? styles.loading : ""
      } no_select`}
      type={type}
      form={form}
      onClick={onClickHandler}
      disabled={disabled}
      style={
        {
          "--background-color": backgroundColor ?? "rgb(17 112 238)",
          "--foreground-color": color ?? "#fff",
          "--animated-background-color": backgroundAnimatedColor ?? "#0851B2",
          "--outline-background-color": outlineBackgroundColor ?? "rgb(17 112 238)",
          "--outline-foreground-color": outlineColor ?? "rgb(17 112 238)",
          "--outline-animated-foreground-color": outlineAnimatedColor ?? "#fff",
          "--outline-width": outlineWidth + "px",
          "--border-radius": borderRadius + "px",
          ...style,
        } as React.CSSProperties
      }
    >
      {buttonLoading()}
    </button>
  );
};
