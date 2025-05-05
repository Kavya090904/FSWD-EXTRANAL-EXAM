import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/employees" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/employees" />} />
          <Route path="/employees" element={isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />} />
          <Route path="/add-employee" element={isAuthenticated ? <AddEmployee /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/employees" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;