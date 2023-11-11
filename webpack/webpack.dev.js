/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const devServer = require('./webpack.server');

module.exports = (env, argv) => {
  const config = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new DefinePlugin({
        PRODUCTION: JSON.stringify(false),
      }),
      new BundleAnalyzerPlugin(),
    ],
  };

  return merge(config, devServer);
};
