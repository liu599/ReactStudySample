function getID(state) {
    return state.todos.reduce((maxID, todo) => {
        return Math.max(todo.id, maxID)
    }, -1) + 1;
}

let reducer =  function(state,action){
    "use strict";
    switch (action.type) {

        case 'ADD_TODO':
            return Object.assign({},state, {
                todos: [{
                    // add new todo info
                    text: action.text,
                    completed: false,
                    id: getID(state),
                }, ...state.todos],

            })
            state.todos.push()
        default:
            return state;
    }
}