const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, '../../platunico/public/mod_core/js/'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#cccccc',
                'link-color': '#556FB4',
                'border-radius-base': '2px'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.modernizrrc\.js$/,
        exclude: /(node_modules)/,
        loader: "webpack-modernizr-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|otf|woff|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js"),
      public: path.resolve(__dirname, '../../public/'),
      assets: path.resolve(__dirname, '../assets/'),
      lang: path.resolve(__dirname, './src/lang'),
      api: path.resolve(__dirname, './src/api'),
      actions: path.resolve(__dirname, './src/redux/actions'),
      sass: path.resolve(__dirname, './src/assets/sass/'),
      constants: path.resolve(__dirname, './src/assets/js/Constants')
    },
    extensions: ['.js', '.jsx']
  },
  target: 'web',
  mode: 'production'
}