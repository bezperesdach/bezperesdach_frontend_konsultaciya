module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          "postcss-flexbugs-fixes",
          [
            "postcss-preset-env",
            {
              autoprefixer: {
                flexbox: true,
              },
              stage: 2,
            },
          ],
          [
            "@fullhuman/postcss-purgecss",
            {
              content: [
                "./src/**/*.{js,jsx,ts,tsx}",
                "./node_modules/react-multi-carousel/**/*.{js,jsx,ts,tsx}",
                "./node_modules/react-calendar/src/**/*.{js,jsx,ts,tsx}",
              ],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: {
                standard: ["grecaptcha-badge"],
                deep: [],
                greedy: [/^react-multi-carousel-/, /^react-multiple-/, /^react-calendar/],
              },
            },
          ],
        ]
      : [],
};
