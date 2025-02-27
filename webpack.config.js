const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "bundle.[contenthash].js" : "bundle.js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        // Jika ada file gambar atau asset lain, Anda dapat menambah rule di sini.
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // gunakan file HTML Anda sebagai template
        inject: "body",
      }),
    ],
    devServer: {
      static: path.join(__dirname, "dist"),
      port: 3000,
      open: true,
      hot: true,
      proxy: {
        "/notes": {
          target: "https://notes-api.dicoding.dev/v2",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    mode: isProduction ? "production" : "development",
  };
};
