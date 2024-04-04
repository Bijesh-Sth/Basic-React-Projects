// Update.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../store/Slices/ToDoSlice';
import { updatetodosApi } from '../API/Api';
import './CSS/Add.css';

const Update = ({ todoId, onUpdate }) => {
  const dispatch = useDispatch();
  const taskToUpdate = useSelector((state) =>
    state.todos.items.find((todo) => todo.id === todoId)
  );

  const [updatedTask, setUpdatedTask] = useState(taskToUpdate ? taskToUpdate.task : '');

  const handleUpdate = (e) => {
    e.preventDefault(); 

    dispatch(updateTodo({
      id: todoId,
      task: updatedTask,
    }));
//getting error here
    // updatetodosApi(todoId, updatedTask).then((response) => {
    //     console.log(response.data);
    //     }
    // ).catch((error) => {
    //     console.log(error);
    //     }
    // );

    setUpdatedTask('');
    onUpdate();
  };

  return (
    <div className="update-popup">
      <form onSubmit={handleUpdate}>
        <label htmlFor="updatedTask">Updated Task:</label>
        <input
          type="text"
          id="updatedTask"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default Update;
