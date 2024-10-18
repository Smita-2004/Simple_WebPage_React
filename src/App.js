
import React from 'react';
import Navbar from './Navbar';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <h3 >ROUTIQUE IN-HOUSE</h3>
        <h1>Design &</h1>
          <h1> Development </h1>
        <p>hello welcome to the website where we can talk to each otheer 
        </p>
        <button className="center-button">Learn More</button>
      </main>
    </div>
  );
}

export default App;
