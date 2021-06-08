import React, { FC } from "react";
import countdownSectionType from "./countdownSectionType";
import styles from "./countdownSection.module.scss";

import CountdownHeading from "../../components/countdownHeading/CountdownHeading";
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";

const CountdownSection: FC<countdownSectionType> = ({
  countdownTimerAnimation,
  headingText,
}) => {
  return (
    <>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownContent}>
          <div className={styles.sectionHeadingWrapper}>
            <CountdownHeading>{headingText}</CountdownHeading>
          </div>
          <div
            className={styles.countdownTimerWrapper}
            id={countdownTimerAnimation}
          >
            <CountdownTimer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownSection;
