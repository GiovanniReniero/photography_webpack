const path = require ("path")


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
  
}

