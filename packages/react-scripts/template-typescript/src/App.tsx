import React from 'react';
// A few general fauna methods ready for use
// import {
//   addNewCollection,
//   addSingleRecord,
//   deleteSingleRecordByRef,
//   getSingleRecordByRef,
// } from './fauna';
import * as fauna from './fauna.jpg';
import * as logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <img
            src={fauna}
            className="App-logo"
            id="fauna-logo"
            alt="fauna logo"
          />
        </section>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span className="App-links-span">
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
        </span>
      </header>
    </div>
  );
};

export default App;
