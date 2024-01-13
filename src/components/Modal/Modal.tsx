import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IModalProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export const Modal: FC<IModalProps> = ({
  children,
  id,
  title,
  footer,
  ...inputProps
}) => {
  return (
    <div className={cn(styles.c_modal)}>
      <input type="checkbox" name="modal" id={id} hidden {...inputProps} />
      <label className={styles.c_modal__bg} htmlFor={id}></label>
      <div className={styles.c_modal__content}>
        {title && (
          <div className={styles.c_modal__header}>
            <div className={styles.c_modal__title}>{title}</div>
            <label className={styles.c_modal__close} htmlFor={id} role="button">
              <Icon.IconXmark />
            </label>
          </div>
        )}
        {children && <div className={styles.c_modal__main}>{children}</div>}
        {footer && <div className={styles.c_modal__footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
