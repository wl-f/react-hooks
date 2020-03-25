import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import DogShow from "./components/DogShow";
import useMousePosition from './hooks/useMousePosition';

function App() {
  const position = useMousePosition();
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
        <p>mouse-X:{position.x}, mouse-Y:{position.y}</p>

      </header>
    </div>
  );
}

export default App;
