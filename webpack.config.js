const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//entry point -> output file

module.exports = (env)=>{
    const isProduction = env ==='production';
    const cssExtract = new ExtractTextPlugin('styles.css');

return {
    mode:'none',
    entry:"./src/app.js",
    output:{
        path: path.join (__dirname, 'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            
            test: /\.s?css$/,
            use: cssExtract.extract({
                use:[
                    'css-loader',
                    'sass-loader'
                ]
            })
        }
        ]
    },
    plugins:[
        cssExtract
    ],
    devtool: isProduction? 'source-map':'cheap-module-eval-source-map',
    devServer:{
        contentBase : path.join (__dirname, 'public'),
        historyApiFallback:true
    }
    };
};


