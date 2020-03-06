import React, {useState, useEffect} from "react";
import axios from 'axios'
const DogShow = () =>{
    const [url,setUrl]=useState(null);
    const [loading,setLoading]=useState(true);
    const [fetch,setFetch]=useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get('https://dog.ceo/api/breeds/image/random').then((result)=>{
            setUrl(result.data.message);
            setLoading(false)
        })
    },[fetch]); // 仅在 fetch 更改时发起网络请求. useEffect 的第二个可选参数,如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）

    return(
        <>
            {
                // eslint-disable-next-line jsx-a11y/accessible-emoji
                loading ? <span>🐶读取中</span>
                    :
                    <img src={url} style={{width:300}} alt={'dog'}/>
            }
            <br/>
            <button onClick={()=>{setFetch(!fetch)}}>刷新一张</button>
        </>
    )
};

export default DogShow
