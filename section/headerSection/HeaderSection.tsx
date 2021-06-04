import React, { FC } from "react";
import headerSectionType from "./headerSectionType";

import styles from "./headerSection.module.scss";

import HeaderHeading from "../../components/headerHeading/HeaderHeading";

const HeaderSection: FC<headerSectionType> = ({ children }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerHeadingWrapper}>
            <HeaderHeading>{children}</HeaderHeading>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
