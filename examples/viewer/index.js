/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import {createElement as h} from 'react';
import ReactDOM from 'react-dom';
import {Datagrid} from '@activewidgets/react';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './react.svg';
import pkg from '../../package.json';


let framework = 'React',
    container = document.getElementById('app');


function mount(component, props){
    container.innerHTML = '';
    ReactDOM.render(h(Datagrid, props), container);
}


function clean(){
    ReactDOM.unmountComponentAtNode(container);
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
