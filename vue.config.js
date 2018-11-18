// noinspection JSUnusedGlobalSymbols
module.exports = {
  lintOnSave: false,
  baseUrl: undefined,
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
      .end()
  }
};
