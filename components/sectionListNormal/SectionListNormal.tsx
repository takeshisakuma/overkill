import React, { FC } from "react";
import sectionListNormalType from "./sectionListNormalType";

import styles from "./sectionListNormal.module.scss";

const SectionListNormal: FC<sectionListNormalType> = ({ children }) => {
  const list = children;

  return (
    <>
      <ul className={styles.sectionListNormalGroup}>
        {list.map((member, index) => (
          <li key={index} className={styles.sectionListNormalMember}>
            {member}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionListNormal;
