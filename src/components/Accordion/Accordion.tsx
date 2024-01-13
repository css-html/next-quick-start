import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Item {
  id?: string;
  title?: string;
  content?: string;
  isDisabled?: boolean;
}

export interface IAccordionProps {
  items?: Item[];
}

export const Accordion: FC<IAccordionProps> = ({ items, ...props }) => {
  return (
    <div className={cn(styles.c_accordion)}>
      {items?.map((item, index) => (
        <div className={styles.c_accordion__item} key={index}>
          <input
            type="checkbox"
            name="checkbox"
            id={item.id}
            defaultChecked={false}
            disabled={item.isDisabled}
            {...props}
          />
          <label className={styles.c_accordion__header} htmlFor={item.id}>
            <span className={styles.c_accordion__title}>{item.title}</span>
            <span className={styles.c_accordion__icon}></span>
          </label>
          <div className={styles.c_accordion__main}>
            <div className={styles.c_accordion__content}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
