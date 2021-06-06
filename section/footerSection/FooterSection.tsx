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
          <p className={styles.footerCreditParagraph}>
            廃墟の画像：
            <a
              className={styles.footerCreditAnchor}
              href="https://pixabay.com/ja/users/tama66-1032521/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4757647"
            >
              Peter H
            </a>
            による
            <a
              className={styles.footerCreditAnchor}
              href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4757647"
            >
              Pixabay
            </a>
            からの画像
          </p>
          <p className={styles.footerCreditParagraph}>
            時計の画像：
            <a
              className={styles.footerCreditAnchor}
              href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=371226"
            >
              Free-Photos
            </a>
            による
            <a
              className={styles.footerCreditAnchor}
              href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=371226"
            >
              Pixabay
            </a>
            からの画像
          </p>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
