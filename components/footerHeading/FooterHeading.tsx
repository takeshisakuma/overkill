import React, { FC } from "react";
import headerHeadingType from "./footerHeadingType";

import styles from "./footerHeading.module.scss";

const HeaderHeading: FC<headerHeadingType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h3 className={styles.headerHeading}>{HeaderText}</h3>
    </>
  );
};

export default HeaderHeading;
