let actions ={
    addTodo: function(text){

        return {
            type: 'ADD_TODO',
            text: text,
        }
    },

    completeTodo: function(id){
        return {
            type: 'COMPLETE_TODO',
            id: id,
        }

    },

    deleteTodo: function(id){
        return {
            type: 'DELETE_TODO',
            id: id,
        }

    },

    createNewUserId: function () {


        return {
            type: 'CREATE_USER_ID',
            id: Math.floor(Math.random()*100)

        }
    },

    createNewUserIdIfOdd: function () {

        // async action.
        // react-thunk: if it is a object, it will happen sync
        // if it is a function, then thunk will pass the dispatch and state.

        return (dispatch, getState) => {

            const { user } = getState();
            if(user.id % 2 === 0) {
                console.log('do not dispatch')
                return ;
            }

            //ajax can be written here.

            setTimeout(()=>{
                dispatch(actions.createNewUserId());
            },2500)

        }
    }

}

export default actions;