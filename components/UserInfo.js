import React, { Component } from 'react';

// fileNameWithoutExtension()

class UserInfo extends Component {

    handleNewId(){
        this.props.actions.createNewUserId();
    }

    handleNewIdIfOdd(){
        this.props.actions.createNewUserIdIfOdd();
    }


    render(){

        return(
            <li>
                <div>username: {this.props.user.username}</div>
                <div>id:{this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update with random id</button>
                <button onClick={this.handleNewIdIfOdd.bind(this)}>Update with random id asnyc</button>
            </li>
        );
    }

}

export default UserInfo