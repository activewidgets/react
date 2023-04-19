/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import converter from '@activewidgets/frameworks/react';
import {Component, Fragment, createElement, cloneElement, isValidElement, createContext, Suspense, lazy} from 'react';

export const {component: ReactComponent} = converter({Component, Fragment, createElement, cloneElement, isValidElement, createContext, Suspense, lazy});
