import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Expenses from './Pages/Expenses/Expenses';

function App() {
  return (
   <>
   <Router>
    <Sidebar/>
    <Expenses/>
   </Router>
    
   </>
  );
}

export default App;
