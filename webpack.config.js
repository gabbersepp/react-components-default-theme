const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/style/styles.scss",
    output: {
        path: path.join(__dirname, "./dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "jb-react-components-default-theme.css"
        })
    ],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            outputPath: "./"
                        }
                    }
                ]
            }
        ]
    }
}