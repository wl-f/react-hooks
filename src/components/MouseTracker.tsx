import React, {useEffect, useState} from "react";

const MouseTracker:React.FC = () =>{

    const [position,setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const updateMousePosition = (event:MouseEvent)=>{
            setPosition({x: event.clientX,y:event.clientY})
        };
        document.addEventListener('click',updateMousePosition)

        return ()=>{
            document.removeEventListener('click',updateMousePosition)
        }
    });

    return(
        <div>
            X: {position.x}, Y: {position.y}
        </div>
    )
};

export default MouseTracker;
