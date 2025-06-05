import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = (isProduction) => ({
    entry: './src/index.ts',
    devtool: isProduction ? false : 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: { comments: false },
                    compress: { drop_console: isProduction },
                },
            }),
        ],
    },
});

export default (env, argv) => {
    const isProduction = argv.mode === 'production';

    return [
        {
            ...commonConfig(isProduction),
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'index.js',
                libraryTarget: 'module',
                clean: true,
            },
            experiments: {
                outputModule: true,
            },
            target: 'web',
        },
        {
            ...commonConfig(isProduction),
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'index.cjs',
                libraryTarget: 'commonjs2',
                clean: false,
            },
            target: 'node',
        },
        {
            ...commonConfig(isProduction),
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'index.umd.js',
                library: {
                    name: 'Common',
                    type: 'umd',
                },
                clean: false,
            },
            target: 'web',
        },
    ];
};