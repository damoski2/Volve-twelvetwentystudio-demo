import Script from "next/script";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScroll from "@/components/helper/SmoothScroll";
import { GlobalProvider } from "../../context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <SmoothScroll>
        <Component {...pageProps} />
        <Script src="https://unpkg.com/rolly.js@<VERSION>/dist/rolly.min.js" />
      </SmoothScroll>
    </GlobalProvider>
  );
}
