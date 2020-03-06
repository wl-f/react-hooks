import React, {useState} from "react";
import useURLLoader from "../hooks/useURLLoader";

const CatShowWithHook = () =>{
    const [type,setType]=useState(null);
    const [loading,data] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=1&amp;page=0&amp;category_ids=${type}`);

    return(
        <>
            <button onClick={()=>{setType('5')}}>这种猫</button>
            <button onClick={()=>{setType('15')}}>那种猫</button>
            {
                // eslint-disable-next-line jsx-a11y/accessible-emoji
                loading ? <span>🐈读取中</span>
                    :
                    <img src={data[0].url} style={{width:300}} alt={'cat'}/>
            }
            <br/>
        </>
    )
};

export default CatShowWithHook
