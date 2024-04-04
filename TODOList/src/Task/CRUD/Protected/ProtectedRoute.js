import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const ProtectedRoute = () => {
    const { state } = useContext(AppContext);
    console.log(state);

  return state.is_authenticated ? <Outlet/> : <Navigate to="/login" />;

  
}

export default ProtectedRoute