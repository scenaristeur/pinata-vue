const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');
const publicPath = process.env.NODE_ENV === 'production' ? '/pinata-vue/' : '/'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath,
  pwa: {
    name: 'Pinata-vue',
    //  themeColor: '#4DBA87',
    //  msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath,
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    }
  },

  // browser-vue https://github.com/ipfs/js-ipfs/blob/c47a6335b77d5284711f13a83349000820f85775/examples/browser-vue/vue.config.js
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
      new Dotenv()
    ]
  }
})
