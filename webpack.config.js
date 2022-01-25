module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        use: [
                            'babel-loader',
                            'vue-svg-loader',
                        ],
                    },
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'assets/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'url',
            //     query: {
            //         limit: 10000,
            //         name: '[name].[ext]',
            //         outputPath:'images',
            //     }
            // }
        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    }
}