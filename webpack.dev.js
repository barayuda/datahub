const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// DATAHUB
const DataHub = require('macaca-datahub');
const datahubMiddleware = require('datahub-proxy-middleware');
// DATAHUB CONFIG
const datahubConfig = {
  port: 5678,
  hostname: '0.0.0.0',
  // eslint-disable-next-line no-undef
  store: path.join(__dirname, 'data'),
  pathOptions: {
    start: true,
    end: false
  },
  // eslint-disable-next-line no-undef
  database: path.join(__dirname, '.macaca-datahub'),
  proxy: {
    '/api': {
      hub: 'api',
    },
  },
  showBoard: true
};

const defaultDatahub = new DataHub({
  port: datahubConfig.port,
});

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9090,
    open: true,
    overlay: true,
    hot: true,
    compress: true,
    stats: 'minimal',
    historyApiFallback: true,
    before: app => {
      datahubMiddleware(app)(datahubConfig);
    },
    after: () => {
      defaultDatahub.startServer(datahubConfig).then(() => {
        console.info('[datahub] => hub started...');
      }).catch(() => {
        console.warn('[datahub] => hub down...');
      });
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      }
    ]
  }
});