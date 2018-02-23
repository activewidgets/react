
import React from 'react';
import {storiesOf} from '@storybook/react';

import basic from '../examples/basic.js';

storiesOf('Demo', module)

    .add('datagrid', basic)

    .add('button', () => (
        <button>Hello Button</button>
    ));