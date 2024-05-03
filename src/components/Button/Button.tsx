import React, { useState, type FC, type PropsWithChildren } from "react";
import { themeClass, exampleStyle, variant } from "./styles.css";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({ type, children }) => {
  const cls = clsx([
    exampleStyle,
    {
      [variant.primary]: type === "primary",
      [variant.secondary]: type === "secondary",
    },
  ]);

  return (
    <button
      className={cls}
      onClick={() => {
        alert();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
