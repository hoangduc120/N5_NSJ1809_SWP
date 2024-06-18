import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './compoments/login/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} exact />
        <Route path="/forgot-password" element={() => <h1>Forgot Password</h1>} />
        <Route path="/register" element={() => <h1>Register</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;