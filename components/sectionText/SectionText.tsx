import React, { FC } from "react";
import sectionTextType from "./sectionTextType";

import styles from "./sectionText.module.scss";

const SectionText: FC<sectionTextType> = ({ paragraphText }) => {
  return (
    <>
      {paragraphText.map((member, index) => (
        <p key={index} className={styles.sectionText}>
          {member}
        </p>
      ))}
    </>
  );
};

export default SectionText;
