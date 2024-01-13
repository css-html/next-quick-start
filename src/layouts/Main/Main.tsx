import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IMainProps {
  children?: ReactNode;
}

export const Main: FC<IMainProps> = ({ children }) => {
  return (
    <main className={cn(styles.l_main)}>
      <div className={styles.l_main__container}>{children}</div>
    </main>
  );
};

export default Main;
