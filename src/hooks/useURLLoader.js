import  {useState, useEffect} from "react";
import axios from "axios";

const useURLLoader = (url) =>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        axios.get(url).then((result)=>{
            setData(result.data);
            setLoading(false)
        })
    },[url]);
    return [loading,data];
};

export default useURLLoader
