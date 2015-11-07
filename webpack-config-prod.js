/**
 * Created by root on 23/12/16.
 */

var path=require('path');
var webpack=require('webpack');

module.exports={
    devtool:'source-map',
    entry:[
        './src/entry'
    ],
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js',
        publicpath:'/js/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process_env':{
                'NODE_ENV':"'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warning:false
            }
        })
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['babel'],
                include:path.join(__dirname,'src')
            }
        ]
    }

}
