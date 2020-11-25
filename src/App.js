import React from 'react';
import './App.css';
import Windows from './components/Windows'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STA Advent Calendar 2020</h1>
      </header>
      <main className="App-main">
        <div className="App-main-left">
          <h2>left side</h2>
        </div>
        <div className="App-main-center">
          <Windows />
        </div>
        <div className="App-main-right">
          <h2>right side</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
