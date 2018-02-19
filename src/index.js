
import React from 'react';
import {ReactBuilder} from '@activewidgets/frameworks';
import {grid, row} from '@activewidgets/grid';

const build = ReactBuilder.init(React.createElement, React.PureComponent);

export const Template = ReactBuilder.Template;

export const Grid = build(grid);
export const Row = build(row);

export const components = {Grid, Row};

export default {Template, components, Grid, Row};
