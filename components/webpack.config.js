const path = require('path');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const version = env.version || 'v1.0';

  return {
    mode: 'production',
    entry: './components/src/index.jsx',
    output: {
      path: path.resolve(__dirname, '../public/versions'),
      filename: `controles.${version}.js`,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
      plugins: [
        new webpack.DefinePlugin({
        'process.env.VERSION': JSON.stringify(version),
      }),
    ],
  };
};
