/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const CircularDependencyPlugin = require("circular-dependency-plugin");

const plugins = [];

if (process.env.ANALYZE === "true") {
  // only load dependency if env `ANALYZE` was set
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });

  plugins.push(withBundleAnalyzer);
}

const StylelintPlugin = require("stylelint-webpack-plugin");

const path = require("path");
const loaderUtils = require("loader-utils");

const orderRedirects = [
  {
    source: "/order/graduation-work",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/business-plan",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/report",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/doctoral",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/phd",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/cases",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/consultation",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/test-work",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/term-paper",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/laboratory-work",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/masters",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/methodical-instructions",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/monograph",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/online-help",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/ticket-answers",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/practice-report",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/translation",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/originality-increase",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/literature",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/exam-preparation",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/research",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/presentation",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/programming",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/composition",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/review",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/opus",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/article",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/tests",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/scheme",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/essay",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/tasks",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/other",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/new",
    destination: "/",
    permanent: true,
  },
  {
    source: "/order/diplomnaya-rabota",
    destination: "/prices/diplomnaya-rabota",
    permanent: true,
  },
  {
    source: "/order/vkr",
    destination: "/prices/diplomnaya-rabota",
    permanent: true,
  },
  {
    source: "/order/kursovaya-rabota",
    destination: "/prices/kursovaya-rabota",
    permanent: true,
  },
  {
    source: "/order/referat",
    destination: "/prices/referat",
    permanent: true,
  },
  {
    source: "/order/doklad",
    destination: "/prices/doklad",
    permanent: true,
  },
  {
    source: "/order/doklad",
    destination: "/prices/doklad",
    permanent: true,
  },
  {
    source: "/order/prezentaciya",
    destination: "/prices/prezentaciya",
    permanent: true,
  },
  {
    source: "/order/konsultaciya",
    destination: "/prices/konsultaciya",
    permanent: true,
  },
  {
    source: "/order/otchet-po-praktike",
    destination: "/prices/otchet-po-praktike",
    permanent: true,
  },
  {
    source: "/order/magisterskaya-rabota",
    destination: "/prices/magisterskaya-dissertaciya",
    permanent: true,
  },
];

// based on https://github.com/vercel/next.js/blob/0af3b526408bae26d6b3f8cab75c4229998bf7cb/packages/next/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.ts
const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(`filePath:${path.relative(context.rootContext, context.resourcePath).replace(/\\+/g, `/`)}#className:${exportName}`),
      "md4",
      "base64",
      6
    )
    .replace(/^(-?\d|--)/, "_$1")
    .replaceAll("+", "_")
    .replaceAll("/", "_");

let nextConfigProd = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "backend.bezperesdach.ru", port: "80" }],
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  redirects: async () => [
    { source: "/ugolok-studenta/page/1", destination: "/ugolok-studenta", permanent: true },
    {
      source: "/order",
      destination: "/prices",
      permanent: true,
    },
    {
      source: "/uploads/:path*",
      destination: "https://backend.bezperesdach.ru/uploads/:path*",
      permanent: true,
    },
    ...orderRedirects,
  ],
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      })
    );

    config.plugins.push(new StylelintPlugin());

    const rules = config.module.rules.find((rule) => typeof rule.oneOf === "object").oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (moduleLoader.loader?.includes("css-loader") && !moduleLoader.loader?.includes("postcss-loader"))
          moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
      });
    });

    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.mov$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.webm$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

let nextConfigDev = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  redirects: async () => [
    { source: "/ugolok-studenta/page/1", destination: "/ugolok-studenta", permanent: true },
    {
      source: "/order",
      destination: "/order/novyi",
      permanent: true,
    },
    {
      source: "/uploads/:path*",
      destination: "http://localhost:1337/uploads/:path*",
      permanent: true,
    },
    ...orderRedirects,
  ],
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      })
    );

    config.plugins.push(new StylelintPlugin());

    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.mov$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.webm$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return plugins.reduce((acc, next) => next(acc), nextConfigDev);
  }

  return plugins.reduce((acc, next) => next(acc), nextConfigProd);
};
