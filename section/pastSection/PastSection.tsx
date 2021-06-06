import React, { FC } from "react";
import pastSectionType from "./pastSectionType";
import styles from "./pastSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SectionText from "../../components/sectionText/SectionText";
import EventList from "../../components/eventList/EventList";

const PastSection: FC<pastSectionType> = ({
  headingText,
  paragraphText,
  eventData,
}) => {
  return (
    <>
      <div className={styles.pastContainer}>
        <div className={styles.pastContent}>
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading>{headingText}</SectionHeading>
          </div>
          <div className={styles.sectionTextWrapper}>
            <SectionText paragraphText={paragraphText}></SectionText>
          </div>

          <EventList eventData={eventData} />
        </div>
      </div>
    </>
  );
};

export default PastSection;
