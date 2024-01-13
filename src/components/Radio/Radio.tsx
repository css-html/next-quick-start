import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IRadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
}

export const Radio: FC<IRadioProps> = ({ title, ...props }) => {
  return (
    <label className={cn(styles.c_radio)}>
      <input type="radio" defaultChecked={false} {...props} />
      {title && <span className={styles.c_radio__title}>{title}</span>}
    </label>
  );
};

export default Radio;
