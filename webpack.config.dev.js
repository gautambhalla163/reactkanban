/**
 * Created by root on 23/12/16.
 */

var path = require("path");
var webpack = require("webpack");

module.exports={
    devtool:"source-map",
    entry:[
        'webpack-hot-middleware/client',
        './src/entry'
    ],
    output:{
        path:path.join(__dirname,"src/build"),
        filename:"bundle.js",
        publicPath:"/js/"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['babel'],
                include:path.join(__dirname,"src"),
                exclude:/node_modules/
            },
        ]
    }
}
