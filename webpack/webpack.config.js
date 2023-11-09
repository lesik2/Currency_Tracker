/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {
  const { env } = envVars;

  const envConfig = require(`./webpack.${env}`);
  const config = merge(commonConfig, envConfig);

  return config;
};
