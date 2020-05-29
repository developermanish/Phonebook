// postcss.config.js

const plugins = ["tailwindcss", "autoprefixer", "postcss-preset-env"];

if (process.env.NODE_ENV === "production") {
  plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }
  ]);
}

module.exports = {
  plugins: [
    ...plugins
  ]
};
