import React, {useEffect, useState} from "react";
import axios from 'axios'


const DogShow:React.FC = () =>{
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState(undefined);
    const [fetch,setFetch]=useState(false);


    useEffect(()=>{
        setLoading(true);
        axios.get('https://dog.ceo/api/breeds/image/random').then(result=>{
            setUrl(result.data.message);
            setLoading(false)

        })
    },[fetch]);
    return(
        <>
            {loading ?
                <span>🐶读取中</span>
                :
                <img src={url} style={{width:300}} alt={'dog'}/>
            }
            <br/>
            <button onClick={()=>{setFetch(!fetch)}}>刷新一张</button>

        </>
    )
};

export default DogShow;
