/*
 * @author: tokei
 * @desc: TextInput Component
 * @date: 2017/2/15
 * @license: M.I.T
 */

import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            inputText: 'initial Text', // bundle the value, so you cannot change
        };
    }

    handleChange(event){
        // console.log('change detected');
        // console.log(this)
        console.log(event.target.value)
        this.setState({
            inputText: event.target.value,
        })
    }

    render() {
        return <div>
            <input
              type="text"
              placeholder="This is going to be text"
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}
            />
            <button>Submit</button>
            <TextDisplay text={this.state.inputText}/>
            </div>
    }

}

export default TextInput;
