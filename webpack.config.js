const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

const DIR_PROJECT = path.resolve(__dirname, '.');
const DIR_SRC = path.resolve(DIR_PROJECT, 'src');
const DIR_DIST = path.resolve(DIR_PROJECT,'dist');

const CONFIG = {
    entry: {
        index: path.resolve(DIR_SRC, 'index.js'),
        // exlib: path.resolve(DIR_SRC, 'exlib.js'),
    },
    output: {
        filename: '[name].js',
        path: DIR_DIST,
    },
    module: {
        rules: [
            // { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] },
            { test: /\.(html|png|jpg|ico)$/, use: 'file-loader?context=src&name=[path][name].[ext]' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=@babel/env&presets[]=@babel/react' },
        ],
    },
    // plugins: [new VueLoaderPlugin()],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: DIR_DIST,
        https: false,
        disableHostCheck: true,
        public: '0.0.0.0:0',
    },
    // target: 'electron-renderer', // 避免打包'electron'
    // externals: { 'jquery': '$' }, // package-name在前
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'two.js': 'Two',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': DIR_SRC,
        },
    },
};

function config(env = {}, argv) { // 当webpack命令没有指定--env参数时, env未定义, 可以设置默认值env = {}, 也可以在读成员时加逻辑: env && env.custom_param
    if (env && env.production) {
        console.log('Build production');
        CONFIG.mode = 'production';
        delete CONFIG.devtool;
        delete CONFIG.devServer;
    }
    if (env && env.rebuild) {
        console.log('Rebuild production');
        console.log('OS:', process.platform);
        try {
            const child_process = require('child_process');
            if (process.platform.match(/^win.*/)) { // Implement this on Windows OS
                child_process.execSync(`rmdir /S /Q "${DIR_DIST}"`);
            } else if (process.platform.match(/^linux.*/)) { // Implement this on Linux OS
                child_process.execSync(`rm -rf '${DIR_DIST}'`);
            }
        } catch (error) { }
    }
    if (env && env.localhost) {
        delete CONFIG.devServer.public;
    }
    return CONFIG;
}
module.exports = config; // 导出函数, 从而可以根据package.json定义的脚本中webpack命令的参数--env.custom_param=value