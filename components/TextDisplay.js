import React, { Component } from 'react';

class TextDisplay extends Component {

    handleClick(){
        console.log('button click');
        console.log(this);
        this.props.deleteLetter();
    };

    render(){
        return <div>
            <div>   I want to display text 2 {this.props.text}</div>
            <button onClick={this.handleClick.bind(this)} > delete one letter </button>
          </div>
    }
}

export default TextDisplay;
