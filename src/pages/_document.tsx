/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GOOGLE_TAG_MANAGER_ID } from "@/utils/google-tag-manager";
import { isDevelopment } from "@/utils/utils";
import { YANDEX_METRIKA_ID } from "@/utils/yandex-metrika";

// const VK_ADS_ID = process.env.NEXT_PUBLIC_VK_ADS_ID;

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
            id="google-tag-manager"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />
        )}

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

        {/* {analyticsEnabled && (
          <Script
            id="vk-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("${VK_ADS_ID}"),VK.Retargeting.Hit()},document.head.appendChild(t)})();`,
            }}
          />
        )} */}

        {analyticsEnabled && (
          <noscript>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt="яндекс метрика"
            />
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
            {/* <img src={`https://vk.com/rtrg?p=${VK_ADS_ID}`} style={{ position: "fixed", left: "-999px" }} alt="" /> */}
          </noscript>
        )}
      </body>
    </Html>
  );
}
