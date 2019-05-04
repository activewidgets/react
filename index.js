
import React from 'react';
import framework from '@activewidgets/frameworks/react';
import {grid, row} from '@activewidgets/grid';

let {component} = framework(React);

export const Grid = component(grid);
export const Row = component(row);

export const components = {Grid, Row};

