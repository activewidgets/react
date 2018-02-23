
import {configure} from '@storybook/react';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);