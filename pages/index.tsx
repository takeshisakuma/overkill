import React from "react";
import Seo from "../components/Seo";
import Image from "next/image";

import styles from "./index.module.scss";

const Main = () => (
  <>
    <Seo
      pageTitle={"Internet Explorer 11"}
      pageDescription={"Internet Explorer 11"}
      pageImg={"https://takeshisakuma.github.io/overkill/ogp.png"}
      pageImgWidth={1280}
      pageImgHeight={960}
      pagePath={"https://takeshisakuma.github.io/overkill/"}
    />
    <p className={styles.test}>next.js test</p>
  </>
);
export default Main;
