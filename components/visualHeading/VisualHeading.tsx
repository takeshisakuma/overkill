import React, { FC } from "react";
import visualHeadingType from "./visualHeadingType";

import styles from "./visualHeading.module.scss";

const VisualHeading: FC<visualHeadingType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h2 className={styles.visualHeading}>{HeaderText}</h2>
    </>
  );
};

export default VisualHeading;
