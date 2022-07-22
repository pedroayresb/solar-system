import React from 'react';
import Header from './components/Header';
import './App.css';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

function App() {
  return (
    <main>
      <Header />
      <SolarSystem />
      <Missions />
    </main>
  );
}
export default App;
