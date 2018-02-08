
import React from 'react';
import ReactDOM from 'react-dom';
import {react} from '@activewidgets/frameworks';
import * as options from '@activewidgets/grid';

const component = react(React.createElement, React.PureComponent),
    Grid = component(options.grid),
    Row = component(options.row),
    components = {Grid, Row};

export {React, ReactDOM, components as default, components, Grid, Row};
