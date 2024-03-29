const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
        'base': 'http://example.com/some/page.html',

      filename: './index.html'
    })
  ]
};
