import React, { Component } from 'react';

// fileNameWithoutExtension()

class UserInfo extends Component {

    handleNewId(){
        this.props.createNewUserId();
    }


    render(){

        return(
            <li>
                <div>username: {this.props.user.username}</div>
                <div>id:{this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update with random id</button>
            </li>
        );
    }

}

export default UserInfo