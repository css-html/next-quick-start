import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IDrawerProps {
  id: string;
  title?: string;
  footer?: ReactNode;
  children?: ReactNode;
  isLeftSide?: boolean;
  isLeftButton?: boolean;
  isRightButton?: boolean;
}

export const Drawer: FC<IDrawerProps> = ({
  children,
  id,
  title,
  footer,
  isLeftSide,
  isLeftButton,
  isRightButton,
}) => {
  return (
    <div
      className={cn(styles.c_drawer, isLeftSide && styles.c_drawer__isLeftSide)}
    >
      <input type="checkbox" name="drawer" id={id} hidden />
      <label className={styles.c_drawer__bg} htmlFor={id}></label>
      <div className={styles.c_drawer__content}>
        {title && (
          <div className={styles.c_drawer__header}>
            {isLeftButton && (
              <div className={styles.c_drawer__headerLeft}>
                <button className={styles.c_drawer__back}>
                  <Icon.IconAngleLeft />
                </button>
              </div>
            )}
            {isRightButton && (
              <div className={styles.c_drawer__headerRight}>
                <label
                  className={styles.c_drawer__close}
                  htmlFor={id}
                  role="button"
                >
                  <Icon.IconXmark />
                </label>
              </div>
            )}
            <div className={styles.c_drawer__headerCenter}>
              <div className={styles.c_drawer__title}>{title}</div>
            </div>
          </div>
        )}
        {children && <div className={styles.c_drawer__main}>{children}</div>}
        {footer && <div className={styles.c_drawer__footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default Drawer;
