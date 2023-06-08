import React from "react";
import classNames from "classnames";

import styles from "./menu-item.module.css";

type Props = {
  children: string;
  onClick: () => void;
};

export const MenuItemButton = ({ children, onClick }: Props) => {
  return (
    <>
      {/* {reverseUrl ? (
        <>
          {relativeURL != url && (
            <li className={`${styles.list} no_select`}>
              {currentUrl ? (
                <span>{children}</span>
              ) : (
                <Button className={styles.hover_select} onClick={onClick}>
                  {children}
                </Button>
              )}
            </li>
          )}
        </>
      ) : ( */}
      <li className={`${styles.list} no_select`}>
        <button className={classNames(styles.button, styles.hover_select)} onClick={onClick}>
          {children}
        </button>
      </li>
      {/* )} */}
    </>
  );
};
