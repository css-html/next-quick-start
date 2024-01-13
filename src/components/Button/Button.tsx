import React, {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  htmlFor?: string;
  isLabel?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  title,
  htmlFor,
  isLabel,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <>
      {isLabel ? (
        <label
          className={cn(styles.c_button)}
          htmlFor={htmlFor}
          role="button"
          tabIndex={0}
        >
          {iconLeft}
          {title}
          {iconRight}
        </label>
      ) : (
        <button className={cn(styles.c_button)} onClick={onClick} {...props}>
          {iconLeft}
          {title}
          {iconRight}
        </button>
      )}
    </>
  );
};

export default Button;
