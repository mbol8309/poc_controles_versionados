const path = require('path');

module.exports = (env = {}) => {

    return {

        entry: './host/src/index.jsx',
        output: {
            path: path.resolve(__dirname, '../public'),
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
        devServer: {
            static: {
                directory: path.join(__dirname, '../public'), // Sirve los archivos estáticos desde aquí
            },
            port: 3000,
            open: true, // Abre el navegador automáticamente
            hot: true,  // Recarga automática (hot module replacement)
            liveReload: true, // Para que recargue si no puede hacer HMR
            compress: true,
            historyApiFallback: true, // útil si usas React Router
        },
        mode: 'development',
        plugins: [],
    };
};
