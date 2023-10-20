import { combineReducers } from "redux";

const initialState = []

const todo = (state = initialState, action) => {

    const data = action.title;

    switch (action.type) {

        case "ADD_TODO":
            const allInputData = { id: new Date().getTime().toString(), title: data.title }
            return ([...state, allInputData]);


        case "EDIT_TODO":

            return state.map((item) => item.id === action.id ?
                { title: action.title } : item)



        case "DELETE_TODO":
            return (state.filter((id) => id.id !== action.id));

        default:
            return state;
    }
}

const todoReducer = combineReducers({
    todo
});

export default todoReducer;
