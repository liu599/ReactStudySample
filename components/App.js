/*
 * @author: tokei
 * @desc: React App
 * @date: 2017/2/15
 * @license: M.I.T
 */

import React from 'react';
// import { Component } from 'react';
import TextDisplay from './TextDisplay';

const Component = require('react').Component;



class App extends Component {

    // JSX and render function
    render () {
        return <div><div>This is a React app! 3</div>
                <TextDisplay /></div>
    }

}

export default App;