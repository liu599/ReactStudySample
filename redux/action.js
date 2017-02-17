let actions ={
    addTodo: function(text){
        "use strict";
        return {
            type: 'ADD_TODO',
            text: text,
        }
    }
}

export default actions;