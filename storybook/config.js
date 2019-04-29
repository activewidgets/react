
import {configure} from '@storybook/react';
import '../css';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);