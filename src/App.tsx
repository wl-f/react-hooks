import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import DogShow from "./components/DogShow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogShow/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HelloWorld message={'Hello, lw'}/>
        <LikeButton/>
        <MouseTracker/>

      </header>
    </div>
  );
}

export default App;
