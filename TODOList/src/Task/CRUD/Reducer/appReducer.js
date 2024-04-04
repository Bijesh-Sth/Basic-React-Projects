export const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          loading: true,
          error: '',
        };
  
      case 'FETCH_SUCCESS':
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: '',
        };
  
      case 'FETCH_ERROR':
        return {
          ...state,
          loading: false,
          posts: [],
          error: action.payload,
        };
  
      case 'ADD_POST':
        
        return {
          ...state,
          posts: [...state.posts, action.payload],
          

        };
        case 'RENDER_UPDATE':
      return {
        ...state,
        render_update: true,
        to_update: action.payload,
      };
        case 'UPDATE_POST':
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      fetch(`http://localhost:5000/posts/${action.payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      });
      return {
        ...state,
        posts: updatedPosts,
        render_update: false,
      };

      
      case 'DELETE_POST':
        const filteredPosts = state.posts.filter((post) => post.id !== action.payload);
        fetch(`http://localhost:5000/posts/${action.payload}`, {
            method: 'DELETE',
            });
        return {
          ...state,
          posts: filteredPosts,
        };
      case 'LOGIN':
        return {
          ...state,
          is_authenticated: true,
        };
  
      default:
        return state;
    }
  };
  