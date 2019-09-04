const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.jsx',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
             test: /\.css$/,
             include: /stylesheets|node_modules|css/,
             use: ["style-loader", "css-loader"]
         },
         {
             test: /\.scss$/,
             include: /stylesheets/,
             use: [ 'style-loader', 'css-loader', 'sass-loader' ]
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
