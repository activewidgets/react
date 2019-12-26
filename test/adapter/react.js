
import React from 'react';
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/react';


export function render(component, props){
    return originalRender(React.createElement(component, props));
}

export {fireEvent, wait, waitForElement};