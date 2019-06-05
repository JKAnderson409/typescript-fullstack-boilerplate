const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  mode: 'development',
  watch: true,
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.resolve( __dirname, '../dist/client' ),
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
    extensions: [ '.js', '.ts', '.tsx' ]
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
