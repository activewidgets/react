
import React from 'react';
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/react';
import * as components from '@activewidgets/components';

let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});

export function render(component, props){

    if (!tags[component]){
        throw new Error('component not found - ' + component);
    }

    return originalRender(React.createElement(tags[component], props));
}

export {fireEvent, wait, waitForElement};