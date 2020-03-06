import React from 'react';
import './App.css';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import DogShow from './components/DogShow'
import useMousePosition from "./hooks/useMousePosition";
import CatShowWithHook from './components/CatShowWithHook'
/*
* Hook 使用规则
* 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
* 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中。）
* */
function App() {
    const position = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <DogShow />
        <br/>
        <LikeButton />
        <MouseTracker />
        <p>mouse-X:{position.x}, mouse-Y:{position.y}</p>
          <CatShowWithHook />

      </header>
    </div>
  );
}

export default App;
