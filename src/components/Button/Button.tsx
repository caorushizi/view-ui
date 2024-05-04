import { type FC, type PropsWithChildren } from "react";
import { button, buttonType } from "./styles.css";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  type?: keyof typeof buttonType;
  size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({ type, children }) => {
  const cls = clsx([
    button,
    {
      [buttonType[type!]]: !!type,
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
