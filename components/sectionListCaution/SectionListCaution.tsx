import React, { FC } from "react";
import sectionListCautionType from "./sectionListCautionType";

import styles from "./sectionListCaution.module.scss";

const SectionListCaution: FC<sectionListCautionType> = ({ children }) => {
  const list = children;

  return (
    <>
      <ul className={styles.sectionListCautionGroup}>
        {list.map((member, index) => (
          <li key={index} className={styles.sectionListCautionMember}>
            {member}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionListCaution;
