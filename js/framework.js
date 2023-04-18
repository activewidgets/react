/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import converter from '@activewidgets/frameworks/react';
import {Component, createElement, cloneElement, isValidElement, createContext, Suspense, lazy} from 'react';

export const {h, component: ReactComponent} = converter({Component, createElement, cloneElement, isValidElement, createContext, Suspense, lazy});
