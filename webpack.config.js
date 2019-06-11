module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // QUAL É O ARQUIVO PRINCIPAL??
    output: {           // PARA QUAL LUGAR/ARQUIVO VAI ENVIAR O ARQUIVO CONVERTIDO
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            
        ],
    },
};