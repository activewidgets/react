
import {render as _render, fireEvent, wait, waitForElement} from '@testing-library/react';
import {h} from '@activewidgets/components';


export function render(component, props){
    return _render(h(component, props));
}

export {fireEvent, wait, waitForElement};