import { resolve } from "path";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const extractCSS = new ExtractTextPlugin("css/style.css");
const vendorCSS = new ExtractTextPlugin("css/vendor.css");

export default function webPackConfig() {
    return {
        entry: "./src/app.js",
        output: {
            path: resolve("dist"),
            filename: "js/bundle.js"
        },
        devtool: "source-map",
        devServer: {
            inline: true,
            contentBase: "./dist",
            port: 3000
        },
        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015", "stage-1", "react"]
                    }
                },
                {
                    test: /\.json$/,
                    exclude: /(node_modules)/,
                    loader: "json-loader"
                },
                {
                    test: /\.(png|jpg|woff2?|ttf|eot|svg)$/,
                    loader: "url-loader?limit=10000"
                },
                {
                    test: /\.css$/,
                    loader: vendorCSS.extract({
                        fallbackLoader: "style-loader",
                        loader: "css-loader",
                    })
                },
                {
                    test: /\.scss$/,
                    loader: extractCSS.extract({
                        fallbackLoader: "style-loader",
                        loader: "css-loader!sass-loader",
                    })
                }
            ]
        },
        plugins: [
            vendorCSS,
            extractCSS,
            new ProgressBarPlugin(),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "src/index.html"
            })
        ]
    };
}
