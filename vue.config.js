const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
  plugins: [
    new NodePolyfillPlugin(),
    new Dotenv()
  ]
}
})
