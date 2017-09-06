import React, { Component } from 'react';

class TextDisplay extends Component {

    render(){
        return <div> I want to display text {this.props.text}</div>
    }
}

export default TextDisplay;
