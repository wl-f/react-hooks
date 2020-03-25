import  {useState, useEffect} from "react";
import axios from "axios";

type IData = {url:string}
type IState = [boolean,IData[]]

const useURLLoader = (url:string):IState =>{
    const [data,setData]=useState([]);
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
