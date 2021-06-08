import React, { FC } from "react";
import unsupportSectionType from "./unsupportSectionType";
import styles from "./unsupportSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import ServiceList from "../../components/serviceList/ServiceList";
import SectionListCaution from "../../components/sectionListCaution/SectionListCaution";

const UnsupportSection: FC<unsupportSectionType> = ({
  headingText,
  listCaution,
  service,
}) => {
  return (
    <>
      <div className={styles.unsupportContainer}>
        <div className={styles.unsupportContent}>
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading>{headingText}</SectionHeading>
          </div>

          <div className={styles.serviceListWrapper}>
            <ServiceList service={service} />
          </div>

          <SectionListCaution>{listCaution}</SectionListCaution>
        </div>
      </div>
    </>
  );
};

export default UnsupportSection;
