const path = require("path");
var HelloWorldPlugin = require("./plugins/hello-world");
const { FileListPlugin } = require("./plugins/file-list");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  // resolveLoader: {
  //   modules: ["node_modules", path.resolve(__dirname, "./loaders")],
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: path.resolve(
              __dirname,
              "./loaders/my-style-loader/index.js"
            ),
          },
          {
            loader: "css-loader",
          },
          // {
          //   loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env"],
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new HelloWorldPlugin({ filename: "666.md" }),
    // new FileListPlugin({
    //   outputFile: "my-assets.md",
    // }),
  ],
};
