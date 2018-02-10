
import React from 'react';
import { storiesOf } from '@storybook/react';

import basic from '../examples/basic.js';

storiesOf('datagrid', module)

    .add('basic', basic)

    .add('button', () => (
        <button>Hello Button</button>
    ));