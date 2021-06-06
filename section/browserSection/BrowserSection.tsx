import React, { FC } from "react";
import aboutSectionType from "./browserSectionType";
import styles from "./browserSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import BrowserList from "../../components/browserList/BrowserList";
const AboutSection: FC<aboutSectionType> = ({ headingText, browserData }) => {
  return (
    <>
      <div className={styles.browserContainer}>
        <div className={styles.browserContent}>
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading>{headingText}</SectionHeading>
          </div>
          <div className={styles.browserListWrapper}>
            <BrowserList browserData={browserData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
