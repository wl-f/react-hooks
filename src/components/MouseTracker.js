import React, {useState, useEffect} from "react";

const MouseTracker = () =>{
    const [position, setPosition] = useState({x:0,y:0});
    useEffect(()=>{
        const updateMouse = (event)=>{
            setPosition({x:event.clientX,y:event.clientY})
        };
        document.addEventListener('click',updateMouse);

        // 副作用函数还可以通过返回一个函数来指定如何“清除”副作用
        return () =>{
            document.removeEventListener('click',updateMouse)
        }
    });

    return(
        <p>
            X: {position.x},
            Y: {position.y}
        </p>
    )
};

export default MouseTracker
