import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface ITextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  title?: string;
  message?: string;
  isError?: boolean;
}

export const Textarea: FC<ITextareaProps> = ({
  title,
  message,
  isError,
  ...props
}) => {
  return (
    <label className={cn(styles.c_textarea, isError && styles.c_textareaError)}>
      <textarea {...props} />
      {title && <span className={styles.c_textarea__title}>{title}</span>}
      {message && <span className={styles.c_textarea__message}>{message}</span>}
    </label>
  );
};

export default Textarea;
