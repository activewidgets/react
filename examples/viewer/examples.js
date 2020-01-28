
import hello_world from '../hello-world/README.md';
import cdn_es5 from '../cdn-es5/README.md';
import columns from '../columns/README.md';
import events from '../events/README.md';


export const Local = {
    'Hello, World!': {path: 'hello-world', readme: hello_world},
    'CDN (no build)': {path: 'cdn-es5', readme: cdn_es5},
    'Columns, rows': {path: 'columns', readme: columns},
    'User events': {path: 'events', readme: events}
};


export * from '@activewidgets/datagrid/examples';

