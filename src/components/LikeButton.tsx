import React, {useState} from "react";

const LikeButton:React.FunctionComponent = () =>{
    const [like,setLike] = useState(0);

    return(
        <>
            <button onClick={()=>{setLike(like+1)}}><span role="img">👍</span></button>
            <span>{like}</span>
        </>

    )
};
export default LikeButton
