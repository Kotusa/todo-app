// require react-app-rewired v. >= 2.0
const webpack = require('webpack');
const { alias, configPaths, aliasJest } = require('react-app-rewire-alias');
const { override, addLessLoader, addBabelPlugin, addBundleVisualizer } = require('customize-cra');

const aliases = configPaths('./jsconfig.paths.json');

module.exports = override(
  // require less && less-loader
  addLessLoader({
    javascriptEnabled: true,
  }),
  // require react-app-rewire-styled-components && styled-components
  addBabelPlugin(['styled-components', { displayName: true }]),
  // require webpack-bundle-analyzer
  (config) => {
    return process.env.NODE_ENV === 'production'
      ? addBundleVisualizer({
          analyzerMode: 'static',
          reportFilename: 'report.html',
        })(config)
      : config;
  },
);

module.exports = alias(aliases);
module.exports.jest = aliasJest(aliases);
