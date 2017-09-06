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

import { bindActionCreators } from 'redux'
import actions from '../redux/action'
import UserInfo from './userInfo'


class App extends Component {

    // JSX and render function
    render () {
        return (
            <div>
                <div>this is app</div>
                <UserInfo user={this.props.user} actions={this.props.actions}/>
                <TextInput  addTodo = {this.props.actions.addTodo}/>
                <TextComponent  actions={this.props.actions} todos = {this.props.todos}/>
            </div>
        );
    }

}

function mapStateToProps(state){

    return state;
}

function mapDispatchToProps(dispatch){

    return{
        actions: bindActionCreators(actions, dispatch)
    }

}
// It is annoying to add dispatch to every item.
export default connect(mapStateToProps, mapDispatchToProps)(App);