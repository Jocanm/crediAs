import type { AppProps } from "next/app";
import "rc-slider/assets/index.css";
import "@/css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen py-16">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
