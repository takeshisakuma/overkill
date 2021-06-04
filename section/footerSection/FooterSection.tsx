import React, { FC } from "react";
import footerSectionType from "./footerSectionType";

import styles from "./footerSection.module.scss";

import FooterHeading from "../../components/footerHeading/FooterHeading";

const HeaderSection: FC<footerSectionType> = ({ children }) => {
  return (
    <>
      <header className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerHeadingWrapper}>
            <FooterHeading>{children}</FooterHeading>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
