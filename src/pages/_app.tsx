import { type NextPage } from "next";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "rc-slider/assets/index.css";
import "@/css/global.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
