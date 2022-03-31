import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import examples from '@activewidgets/examples/plugin';

export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true
    },
    plugins: [
        examples(),
        markdown()
    ],
    resolve: {
        alias: {
            '@activewidgets/react': resolve('./')
        }    
    }
}