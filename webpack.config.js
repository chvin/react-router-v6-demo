const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const config = {
    mode: 'development',
    entry: {
      refreshEntry: '@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
      app: "./src/main",
    },
    output: {
      filename: "[name].js",
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
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
                  require.resolve(
                    'react-refresh/babel'
                  )
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
      // open: true,
      hot: true,
      client: {
        overlay: false,
        progress: true,
      },
    },
    optimization: {
      runtimeChunk: 'single',
      // Ensure `react-refresh/runtime` is hoisted and shared
      // Could be replicated via a vendors chunk
      splitChunks: {
        minSize: 1024 * 1024 * 1024 * 1024, // 1TB，意为不拆分 chunk
        chunks: 'all',
        name(_, __, cacheGroupKey) {
          return cacheGroupKey;
        },
      },
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "template/index.ejs",
        filename: './index.html',
        inject: false,
      }),
    ],
  };

  return config;
};
