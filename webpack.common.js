const path = require ("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports ={
  entry: {
    home: "./src/home.js",
    about: "./src/about.js",
    events: "./src/events.js",
    social: "./src/social.js",
    theatre: "./src/theatre.js",
    Italy: "./src/Italy.js",
  }, 
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules:[
      // {
      //   test:/.css$/,
      //   use: [
      //     // MiniCssExtractPlugin.loader, "css-loader"
      //     "style-loader", "css-loader"
      //   ],
      // },
      {
        test: /.(png|jpg|jpeg|gif|webp|svg)$/,
        type: "asset/resource"
      }
    ],
  },
  plugins:[
       
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/home.html"),
      chunks:["home"],
      inject: true,
      filename:"home.html"
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/about.html"),
      chunks:["about"],
      inject: true,
      filename:"about.html"
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/events.html"),
      chunks:["events"],
      inject: true,
      filename:"events.html"
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/Italy.html"),
      chunks:["Italy"],
      inject: true,
      filename:"Italy.html"
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/social.html"),
      chunks:["social"],
      inject: true,
      filename:"social.html"
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/theatre.html"),
      chunks:["theatre"],
      inject: true,
      filename:"theatre.html"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images/*" ),
          to: path.resolve(__dirname, "dist"),
          context: "src",
        }        
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images/**" ),
          to: path.resolve(__dirname, "dist/images"),
          context: "src/images",
        }        
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/slbox/*" ),
          to: path.resolve(__dirname, "dist"),
          context: "src",
        }        
      ],
    }),
  ],  
  optimization:{
    splitChunks: {
      chunks: "all",
    },
  },
 
}

