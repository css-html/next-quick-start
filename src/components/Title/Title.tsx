import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface ITitleProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children }) => {
  return <hgroup className={cn(styles.c_title)}>{children}</hgroup>;
};

export default Title;
