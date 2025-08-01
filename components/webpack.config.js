const path = require('path');

module.exports = (env = {}) => {
  const version = env.version || 'v1.0';

  return {
    mode: 'production',
    entry: './components/src/index.jsx',
    output: {
      path: path.resolve(__dirname, '../public'),
      filename: `../public/versions/controles.${version}.js`,
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
