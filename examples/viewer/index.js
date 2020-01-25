
import {Viewer} from '@activewidgets/examples';
import ReactDOM from 'react-dom';
import {h} from '../../';
import * as pages from './examples.js';
import readme from '../README.md';
import logo from './react.svg';
import pkg from '../../package.json';


let framework = 'React',
    container = document.getElementById('app');


function mount(component, props){
    container.innerHTML = '';
    ReactDOM.render(h(component, props), container);
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
