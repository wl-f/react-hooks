import {useState, useEffect} from 'react'

const useMousePosition = () =>{
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const updateMouse = (event:MouseEvent)=>{
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
