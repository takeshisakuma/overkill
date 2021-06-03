import React from "react";
import Seo from "../components/seo/Seo";
import Header from "../components/header/Header";
import Visual from "../components/visual/Visual";

import styles from "./index.module.scss";

const Main = () => (
  <>
    <Seo
      pageTitle={"20220615"}
      pageDescription={"Internet Explorer まだ使っている人はいませんか？"}
      pageImg={"https://takeshisakuma.github.io/overkill/ogp/ogp.png"}
      pageImgWidth={1280}
      pageImgHeight={960}
      pagePath={"https://takeshisakuma.github.io/overkill/"}
    />
    <Header text="20210615" />
    <Visual text={`Internet Explorer${"\n"}まだ使っている人はいませんか？`} />
    <img src="/overkill/test.png" />
  </>
);
export default Main;
