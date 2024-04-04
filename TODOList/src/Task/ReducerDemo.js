import { useReducer, useEffect } from 'react';

const initialState = {
  loading: true,
  error: '',
  posts: [], 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        posts: action.payload, 
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        posts: [], 
        error: 'Something went wrong!',
      };
   case 'DELETE_POST':
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('http://localhost:5000/posts/');
        
        const data = await response.json();
        
        // data=  data.splice(0, 10); //only take first 10 data
        //  console.log(data);
         dispatch({ type: 'FETCH_SUCCESS', payload: data });
        // const updated = data.splice(0, 10); //only take first 10 data
        // dispatch({ type: 'FETCH_SUCCESS', payload: updated });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, []);

  // const handleDelete = (postId) => {
   
  //   dispatch({ type: 'DELETE_POST', payload: postId });
  //   fetch(`https://localhost:5000/posts/${postId}`, {
  //     method: 'DELETE',
  //   });
  // };
  const handleDelete = (postId) => {
    console.log('Deleting post with ID:', postId);
    dispatch({ type: 'DELETE_POST', payload: postId });
  
    fetch(`http://localhost:5000/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => console.log('Delete response:', response))
      .catch((error) => console.error('Delete error:', error));
  };
  

  return (
    <div>
      {state.loading ? <p>Loading...</p> : null}
      {state.error ? <p>Error: {state.error}</p> : null}
      {state.posts.length > 0 ? (
        <div>
           <ul>
            {state.posts.map((post) => (
              <li key={post.id}>
                {post.title}{' '}
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
         
        </div>
      ) : null}
    </div>
  );
};

export default ReducerDemo;
