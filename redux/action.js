let actions ={
    addTodo: function(Text){
        "use strict";
        return {
            type: 'ADD_TODO',
            text: text,
        }
    }
}

export default actions;