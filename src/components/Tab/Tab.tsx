import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export interface TabItem
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  nav?: string;
  content?: any;
}

export interface ITabProps {
  tabs?: TabItem[];
  name: string;
}

export const Tab: FC<ITabProps> = ({ tabs, name, ...props }) => {
  return (
    <div className={cn(styles.c_tab)}>
      {tabs?.map((tabInput, index) => (
        <input
          type="radio"
          id={`tab__${tabInput.nav}`}
          name={name}
          defaultChecked={tabInput.defaultChecked}
          disabled={tabInput.disabled}
          key={index}
          {...props}
        />
      ))}
      <div className={styles.c_tab__nav}>
        {tabs?.map((tabItem, index) => (
          <label
            className={styles.c_tab__navItem}
            htmlFor={`tab__${tabItem.nav}`}
            key={index}
            // role="button"
            // tabIndex={0}
          >
            {tabItem.nav}
          </label>
        ))}
      </div>
      <div className={styles.c_tab__content}>
        {tabs?.map((tabItem, index) => (
          <div className={styles.c_tab__contentItem} key={index}>
            {tabItem.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
