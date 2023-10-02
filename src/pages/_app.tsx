import { type NextPage } from "next";
import type { AppProps } from "next/app";
import "rc-slider/assets/index.css";
import "@/css/global.css";

export type NextPageWithLayout = NextPage & {
  layout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.layout ?? ((page) => page);

  return (
    <div className="h-screen py-8">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
