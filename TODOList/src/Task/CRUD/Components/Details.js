import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Details = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();

  // Convert id to a number
  const postId = parseInt(id, 10);

  const post = state.posts.find((post) => post.id == postId);
  if (!post) {
    return <div style={styles.notFound}>Post not found</div>;
  }

  return (
    <div style={styles.detailsContainer}>
      <h2 style={styles.detailsTitle}>Details</h2>
      <div>
        <label style={styles.label}>Title:</label>
        <div style={styles.postTitle}>{post.title}</div>
      </div>
      <div>
        <label style={styles.label}>Username:</label>
        <div style={styles.postUsername}>{post.username}</div>
      </div>
      <div>
        <label style={styles.label}>Body:</label>
        <div style={styles.postBody}>{post.body}</div>
      </div>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

const styles = {
  notFound: {
    fontSize: '18px',
    color: 'red',
    margin: '20px',
  },
  detailsContainer: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  detailsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  postTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  postUsername: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  postBody: {
    fontSize: '14px',
  },
};

export default Details;
