/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { isDevelopment } from "@/utils/utils";
import { YANDEX_METRIKA_ID } from "@/utils/yandex-metrika";

const analyticsEnabled = !isDevelopment;

export default function Document() {
  return (
    <Html lang="ru" dir="ltr">
      <Head>
        {/* <meta httpEquiv="Content-Security-Policy" content={generateCSP()} /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png?v=5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png?v=5" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png?v=5" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest?v=5" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg?v=5" color="#1170ee" />
        <link rel="icon" href="/favicon.ico?v=5" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=5" type="image/x-icon" />
        <meta name="apple-mobile-web-app-title" content="Безпересдач" />
        <meta name="application-name" content="Безпересдач" />
        <meta name="msapplication-TileColor" content="#2d89ef" />

        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml?v=5" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bezperesdach.online" />

        <meta property="og:site_name" content="Безпересдач" />
      </Head>

      <body>
        <Main />
        <NextScript />

        {analyticsEnabled && (
          <Script
            id="yandex-metrica"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(${YANDEX_METRIKA_ID}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
  });`,
            }}
          />
        )}

        {analyticsEnabled && (
          <noscript>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt="яндекс метрика"
            />
          </noscript>
        )}
      </body>
    </Html>
  );
}
