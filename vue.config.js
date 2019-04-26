const path = require('path');

// noinspection JSUnusedGlobalSymbols
module.exports = {
  lintOnSave: false,
  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    progress: false,
    port: 17000,
    host: '0.0.0.0'
  },
  chainWebpack: config => {
    // noinspection JSUnresolvedFunction, JSUnusedLocalSymbols
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('tslint-loader')
      .loader('tslint-loader')
      .tap(options => {
        return {
          emitErrors: true
        }
      })
      .end();
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // noinspection JSUnresolvedFunction
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
};

function addStyleResource(rule) {
  // noinspection JSUnresolvedFunction
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style-include.styl'),
      ],
    })
}
