import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Icon from "@/icons";

export interface IMenuProps {}

export const Menu: FC<IMenuProps> = () => {
  return (
    <nav className={cn(styles.c_menu)}>
      <input type="checkbox" name="c_menu" id="c_menu" hidden />
      <span className={styles.c_menu__header}>
        <label className={styles.c_menu__close} htmlFor="c_menu">
          <Icon.IconXmark />
        </label>
      </span>
      <ul className={cn(styles.c_menu__ul, styles.c_menu__ulFirst)}>
        <li className={cn(styles.c_menu__li, styles.c_menu__liFirst)}>
          <a
            className={cn(styles.c_menu__a, styles.c_menu__aFirst)}
            href="javascript:void(0);"
          >
            <i>
              <Icon.IconEye />
            </i>
            <bdi>
              <strong>Level-1</strong>
            </bdi>
            <i>
              <Icon.IconAngleDown />
            </i>
          </a>
          <ul className={cn(styles.c_menu__ul, styles.c_menu__ulSecond)}>
            <li className={cn(styles.c_menu__li, styles.c_menu__liSecond)}>
              <a
                className={cn(styles.c_menu__a, styles.c_menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.c_menu__ul, styles.c_menu__ulThird)}>
                <li className={cn(styles.c_menu__li, styles.c_menu__liThird)}>
                  <a
                    className={cn(styles.c_menu__a, styles.c_menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
            <li className={cn(styles.c_menu__li, styles.c_menu__liSecond)}>
              <a
                className={cn(styles.c_menu__a, styles.c_menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.c_menu__ul, styles.c_menu__ulThird)}>
                <li className={cn(styles.c_menu__li, styles.c_menu__liThird)}>
                  <a
                    className={cn(styles.c_menu__a, styles.c_menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
            <li className={cn(styles.c_menu__li, styles.c_menu__liSecond)}>
              <a
                className={cn(styles.c_menu__a, styles.c_menu__aSecond)}
                href="javascript:void(0);"
              >
                <i>
                  <Icon.IconEye />
                </i>
                <bdi>
                  <strong>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </strong>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla, praesentium!
                  </small>
                </bdi>
                <i>
                  <Icon.IconAngleDown />
                </i>
              </a>
              <ul className={cn(styles.c_menu__ul, styles.c_menu__ulThird)}>
                <li className={cn(styles.c_menu__li, styles.c_menu__liThird)}>
                  <a
                    className={cn(styles.c_menu__a, styles.c_menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
                <li className={cn(styles.c_menu__li, styles.c_menu__liThird)}>
                  <a
                    className={cn(styles.c_menu__a, styles.c_menu__aThird)}
                    href="javascript:void(0);"
                  >
                    <i>
                      <Icon.IconEye />
                    </i>
                    <bdi>
                      <strong>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </strong>
                      <small>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nulla, praesentium!
                      </small>
                    </bdi>
                    <i>
                      <Icon.IconAngleDown />
                    </i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className={cn(styles.c_menu__li, styles.c_menu__liFirst)}>
          <a
            className={cn(styles.c_menu__a, styles.c_menu__aFirst)}
            href="javascript:void(0);"
          >
            <i>
              <Icon.IconEye />
            </i>
            <bdi>
              <strong>Level-1</strong>
            </bdi>
            <i>
              <Icon.IconAngleDown />
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
