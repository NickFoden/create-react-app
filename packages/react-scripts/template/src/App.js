import React from 'react';
// A few general fauna methods ready for use
// import {
//   addNewClass,
//   addSingleRecord,
//   deleteSingleRecordByRef,
//   getSingleRecordByRef,
// } from './fauna';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://docs.fauna.com/fauna/current/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn FaunaDB
        </a>
      </header>
    </div>
  );
}

export default App;
