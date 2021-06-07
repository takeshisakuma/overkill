import React, { FC } from "react";
import headerSectionType from "./headerSectionType";

import styles from "./headerSection.module.scss";

import HeaderHeading from "../../components/headerHeading/HeaderHeading";
import Share from "../../components/share/Share";
const HeaderSection: FC<headerSectionType> = ({ children }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerHeadingWrapper}>
            <HeaderHeading>{children}</HeaderHeading>
          </div>
          <div className={styles.shareWrapper}>
            <Share />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
