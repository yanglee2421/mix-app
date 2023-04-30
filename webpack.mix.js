// @ts-check
const mix = require("laravel-mix");
const path = require("node:path");

mix
  .ts("./src/main.ts", "dist", {
    transpileOnly: true,
  })
  .vue({
    version: 3,
    extractStyles: true,
    globalStyles: "./src/assets/index.scss",
  });

mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

mix.copyDirectory("./public", "dist");
mix.setPublicPath("dist");
mix.options({
  autoprefixer: false,
  manifest: false,
});
