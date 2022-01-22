const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = mode => mode === 'production';
const isDevelopment = mode => mode === 'development';

const resolve = {
    alias: {
        '@Auth': path.resolve(__dirname, 'src', 'auth'),
        '@Components': path.resolve(__dirname, 'src', 'components'),
        '@Routers': path.resolve(__dirname, 'src', 'routers')
    },
    extensions: ['.jsx', '...'],
    plugins: [ new DirectoryNamedWebpackPlugin() ]
}

const rulesBabel = mode => ({
    test: /\.jsx?$/i,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                ['@babel/preset-env', {
                    useBuiltIns: 'usage',
                    corejs: 3.20
                }],
                ['@babel/preset-react', {
                    runtime: 'automatic',
                    development: isDevelopment(mode)
                }]
            ]
        }
    }
})

const rulesStyles = mode => ({
    test: /\.css$/i,
    use: [
        isProduction(mode)
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
        'css-loader'
    ]
})

const rulesFonts = {
    type: 'asset/resource',
    test: /\.(woff2?|eot|ttf|otf)$/i,
}

const rulesImages = {
    type: 'asset/resource',
    test: /\.(svg|png|jpe?g|gif)$/i
}

const rulesCommon = mode => ([
    rulesBabel(mode),
    rulesStyles(mode),
    rulesFonts,
    rulesImages
])

const plugins = mode => ([
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'public', 'index.html'),
        inject: 'body'
    }),
    new DotenvWebpackPlugin({ path: path.join(__dirname, '.env') }),
    isProduction(mode) && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    })
].filter(Boolean))

const devtool = mode => (
    isProduction(mode)
        ? 'hidden-nosources-source-map'
        : 'cheap-module-source-map'
)

const output = {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    clean: true
}

const optimization = {
    minimize: true,
    minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ],
    splitChunks: { chunks: 'all' },
    nodeEnv: 'production'
}

const devServer = {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000
}

const commonConfig = mode => ({
    entry: path.join(__dirname, 'src', 'index.js'),
    resolve,
    module: { rules: rulesCommon(mode) },
    plugins: plugins(mode),
    devtool: devtool(mode)
})

const productionConfig = mode => ({
    ...commonConfig(mode),
    output,
    optimization
})

const developmentConfig = mode => ({ ...commonConfig(mode), devServer })

module.exports = (env, { mode }) => (
    isProduction(mode)
        ? productionConfig(mode)
        : developmentConfig(mode)
)