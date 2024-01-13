import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  message?: string;
  isError?: boolean;
}

export const Input: FC<IInputProps> = ({
  title,
  message,
  isError,
  ...props
}) => {
  return (
    <label className={cn(styles.c_input, isError && styles.c_inputError)}>
      <input {...props} />
      {title && <span className={styles.c_input__title}>{title}</span>}
      {message && <span className={styles.c_input__message}>{message}</span>}
    </label>
  );
};

export default Input;
