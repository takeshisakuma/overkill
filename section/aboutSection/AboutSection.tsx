import React, { FC } from "react";
import aboutSectionType from "./aboutSectionType";
import styles from "./aboutSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SectionText from "../../components/sectionText/SectionText";
import SectionListNormal from "../../components/sectionListNormal/SectionListNormal";
import SectionListCaution from "../../components/sectionListCaution/SectionListCaution";
const AboutSection: FC<aboutSectionType> = ({
  headingText,
  paragraphText,
  listNormal,
  listCaution,
}) => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading>{headingText}</SectionHeading>
          </div>
          <div className={styles.sectionTextWrapper}>
            <SectionText paragraphText={paragraphText}></SectionText>
          </div>
          <div className={styles.sectionListNormalWrapper}>
            <SectionListNormal>{listNormal}</SectionListNormal>
          </div>
          <SectionListCaution>{listCaution}</SectionListCaution>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
