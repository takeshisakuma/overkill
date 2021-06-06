import React, { FC } from "react";
import Head from "next/head";
import seoType from "./seoType";

const Seo: FC<seoType> = ({
  pageTitle,
  pageDescription,
  pageUrl,
  imgUrl,
  pageImgWidth,
  pageImgHeight,
  faviconUrl,
}) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(pageImgWidth)} />
      <meta property="og:image:height" content={String(pageImgHeight)} />
      <link rel="icon" href={faviconUrl} type="image/svg+xml" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={pageUrl} />
    </Head>
  );
};

export default Seo;
