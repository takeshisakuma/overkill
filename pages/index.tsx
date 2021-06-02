import React from "react";
import Seo from "../components/seo/Seo";
import Image from "next/image";

import styles from "./index.module.scss";

const Main = () => (
  <>
    <Seo
      pageTitle={"Internet Explorer 11"}
      pageDescription={"Internet Explorer 11"}
      pageImg={"https://takeshisakuma.github.io/overkill/img/ogp.png"}
      pageImgWidth={1280}
      pageImgHeight={960}
      pagePath={"https://takeshisakuma.github.io/overkill/"}
    />
    <p className={styles.test}>next.js test9</p>
    <Image src="/test.png" height={100} width={100} quality={50} alt="test" />
  </>
);
export default Main;
