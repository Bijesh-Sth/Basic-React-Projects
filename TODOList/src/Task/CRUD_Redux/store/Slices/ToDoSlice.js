import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        searchTerm: '',
        sortType: '',
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        },
        setTodos: (state, action) => {
            state.items = action.payload;
        },
       
        updateTodo: (state, action) => {
            const { id, task } = action.payload;
            const todoIndex = state.items.findIndex((todo) => todo.id === id);
          
            if (todoIndex !== -1) {
              state.items[todoIndex].task = task;
            }
          },
        itemChecked: (state, action) => {
            state.items = state.items.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        },
        setFilter: (state, action) => {
            state.sortType = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

console.log(ToDoSlice.actions);

export { ToDoSlice };
export const {
    setLoading,
    setError,
    addTodo,
    setTodos,
    removeTodo,
    updateTodo,
    itemChecked,
    setFilter,
    setSearchTerm,
} = ToDoSlice.actions;
