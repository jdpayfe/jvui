const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.prod.conf.js');
const isMinify = process.argv.indexOf('-p') !== -1;

module.exports = Object.assign({}, config, {
    entry: {
        'jvui': './src/components/index.js'
    },
    output: {
        path: path.join(__dirname, '../lib'),
        library: 'jvui',
        libraryTarget: 'umd',
        filename: isMinify ? '[name].min.js' : '[name].js',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
    ],
    performance: false,
    optimization: {
        minimize: isMinify
    }
});
