import React, { FC } from "react";
import pastSectionType from "./pastSectionType";
import styles from "./pastSection.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SectionText from "../../components/sectionText/SectionText";
import EventList from "../../components/eventList/EventList";
import SectionListNormal from "../../components/sectionListNormal/SectionListNormal";
import SectionListCaution from "../../components/sectionListCaution/SectionListCaution";
const PastSection: FC<pastSectionType> = ({ headingText, paragraphText }) => {
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

          <EventList
            eventData={[
              {
                name: "新語・流行語大賞",
                img: "icon_design_trend.svg",
                list: [
                  "今でしょ!（林修）",
                  "お・も・て・な・し（滝川クリステル）",
                  "じぇじぇじぇ（あまちゃん）",
                  "倍返し（半沢直樹）",
                ],
              },
              {
                name: "出来事",
                img: "icon_design_event.svg",
                list: [
                  "NHK大河ドラマ『八重の桜』",
                  "NTTドコモがiPhoneの提供開始",
                  "バラク・オバマ大統領が続投でアメリカ大統領に就任",
                  "ベネディクト16世の辞任",
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default PastSection;
