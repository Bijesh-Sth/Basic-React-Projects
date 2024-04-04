import React, { useContext, useState, useEffect } from "react";
import { AppContext } from '../Context/AppContext';

const Update = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  const [updateForm, setUpdateForm] = useState({
    id: state.to_update.id,
    title: state.to_update.title,
    username: state.to_update.username,
    body: state.to_update.body,
  });
  useEffect(() => {
    setUpdateForm({
      id: state.to_update.id,
      title: state.to_update.title,
      username: state.to_update.username,
      body: state.to_update.body,
    });
  }, [state.to_update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'UPDATE_POST', payload: updateForm });
   
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Update</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Id</label>
        <input
          type="text"
          name="id"
          value={updateForm.id}
          style={styles.input}
          readOnly 
        />

        <label style={styles.label}>Title</label>
        <input
          type="text"
          name="title"
          value={updateForm.title}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Username</label>
        <input
          type="text"
          name="username"
          value={updateForm.username}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Body</label>
        <textarea
          name="body"
          value={updateForm.body}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Update
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

export default Update;
