const path = require('path');

module.exports = (env = {}) => {
  
  return {
    mode: 'production',
    entry: './host/src/index.jsx',
    output: {
      path: path.resolve(__dirname,'../public'),
      filename: `../public/build.js`,
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
