import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import TourList from './components/tourlist';

function App() {
  return (
    <main>
      <Navbar/>
      <TourList/>
    </main>  
  );
}

export default App;
