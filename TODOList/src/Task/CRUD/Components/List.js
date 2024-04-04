import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';

const List = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleDelete = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: postId });
  };

  const handleUpdate = (post) => {
    dispatch({ type: 'RENDER_UPDATE', payload: post });
    console.log("render update");
    console.log(`Update post with ID: ${post}`);
  };

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>List</h2>
      {/* List of posts */}
      <ul style={styles.list}>
        {state.posts.map((post) => (
          <li key={post.id} style={styles.listItem}>
            <Link to={`/post/${post.id}`} style={styles.link}>
              {post.title}{' '}
            </Link>
            <button onClick={() => handleDelete(post.id)} style={styles.deleteButton}>
              Delete
            </button>
            <button onClick={() => handleUpdate(post)} style={styles.button}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    marginRight: "10px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginRight: "10px",
  },
};

export default List;
