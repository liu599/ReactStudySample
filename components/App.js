/*
 * @author: tokei
 * @desc: React App
 * @date: 2017/2/15
 * @license: M.I.T
 */

import React, { Component } from 'react';
import TextInput from './TextInput';
import TextComponent from './TextComponent'
import { connect } from 'react-redux'



class App extends Component {

    // JSX and render function
    render () {
        return (
            <div>
              <div>This is a App Component </div>
                <TextInput  dispatch = {this.props.dispatch}/>
                <TextComponent todos={ this.props.todos }/>
            </div>
        );
    }

}

function mapStateToProps(state){
    "use strict";
    return state;
}


export default connect(mapStateToProps)(App);