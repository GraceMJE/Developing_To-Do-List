import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDoDetail from './pages/TodoDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Detail Page */}
        <Route path="/todo/:id" element={<ToDoDetail />} />
      </Routes>
    </Router>
  );
}
