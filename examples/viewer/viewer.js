
import {Viewer} from '@activewidgets/examples';
import React from 'react';
import ReactDOM from 'react-dom';
import * as pages from '../index.js';
import * as components from '../../';


let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


function mount(component, props){
    let container = document.getElementById('app');
    container.innerHTML = '';
    ReactDOM.render(React.createElement(tags[component], props), container);
}


function clean(){
    let container = document.getElementById('app');
    ReactDOM.unmountComponentAtNode(container);
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
