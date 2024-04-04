import React, { useState } from 'react';
import './CSS/Add.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/Slices/ToDoSlice';
import { addtodosApi } from '../API/Api';

const Add = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      task,
      completed: false,
    };

    try {
      
      const response = await addtodosApi(newTask);

      dispatch(addTodo({
        id: response.data.id, 
        ...newTask,
      }));

      console.log(response.data);
    } catch (error) {
      console.error('Error adding task:', error);
    }

    // Reset the form
    setTask('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Add;