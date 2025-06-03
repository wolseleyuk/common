// rollup.config.cjs

// Use require and access the .default property for plugins that have a default export
const typescript = require('@rollup/plugin-typescript').default;
const dts = require("rollup-plugin-dts").default; // <--- Likely fix for your dts error
const resolve = require('@rollup/plugin-node-resolve').default;
const terser = require('@rollup/plugin-terser').default; // For the terser plugin function

// If you were importing package.json (example):
// const pkg = require('./package.json');

const libraryName = "ObRe";

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: `dist/bundle.js`,
                format: 'umd',
                name: libraryName,
                sourcemap: true,
                globals: { // Important for UMD if externals are expected as globals
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
                    terser() // Call the terser function obtained from .default
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
        input: 'dist/index.d.ts', // Ensure this path is correct based on tsc output or typescript plugin's declaration output
        output: {
            file: 'dist/bundle.d.ts',
            format: 'es'
        },
        plugins: [
            dts() // Now 'dts' should be the actual plugin function
        ]
    }
];

module.exports = config; // Use CommonJS export for the config array