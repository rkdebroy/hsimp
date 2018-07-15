const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",

            options: {
                presets: ["env"]
            }
        }]
    },

    plugins: [
        new UglifyJSPlugin()
    ],

    entry: "./src/hsimp.js",

    output: {
        filename: "hsimp.min.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var",
        library: "hsimp"
    },

    mode: "production"
}
