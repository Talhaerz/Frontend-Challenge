import React from 'react';
import HomePage from './pages/HomePage';
import './css/App.css';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className="app">
      <SideBar/>
      <div className="main-content">
      <HomePage />
      </div>
    </div>
  );
};

export default App;
