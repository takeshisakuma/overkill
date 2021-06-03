import React from "react";
import Seo from "../components/seo/Seo";
import Header from "../components/header/Header";
import Visual from "../components/visual/Visual";
import AboutSection from "../section/aboutSection/AboutSection";

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

    <AboutSection
      headingText="Internet Explorerとは"
      mainText="Microsoft社が開発していたWebブラウザで、最盛期には、Webブラウザのシェア95%以上を締めていましたが、Windows 10から標準ブラウザはMicrosoft Edgeに置き換えられ、Internet Explorerの開発は終了しており、セキュリティ上のリスクや、パフォーマンスの問題があるため、現在は互換性維持のためだけに、Windows 10に搭載されています。"
      listText={[
        "Internet Explorer 10以前のバージョンはすでにサポートが終了しています。",
        "2021年8月17日(日本時間では18日)にMicrosoft 365 アプリなどでInternet Explorerのサポートが終了が予告されています。",
        "2022年6月15日(日本時間では16日)にInternet Explorer 11のサポートの終了が予告されています。",
      ]}
      cautionText="Windows 10 LTSCやWindows Server上の Internet Explorer 11 デスクトップ アプリケーションは除く"
    />
    {/*<img src="/overkill/test.png" />*/}
  </>
);
export default Main;
