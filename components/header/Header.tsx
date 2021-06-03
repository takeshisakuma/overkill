import React, { FC } from "react";
import headerType from "./headerType";

import styles from "./header.module.scss";

const Header: FC<headerType> = ({ text }) => {
  const HeaderText = text;

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerText}>{HeaderText}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
