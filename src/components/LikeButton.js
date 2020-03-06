import React, {useState, useEffect} from "react";

const LikeButton = () => {
    const [ like, setLike ] = useState(0);
    /*
   useState等价写法
   const likeState = useState(''); useState参数为这个state的初始值
   const like = likeState[0]; 当前的 state
   const setLike = likeState[1]; 更新 state 的函数
   * */
    const [ on, setOn ] = useState(true);

    // 相当于 componentDidMount 和 componentDidUpdate
    // React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候
    // 每次重新渲染，都会生成新的 effect，替换掉之前的,因此可以在 effect 中获取最新的 count 的值，而不用担心其过期,
    // 某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染
    useEffect(()=>{
       document.title = `点击了${like}次`
    });
    return(
        <>
            <button onClick={()=>{setLike(like + 1)}}>
                {like} 👍
            </button>
            <button onClick={()=>{setOn(!on)}}>
                {on ? 'On':'Off'}
            </button>
            </>
    )
};
export default LikeButton
