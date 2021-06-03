import React, { FC } from "react";
import aboutSectionType from "./aboutSectionType";
import styles from "./aboutSection.module.scss";

const AboutSection: FC<aboutSectionType> = ({
  headingText,
  mainText,
  listText,
  cautionText,
}) => {
  const heading = headingText;
  const message = mainText;
  const list = listText;
  const caution = cautionText;
  return (
    <>
      <div className={styles.aboutConteiner}>
        <div className={styles.aboutContent}>
          <h3 className={styles.headerSection}>{heading}</h3>
          <p className={styles.textSection}>{message}</p>
          <ul className={styles.listTextGroup}>
            {list.map((member, index) => (
              <li key={index} className={styles.listTextMember}>
                {member}
              </li>
            ))}
          </ul>
          <p className={styles.cautionText}>{caution}</p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
