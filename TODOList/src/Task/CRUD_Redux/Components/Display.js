import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos, itemChecked, removeTodo, setSearchTerm, setFilter } from '../store/Slices/ToDoSlice';
import { gettodosApi } from '../API/Api';
import './CSS/Display.css';
import Update from './Update';

const Display = () => {
  const todos = useSelector((state) => state.todos.items);
  const searchTerm = useSelector((state) => state.todos.searchTerm);
  const sortType = useSelector((state) => state.todos.sortType);
  const dispatch = useDispatch();

  useEffect(() => {
    gettodosApi()
      .then((response) => {
        console.log("data fetched");
        dispatch(setTodos(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState(null);

  const handleCheckboxChange = (todoId) => {
    dispatch(itemChecked({ id: todoId }));
  };

  const handleDelete = (todoId) => {
   
    const confirmed = window.confirm("Are you sure you want to delete this task?");
  
    if (confirmed) {
      console.log(todoId);
      dispatch(removeTodo(todoId));
    }
  };
  

  const handleUpdate = (todoId) => {
    setUpdateTodoId(todoId);
    setShowUpdatePopup(true);
  };

  const handleUpdateComplete = () => {
    dispatch(setSearchTerm('')); 
    setShowUpdatePopup(false);
    setUpdateTodoId(null);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    dispatch(setFilter(sortType));
  };


  const filteredTodos = todos.filter((todo) =>
  todo.task && todo.task.toLowerCase().includes(searchTerm.toLowerCase())
);

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortType === 'asc') {
      return a.task.localeCompare(b.task);
    } else if (sortType === 'desc') {
      return b.task.localeCompare(a.task);
    }
    return 0;
  });

  return (
    <>
      <h1>Display</h1>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label htmlFor="sort">Sort:</label>
        <select
          id="sort"
          value={sortType}
          onChange={handleSortChange}
        >
          <option value="">--Select--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <p>Total Tasks: {todos.length}</p>
      <p>Completed Tasks: {todos.filter((todo) => todo.completed).length}</p>
      <ol>
        {sortedTodos.map((todo) => (
          <li key={todo.id} id={todo.id}>
            <span className="text">
              <input
                type="checkbox"
                id={todo.id}
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.completed}
              />
              {todo.task}
            </span>
            <span>
              <button className="update-btn" onClick={() => handleUpdate(todo.id)}>Update</button>
              <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ol>
      {showUpdatePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Update todoId={updateTodoId} onUpdate={handleUpdateComplete} />
            <button onClick={handleUpdateComplete}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;