import React, { useEffect } from "react";
import Seo from "../components/seo/Seo";

import HeaderSection from "../section/headerSection/HeaderSection";
import VisualSection from "../section/visualSection/VisualSection";
import AboutSection from "../section/aboutSection/AboutSection";
import UnsupportSection from "../section/unsupportSection/UnsupportSection";
import CountdownSection from "../section/countdownSection/CountdownSection";
import PastSection from "../section/pastSection/PastSection";
import BrowserSection from "../section/browserSection/BrowserSection";
import ProviderSection from "../section/providerSection/ProviderSection";
import FooterSection from "../section/footerSection/FooterSection";

import IeChecker from "../components/ieChecker/IeChecker";
import LoadingChecker from "../components/loadingChecker/LoadingChecker";
const Main = () => (
  <>
    <LoadingChecker />
    <IeChecker />
    <Seo
      pageTitle={"20220615"}
      pageDescription={"Internet Explorer まだ使っている人はいませんか？"}
      imgUrl={"https://takeshisakuma.github.io/overkill/ogp/ogp.webp"}
      faviconUrl={
        "https://takeshisakuma.github.io/overkill/favicon/favicon.svg"
      }
      pageImgWidth={1280}
      pageImgHeight={960}
      pageUrl={"https://takeshisakuma.github.io/overkill/"}
    />
    <HeaderSection>20220615</HeaderSection>
    <VisualSection>
      {`Internet Explorer${"\n"}まだ使っている人はいませんか？`}
    </VisualSection>

    <AboutSection
      headingText="Internet Explorerとは"
      paragraphText={[
        `Microsoft社が開発していたWebブラウザで、最盛期にはWebブラウザのシェア95%以上を占めていましたが、Windows 10から標準ブラウザはMicrosoft Edgeに置き換えられています。${"\n"}開発は終了しており、セキュリティ上のリスクや、パフォーマンスの問題があるため、現在は互換性維持のためだけに、Windows 10に搭載されています。`,
      ]}
      listNormal={[
        "Internet Explorer 10以前のバージョンはすでにサポートが終了しています。",
        "Internet Explorer 11は、2022年6月15日(日本時間では16日)にサポートの終了が予告されています。",
      ]}
      listCaution={[
        "Windows 10 LTSCやWindows Server上の Internet Explorer 11 デスクトップ アプリケーションは除く",
      ]}
    />

    <UnsupportSection
      headingText={
        "すでに、多くの企業や団体がInternet Explorerのサポートを打ち切っています。"
      }
      listCaution={[
        "WordPressは、7月リリース予定のVer.5.8以降非対応を告知",
        "Microsoft 365は、2021年8月17日(日本時間では18日)でサポート終了を告知",
        "Twitchは6日7日でサポート終了を告知",
      ]}
      service={[
        { name: "Angular", img: "dev/angular.svg" },
        { name: "artStation", img: "service/artstation.svg" },
        { name: "Backlog", img: "service/backlog.svg" },
        { name: "bandcamp", img: "service/bandcamp.svg" },
        { name: "BASE", img: "service/base.svg" },
        { name: "Beatport", img: "service/beatport.svg" },
        { name: "Bootstrap", img: "dev/bootstrap.svg" },
        { name: "CrowdWorks", img: "service/crowdworks.svg" },
        { name: "DeviantArt", img: "service/deviantart.svg" },
        { name: "dribbble", img: "service/dribbble.svg" },
        { name: "Facebook", img: "service/facebook.svg" },
        { name: "Feedly", img: "service/feedly.svg" },
        { name: "flickr", img: "service/flickr.svg" },
        { name: "GitHub", img: "service/github.svg" },
        { name: "Google Analytics", img: "service/googleanalytics.svg" },
        { name: "Google Earth", img: "service/googleearth.svg" },
        { name: "Google Photos", img: "service/googlephotos.svg" },
        { name: "Instagram", img: "service/instagram.svg" },
        { name: "note", img: "service/note.svg" },
        { name: "Notion", img: "service/notion.svg" },
        { name: "Microsoft 365", img: "service/microsoft365.svg" },
        { name: "OKWAVE", img: "service/okwave.svg" },
        { name: "Pinterest", img: "service/pinterest.svg" },
        { name: "Pocket", img: "service/pocket.svg" },
        { name: "Skeb", img: "service/skeb.svg" },
        { name: "Sketchfab", img: "service/sketchfab.svg" },
        { name: "STORES", img: "service/stores.svg" },
        { name: "STUDIO", img: "service/studio.svg" },
        { name: "Trello", img: "service/trello.svg" },
        { name: "Twitch", img: "service/twitch.svg" },
        { name: "Twitter", img: "service/twitter.svg" },
        { name: "Udemy", img: "service/udemy.svg" },
        { name: "YouTube", img: "service/youtube.svg" },
        { name: "YouTube Music", img: "service/youtubemusic.svg" },
        { name: "Vue.js", img: "dev/vuejs.svg" },
        { name: "WordPress", img: "dev/wordpress.svg" },
      ]}
    />

    <CountdownSection headingText="Internet Explorer 11サポート終了まで、あと" />

    <PastSection
      headingText="Internet Explorer 11が公開された2013年はこんな年でした"
      paragraphText={[
        `変化の早いWebの世界では約10年は途方もなく長い時間です。あなたは10年前のデジタル製品を使いたいですか？ちなみに、iPhoneは5s(iOS7)が発売になった年です。`,
        `それでは、2013年の出来事を振り返ってみましょう。
        `,
      ]}
      eventData={[
        {
          name: "新語・流行語大賞",
          img: "icon_design_trend.svg",
          list: [
            "今でしょ!（林修）",
            "お・も・て・な・し（滝川クリステル）",
            "じぇじぇじぇ（あまちゃん）",
            "倍返し（半沢直樹）",
          ],
        },
        {
          name: "出来事",
          img: "icon_design_event.svg",
          list: [
            "NHK大河ドラマ『八重の桜』",
            "NTTドコモがiPhoneの提供開始",
            "バラク・オバマ大統領が続投でアメリカ大統領に就任",
            "ベネディクト16世の辞任",
          ],
        },
      ]}
    ></PastSection>
    <BrowserSection
      headingText="Internet Explorerから乗り換えるなら"
      browserData={[
        {
          name: "Microsoft Edge",
          text: "Internet Explorerが必要なWebサイトに対応する「IE モード」を内蔵したWebブラウザ",
          url: "https://www.microsoft.com/ja-jp/edge",
          img: "edge",
        },
        {
          name: "Google Chrome",
          text: "Googleのサービスとの連携に優れた、シェア一位のWebブラウザ",
          url: "https://www.google.com/intl/ja_jp/chrome/",
          img: "chrome",
        },
        {
          name: "Mozilla Firefox",
          text: "プライバシー、セキュリティに優れたオープンソースのWebブラウザ",
          url: "https://www.mozilla.org/ja/firefox/new/",
          img: "firefox",
        },
      ]}
    />
    <ProviderSection
      headingText={"Webサービス提供者様に向けて"}
      paragraphText={[
        `Internet Explorer以外のモダンな主要Webブラウザーには、2013年以降も新しい機能が数多く追加され続けています。${"\n"}そのため、あなたのサービスで「Webで最新の機能を提供したい」と考えるなら、IE11の対応は諦める必要があります。`,
        `業務用Webシステムの改修はコストがかかるため、現状維持でInternet Explorerで古いWebアプリケーションを使い続けているケースがあります。${"\n"}しかし、最新のWebブラウザーに移行するほうがセキュリティ的にも安全で、長期的に見てより良い選択です。`,
        `Internet Explorer以外のブラウザへの対応には時間がかかります。${"\n"}2022年6月15日(日本時間では16日)以降はIEの起動をするとMicrosoft Edgeにリダイレクトされるようになります。${"\n"}サポートが切れてから自社サイトをIE以外に対応させるのでは間に合いません。`,
      ]}
    ></ProviderSection>
    <FooterSection>Credit</FooterSection>
  </>
);
export default Main;
