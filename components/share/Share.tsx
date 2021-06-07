import React, { FC } from "react";
import shareType from "./shareType";

import styles from "./share.module.scss";

const Share: FC<shareType> = ({}) => {
  //Share API
  const sharePage = () => {
    if (!window.navigator.share) {
      alert("このブラウザは非対応です。");
      return;
    }

    try {
      window.navigator.share({
        title: "20220615",
        text: "Internet Explorer まだ使っている人はいませんか？",
        url: "https://takeshisakuma.github.io/overkill/",
      });
    } catch (e) {
      alert(`シェアは失敗しました。${e.message}`);
    }
  };

  return (
    <>
      <div className={styles.shareButton} onClick={sharePage}>
        <img
          className={styles.shareImage}
          src="/overkill/icon/icon_design_share.svg"
        />
      </div>
    </>
  );
};

export default Share;
