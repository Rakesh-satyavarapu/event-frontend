import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import StudentRegisterPage from './components/StudentRegisterPage';
import CompanyRegisterPage from './components/CompanyRegisterPage';
import CDCRegisterPage from './components/CDCRegisterPage';
import Contact from './components/Contact';
import Logout from './components/Logout';
import Chat from './components/Chat';
import LoginPage from './components/LoginPage';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<StudentRegisterPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/logout" element={<Logout />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
