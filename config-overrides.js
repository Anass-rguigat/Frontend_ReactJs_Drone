const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new webpack.IgnorePlugin({
        resourceRegExp: /.*vision_bundle_mjs\.js\.map$/,
      }),
    ];

    return config;
  },
};
