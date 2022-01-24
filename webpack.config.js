module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    'babel-loader',
                    'vue-svg-loader'
                    // {
                    //     loader: 'vue-svg-loader',
                    //     options: {outputPath: 'svg'},
                    // },
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