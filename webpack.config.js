
const HtmlWebpackPlugin = require('html-webpack-plugin');

// //module.exports = {
//     mode: 'development',

//     // Adding Server
//     devServer: {
//         port: 8001,
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './public/index.html',
//         }),
//     ],

//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)?$/,
//                 exclude: /node_modules/,
//                 use : 'ts-loader',
//             },
//             // other rules...
//         ],
//         resolve: {
//             extensions: [
//                 '.tsx', '.ts', '.js'
//             ],
//         },
//     },

// //};

const path = require('path');

module.exports = {
    mode: 'development',

    // Adding Server
    devServer: {
        port: 8001,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};