import path              from 'path'
import webpack           from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'babel-runtime/regenerator',
      'babel-register',
      'webpack-hot-middleware/client?reload=true',
      './src/app.js'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HTMLWebpackPlugin({
      template: './src/index.ejs',
      inject: true,
      title: 'PWA React Redux Saga'
    })
  ]
}