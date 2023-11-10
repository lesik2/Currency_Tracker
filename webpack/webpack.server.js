/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const assets = path.resolve(__dirname, '../', './public');

module.exports = {
  target: 'web',
  devServer: {
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /favicon.ico/, to: 'public/favicon.ico' }],
    },
    devMiddleware: {
      stats: {
        children: false,
        modules: false,
      },
    },
    static: {
      directory: assets,
      watch: true,
    },
  },
};
