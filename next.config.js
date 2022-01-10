/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "components"),
      libs: path.resolve(__dirname, "libs"),
      public: path.resolve(__dirname, "public"),
      styles: path.resolve(__dirname, "styles"),
      types: path.resolve(__dirname, "types"),
      pages: path.resolve(__dirname, "pages"),
      assets: path.resolve(__dirname, "public/assets"),
      apis: path.resolve(__dirname, "pages/apis"),
    };

    return config;
  },
};
