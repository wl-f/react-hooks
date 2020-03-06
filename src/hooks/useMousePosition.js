import  {useState, useEffect} from "react";
/*
* 自定义 Hook
* Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个 完全独立 的 state
* 自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook
* */
const useMousePosition = () =>{
    const [position, setPosition] = useState({x:0,y:0});
    useEffect(()=>{
        const updateMouse = (event)=>{
            setPosition({x:event.clientX,y:event.clientY})
        };
        document.addEventListener('mousemove',updateMouse);

        return () =>{
            document.removeEventListener('mousemove',updateMouse)
        }
    });
    return position;
};

export default useMousePosition
