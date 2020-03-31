const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtensionReloader = require('webpack-extension-reloader');

const sourceRootPath = path.join(__dirname, 'src');
const distRootPath = path.join(__dirname, 'build');
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const webBrowser = process.env.WEB_BROWSER ? process.env.WEB_BROWSER : 'chrome';

const PROJECT_NAME = 'React Browser Extension Starter';

const extensionReloader =
  nodeEnv === 'watch'
    ? new ExtensionReloader({
        port: 5000,
        reloadPage: true,
        manifest: path.join(sourceRootPath, 'manifest.json'),
        entries: {
          background: 'background',
          extensionPage: ['popup', 'options'],
          contentScript: 'content-script',
        },
      })
    : () => {
        this.apply = () => {};
      };

module.exports = {
  watch: nodeEnv === 'watch',
  entry: {
    background: path.join(sourceRootPath, 'main', 'background', 'index.ts'),
    options: path.join(sourceRootPath, 'main', 'options', 'index.tsx'),
    popup: path.join(sourceRootPath, 'main', 'popup', 'index.tsx'),
    'content-script': path.join(
      sourceRootPath,
      'main',
      'contentScript',
      'index.tsx'
    ),
  },
  output: {
    path: distRootPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(sourceRootPath, 'templates', 'options.ejs'),
      inject: 'body',
      filename: 'options.html',
      title: `${PROJECT_NAME} - Options Page`,
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourceRootPath, 'templates', 'popup.ejs'),
      inject: 'body',
      filename: 'popup.html',
      title: `${PROJECT_NAME} - Popup Page`,
      chunks: ['popup'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(sourceRootPath, 'assets'),
        to: path.join(distRootPath, 'assets'),
      },
      {
        from: path.join(sourceRootPath, 'manifest.json'),
        to: path.join(distRootPath, 'manifest.json'),
      },
    ]),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(nodeEnv),
      WEB_BROWSER: JSON.stringify(webBrowser),
    }),
    extensionReloader,
    new CleanWebpackPlugin(),
  ],
};
