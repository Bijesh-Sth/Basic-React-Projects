import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json", 
    },
});

export const postsApi = () => {
    return Api.get("/posts");
};

export const gettodosApi = () => Api.get("/todos");
export const addtodosApi = (data) => Api.post("/todos", data);
export const updatetodosApi = (data, id) => Api.patch(`/todos/${id}`, data);
export const deletetodosApi = (id) => Api.delete(`/todos/${id}`);