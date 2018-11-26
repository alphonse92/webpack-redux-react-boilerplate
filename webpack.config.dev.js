import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const regex = {

  css_no_global: /^((?!\.global).)*\.css$/,
  css_global: /(\.global\.css$)/,

  sass_no_global: /^((?!\.global).)*\.(sass|scss)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  sass_global: /(\.global\.(sass|scss)(\?v=[0-9]\.[0-9]\.[0-9])?$)/,

  js: /\.js$/,
  files: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/
}

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[name].css"
    })
  ],
  module: {
    rules: [
      { test: regex.js, include: path.join(__dirname, 'src'), loaders: ['babel-loader'] },
      {
        test: regex.css_global,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          'css-loader'
        ]
      },
      {
        test: regex.sass_global,
        use: [

          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
      {
        test: regex.css_no_global,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: regex.sass_no_global,
        use: [

          { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },

      { test: regex.files, loader: 'url-loader' }
    ]
  }
};
