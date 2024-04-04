import { configureStore } from "@reduxjs/toolkit";
import {UserSlice} from "./Slices/UserSlice";
import {ToDoSlice} from "./Slices/ToDoSlice";
const store = configureStore({
    reducer: {
        users: UserSlice.reducer,
        todos: ToDoSlice.reducer,
    },
});

export default store;