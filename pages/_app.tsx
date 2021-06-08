import "../styles/reset.scss";
import "../styles/common.scss";

import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
