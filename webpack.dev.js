const path = require ("path")
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const { merge } = require('webpack-merge')
const commonConfig = require ("./webpack.common.js")

module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules:[
      {
        test:/.css$/,
        use: [
          "style-loader", "css-loader"
        ],
      },
    ],
  },
  plugins:[
    // new BundleAnalyzerPlugin()
  ],  
  optimization:{
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: "./dist",
  },
})
