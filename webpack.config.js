const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const config = {
    entry: "./src/main",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
                plugins: [
                  [
                    "@babel/plugin-transform-runtime",
                    {
                      helpers: false,
                      regenerator: true,
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    devServer: {
      static: false,
      compress: true,
      port: 9000,
      host: "0.0.0.0",
      open: true,
      client: {
        overlay: false,
        progress: true,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "template/index.html",
      }),
    ],
  };

  return config;
};
