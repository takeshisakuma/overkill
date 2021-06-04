import React, { FC } from "react";
import visualType from "./visualSectionType";

import styles from "./visualSection.module.scss";

import VisualHeading from "../../components/visualHeading/VisualHeading";

const Visual: FC<visualType> = ({ children }) => {
  return (
    <>
      <div className={styles.visualContainer}>
        <div className={styles.visualContent}>
          <div className={styles.visualHeadingWrapper}>
            <VisualHeading>{children}</VisualHeading>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visual;
