const path = require ("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules:[
      {
        test:/.css$/,
        use: [
          "style-loader", "css-loader"
        ],
        // use: ["style-loader", "css-loader" ],
      },
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
  ]
}

