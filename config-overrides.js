const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin("@babel/plugin-proposal-optional-chaining"),
  // eslint-disable-next-line prettier/prettier
  (config) => {
    config = rewireReactHotLoader(config, config.mode);
    return config;
  }
);
