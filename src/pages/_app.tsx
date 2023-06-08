import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";

import localFont from "next/font/local";
import ErrorBoundary from "@/components/error-boundary/error-boundary";
import NextNProgress from "nextjs-progressbar";
import { RotateDeviceIcon } from "@/icons/rotate-device-icon";

import "@/styles/globals.css";
import "@/styles/ckeditor.css";
import "@/styles/typography.css";

//style for calendar date picker
import "@/styles/calendar.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-100.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-200.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-800.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/montserrat/montserrat-v25-latin-ext_latin_cyrillic-ext_cyrillic-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  fallback: ["Tahoma", "Segoe UI", "system-ui"],
  adjustFontFallback: "Arial",
  preload: true,
  display: "swap",
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ErrorBoundary>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <NextNProgress color="#1070EE" height={6} showOnShallow={false} options={{ showSpinner: false }} />

      <Provider store={store}>{getLayout(<Component {...props.pageProps} />)}</Provider>

      <div className="rotate_device_landscape_notification">
        <RotateDeviceIcon width={80} height={80} title="Переверните устройство" />
        <p>Пожалуйста, переверните устройство</p>
      </div>
    </ErrorBoundary>
  );
}
