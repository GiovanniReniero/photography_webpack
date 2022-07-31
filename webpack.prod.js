const path = require ("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const { merge } = require('webpack-merge')
const commonConfig = require ("./webpack.common.js")

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules:[
      {
        test:/.css$/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ],
      },
    ],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],  
})

