import React, { FC } from "react";
import headerHeadingType from "./headerHeadingType";

import styles from "./headerHeading.module.scss";

const HeaderHeading: FC<headerHeadingType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h3 className={styles.headerHeading}>{HeaderText}</h3>
    </>
  );
};

export default HeaderHeading;
