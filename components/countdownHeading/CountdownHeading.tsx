import React, { FC } from "react";
import countdownHeadingType from "./countdownHeadingType";

import styles from "./countdownHeading.module.scss";

const CountdownHeading: FC<countdownHeadingType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h3 className={styles.countdownHeading}>{HeaderText}</h3>
    </>
  );
};

export default CountdownHeading;
