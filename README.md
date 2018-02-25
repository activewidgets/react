
[![ActiveWidgets](http://www.activewidgets.com/include/logo/aw-logo-40.png?activewidgets/react)](http://www.activewidgets.com/)

## Fast datagrid component for React

ActiveWidgets 3.0 datagrid, implemented as React Component.

- [Examples](https://rs.activewidgets.com/)
- [Docs](https://rd.activewidgets.com/)

### Installation

```bash
npm install @activewidgets/react
```

### Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from '@activewidgets/react';
import {columns, rows} from './data.js';

const app = <Grid columns={columns} rows={rows} />;

ReactDOM.render(app, document.getElementById('app'));
```

See http://www.activewidgets.com/
