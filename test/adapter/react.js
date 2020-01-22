
import {render, fireEvent, wait, waitForElement} from '@testing-library/react';
import {h} from '@activewidgets/components';


export function mount(component, props){
    return render(h(component, props));
}

export {fireEvent, wait, waitForElement};