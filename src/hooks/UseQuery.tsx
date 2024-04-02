import {useEffect, useState} from "react";

export function UseQuery(url:string){
    const [data, setData] = useState<object[]>();
    const [error, setError] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    useEffect(()=>{
        try{
            fetch(url)
            .then(response=>response.json())
            .then(json=>setData(json));
        }catch(error){
            setError(true);
        }finally{
            setIsFetching(false);
        }
    }, [url]);
    return {data, isFetching, error};
}