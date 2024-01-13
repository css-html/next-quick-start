import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IRangeProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isVertical?: boolean;
}

export const Range: FC<IRangeProps> = ({ isVertical, ...props }) => {
  return (
    <div
      className={cn(styles.c_range, isVertical && styles.c_range__isVertical)}
    >
      <input type="range" {...props} />
    </div>
  );
};

export default Range;
