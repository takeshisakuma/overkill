import React, { FC, useState, useEffect } from "react";
import ieCheckerType from "./ieCheckerType";

import styles from "./ieChecker.module.scss";

import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SectionText from "../../components/sectionText/SectionText";

const IeChecker: FC<ieCheckerType> = () => {
  const [ie, setIe] = useState<boolean>(false);
  const [ieMust, setIeMust] = useState<boolean>(false);

  useEffect(() => {
    if (process.browser) {
      let userAgent = window.navigator.userAgent;

      if (
        userAgent.indexOf("Trident") != -1 ||
        userAgent.indexOf("MSIE") != -1
      ) {
        if (ieMust === false) {
          setIe(true);
        }
      }
    }
  });

  const offIe = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIeMust(true);
    setIe(false);
  };

  return (
    <>
      {ie ? (
        <div className={styles.ieOverlay}>
          <div className={styles.ieWindow}>
            <div className={styles.sectionHeadingWrapper}>
              <SectionHeading>
                このページはInternet Explorerは非対応です。
              </SectionHeading>
            </div>
            <div className={styles.sectionTextWrapper}>
              <SectionText
                paragraphText={[
                  "罪深いIEユーザーのあなたに与えられた選択肢は3つです。",
                ]}
              />
            </div>

            <div className={styles.ieOptionGroupWrapper}>
              <ul className={styles.ieOptionGroup}>
                <li className={styles.ieOptionMember}>
                  <a
                    className={styles.ieOptionAnchor}
                    href="https://www.google.com/?hl=ja"
                  >
                    Google検索へ
                  </a>
                </li>
                <li className={styles.ieOptionMember}>
                  <a
                    className={styles.ieOptionAnchor}
                    href="https://www.microsoft.com/ja-jp/edge"
                  >
                    Microsoft Edgeをダウンロードする
                  </a>
                </li>
                <li className={styles.ieOptionMember}>
                  <a className={styles.ieOptionAnchor} href="/" onClick={offIe}>
                    このまま崩れたページを見る
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default IeChecker;
