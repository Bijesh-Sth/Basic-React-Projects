import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './CRUD/Context/AppContext';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    const handleLogin = async () => {
        if (username === 'admin' && password === 'admin') {
            dispatch({ type: 'LOGIN' });
            navigate('/reducer');
        }else{
            alert('Invalid credentials');
        }
    }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
  },
};

export default LoginPage;
