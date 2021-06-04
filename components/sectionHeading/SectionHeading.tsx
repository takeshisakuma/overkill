import React, { FC } from "react";
import sectionHeadingType from "./sectionHeadingType";

import styles from "./sectionHeading.module.scss";

const SectionHeading: FC<sectionHeadingType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h3 className={styles.sectionHeading}>{HeaderText}</h3>
    </>
  );
};

export default SectionHeading;
