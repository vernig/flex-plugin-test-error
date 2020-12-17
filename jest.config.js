module.exports = (config, { isProd, isDev, isTest }) => {
  /**
   * Customize the Jest by modifying the config object.
   * Consult https://jestjs.io/docs/en/configuration for more information.
   */

  config.transformIgnorePatterns = [
    "<rootDir>/node_modules/(?!wavesurfer)"
  ]
  return config;
}
