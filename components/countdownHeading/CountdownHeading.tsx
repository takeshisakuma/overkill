import React, { FC } from "react";
import countdownTimerType from "./countdownHeadingType";

import styles from "./countdownHeading.module.scss";

const CountdownHeading: FC<countdownTimerType> = ({ children }) => {
  const HeaderText = children;

  return (
    <>
      <h3 className={styles.countdownHeading}>{HeaderText}</h3>
    </>
  );
};

export default CountdownHeading;
