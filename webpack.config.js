const path = require ("path")

module.exports ={
  entry: "./src/home.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"dist")
  }
}