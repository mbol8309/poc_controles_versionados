const path = require('path');

module.exports = (env = {}) => {
  const version = env.version || 'v1';

  return {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'versions'),
      filename: `public/controles.${version}.js`,
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
    plugins: [],
  };
};
