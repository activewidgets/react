
import adapter from '@activewidgets/frameworks/react';
import * as sources from '@activewidgets/datagrid/js';
import React from 'react';

export const {build} = adapter(React);
export const {Datagrid, Row, Gridview, Scrollbars} = build(sources);
