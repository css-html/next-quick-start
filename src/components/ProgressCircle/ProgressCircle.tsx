import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface IProgressCircleProps {
  percent?: number;
  colorLine?: string;
  colorProgress?: string;
}

export const ProgressCircle: FC<IProgressCircleProps> = ({
  percent,
  colorLine,
  colorProgress,
}) => {
  return (
    <div
      className={cn(styles.c_progressCircle)}
      style={{
        backgroundImage: `conic-gradient(${colorProgress} calc(360deg - (360deg / 100 * (100 - ${percent}))), ${colorLine} 0deg)`,
      }}
    >
      <div className={styles.c_progressCircle__percent}>{percent}%</div>
    </div>
  );
};

export default ProgressCircle;
