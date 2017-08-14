// we must assure the default value for state


let ListReducer =  function(todos = [],action){
    // only handle todos.
    switch (action.type) {
        // todos: object you want to update
        case 'ADD_TODO':
            return [{
                    // add new todo info
                    text: action.text,
                    completed: false,
                    id: todos.reduce((maxID, todo) => {
                        return Math.max(todo.id, maxID)
                    }, -1) + 1,
                }, ...todos]

        // state.todos.push()
        case 'COMPLETE_TODO':
            return todos.map((todo) => {

                    return todo.id === action.id ?
                        Object.assign({}, todo, {completed: !todo.completed}) : todo
                })


        case 'DELETE_TODO':
            return todos.filter((todo) => {
                    return todo.id !== action.id
                })

        default:
            return todos;
    }
}

export default ListReducer;