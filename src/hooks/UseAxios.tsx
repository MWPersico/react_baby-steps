import axios from "axios";
import {useEffect, useState} from "react";

//Exemplo de requisição com axios
//Utiliza generics para saber com qual tipo de dados usar em 'data' (depende da API)
export function UseAxios<T>(url:string){
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    useEffect(()=>{
        axios.get(url)
        .then(res=>setData(res.data))
        .catch(()=>setError(true))
        .finally(()=>setIsFetching(false));
    }, [url]);
    return {data, isFetching, error};
}