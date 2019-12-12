
import adapter from '@activewidgets/frameworks/react';
import * as sources from '@activewidgets/grid/js';
import React from 'react';

export const {build} = adapter(React);
export const {Grid, Row, View, Scrollbars} = build(sources);
