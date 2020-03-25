import React, {useEffect, useState} from "react";

const LikeButton:React.FunctionComponent = () =>{
    const [like,setLike] = useState(0);
    const [on, setOn] = useState(true);

    useEffect(()=>{
        document.title = `点击了 ${like} 次`
    });

    return(
        <>
            <button onClick={()=>{on && setLike(like+1)}}>
                <span role="img">👍</span>
                {like}
            </button>
            <button onClick={()=>{setOn(!on)}}>
                {on ? 'On':'Off'}
            </button>
        </>

    )
};
export default LikeButton
