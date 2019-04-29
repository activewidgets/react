
import React from 'react';
import AX from '@activewidgets/frameworks/react';
import {grid, row} from '@activewidgets/grid';

let {component} = AX(React);

export const Grid = component(grid);
export const Row = component(row);

export const components = {Grid, Row};

export default {components, Grid, Row};
