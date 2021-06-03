import React, { FC } from "react";
import visualType from "./visualType";

import styles from "./visual.module.scss";

const Visual: FC<visualType> = ({ text }) => {
  const visualText = text;

  return (
    <>
      <div className={styles.visualContainer}>
        <div className={styles.visualContent}>
          <h2 className={styles.visualText}>{visualText}</h2>
        </div>
      </div>
    </>
  );
};

export default Visual;
