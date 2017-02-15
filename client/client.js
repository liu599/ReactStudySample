/*
 * @author: tokei
 * @desc: Client JS
 * @date: 2017/2/15
 * @license: M.I.T
 */

/* eslint-disable strict */

'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

render(
    // define the encompassing component
    // Dom element we want to mount it to
    <App/>,
    document.getElementById('app')
)
