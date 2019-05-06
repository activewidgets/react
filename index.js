
import React from 'react';
import framework from '@activewidgets/frameworks/react';
import * as pkg from '@activewidgets/grid';

const {build} = framework(React);

export const {Grid, Row, View, Scrollbars} = build(pkg);
