const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  mode: 'development',
  watch: true,
  target: 'web',
  entry: './lib/client/src/index.js',
  output: {
    path: path.resolve( __dirname, './dist/client' ),
    filename: 'index.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 8080
  },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx' ],
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|ttf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
