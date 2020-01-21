
import {Viewer} from '@activewidgets/examples';
import ReactDOM from 'react-dom';
import * as pages from '../index.js';
import {h} from '../../';


function mount(component, props){
    let container = document.getElementById('app');
    container.innerHTML = '';
    ReactDOM.render(h(component, props), container);
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
