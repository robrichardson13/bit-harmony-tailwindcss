const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const tailwindcssConfig = require('@robrichardson13/bit-harmony-tailwindcss.styles.tailwind/tailwind.config');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tcss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    tailwindcss(tailwindcssConfig),
                                    autoprefixer
                                ]
                            }
                        }
                    }
                ]
            },
        ]
    }
};