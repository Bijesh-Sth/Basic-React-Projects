import React, { useState, useContext } from "react";
import { AppContext } from '../Context/AppContext';

const Add = () => {
  const { dispatch } = useContext(AppContext);

  const [addForm, setAddForm] = useState({
    id: "",
    title: "",
    username: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm({
      ...addForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addForm),
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      const responseData = await response.json();
      console.log('Post added successfully:', responseData);

      dispatch({
        type: 'ADD_POST',  
        payload: responseData,  
      });

      setAddForm({
        id: "",
        title: "",
        username: "",
        body: "",
      });
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="id" style={styles.label}>
          Id
        </label>
        <input
          type="text"
          id="id"
          name="id"
          value={addForm.id}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="title" style={styles.label}>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={addForm.title}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="username" style={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={addForm.username}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="body" style={styles.label}>
          Body
        </label>
        <textarea
          id="body"
          name="body"
          value={addForm.body}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Add
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Add;
