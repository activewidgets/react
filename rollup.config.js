
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'react': 'React',
    '@activewidgets/frameworks/react': 'ActiveWidgets.frameworks.react',
    '@activewidgets/grid': 'ActiveWidgets.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-react.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.React', extend: true, globals},
        {file: 'dist/ax-react.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'react',
        '@activewidgets/frameworks/react',
        '@activewidgets/grid'
    ],
    plugins: [
        resolve(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [["@babel/env", {modules: false}]]
        })
    ]
};