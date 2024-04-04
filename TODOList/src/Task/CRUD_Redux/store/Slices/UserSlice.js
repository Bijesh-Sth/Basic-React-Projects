import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload);
        },
    },
});

console.log(UserSlice.actions);

export {UserSlice};