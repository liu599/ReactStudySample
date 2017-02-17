import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TextComponent extends Component {

    render() {
        return (
            <div>
                <ul>
                        {
                            this.props.todos.map((todo) => {
                                return <TodoItem key={todo.id}
                                                 todo={todo}
                                                 actions={this.props.actions}/>
                            })
                        }
                </ul>
            </div>
        )
    }
}

export default TextComponent;