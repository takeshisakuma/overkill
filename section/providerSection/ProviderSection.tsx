import React, { FC } from "react";
import providerSectionType from "./providerSectionType";
import styles from "./providerSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SectionText from "../../components/sectionText/SectionText";

const ProviderSection: FC<providerSectionType> = ({
  headingText,
  paragraphText,
}) => {
  return (
    <>
      <div className={styles.providerContainer}>
        <div className={styles.providerContent}>
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading>{headingText}</SectionHeading>
          </div>
          <div className={styles.sectionTextWrapper}>
            <SectionText paragraphText={paragraphText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderSection;
