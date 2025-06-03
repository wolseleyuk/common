const typescript = require('@rollup/plugin-typescript').default;
const dts = require("rollup-plugin-dts").default;
const resolve = require('@rollup/plugin-node-resolve').default;
const terser = require('@rollup/plugin-terser').default;

const libraryName = "Common";

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: `dist/bundle.js`,
                format: 'umd',
                name: libraryName,
                sourcemap: true,
                globals: {
                    axios: 'axios',
                    os: 'os',
                    url: 'url'
                }
            },
            {
                file: `dist/bundle.min.js`,
                format: 'umd',
                name: libraryName,
                sourcemap: true,
                plugins: [
                    terser()
                ],
                globals: {
                    axios: 'axios',
                    os: 'os',
                    url: 'url'
                }
            }
        ],
        external: ['axios', 'os', 'url'],
        plugins: [
            resolve({
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs']
            }),
            typescript({
                tsconfig: './tsconfig.json',
            })
        ],
    },
    {
        input: 'dist/index.d.ts',
        output: {
            file: 'dist/bundle.d.ts',
            format: 'es'
        },
        plugins: [
            dts()
        ]
    }
];

module.exports = config;