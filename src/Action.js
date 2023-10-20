export const addTodo = (title) => {
    return {
        type: "ADD_TODO",
        title: title
    };
};

export const editTodo = (id, title) => {
    return {
        type: "EDIT_TODO",
        id: id,
        title: title
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    };
};
