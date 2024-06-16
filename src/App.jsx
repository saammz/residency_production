import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const App=()=> {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  }, []);
  return (
      <Router>
        <Routes>
          <Route path="/" element={ user ? <Navigate to="/dashboard" /> : <Landing />} />
          <Route path="/login" element={ user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer/>
      </Router>   
  )
}

export default App