import "@/css/global.css";
import { type NextPage } from "next";
import type { AppProps } from "next/app";
import "rc-slider/assets/index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../config/store/index";

export type NextPageWithLayout = NextPage & {
  layout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.layout ?? ((page) => page);

  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <ToastContainer />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Provider>
  );
}

export default MyApp;
