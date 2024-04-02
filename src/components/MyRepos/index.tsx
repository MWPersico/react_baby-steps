import "./index.css";
//import { UseQuery } from "../../hooks/UseQuery";
import { UseAxios } from "../../hooks/UseAxios";

export function MyRepos(){
    //Define o tipo de dados retornados da API
    type reposDefinition = {
        full_name: string,
        description: string,
        id: number
    }
    //Utiliza o Hook de fetching passando a URL e o tipo de dados com generics
    const {data, isFetching, error} = UseAxios<reposDefinition>("https://api.github.com/users/MWPersico/repos");
    console.log("Fetching: "+isFetching)
    console.log("Error: "+error)
    if(isFetching){
        return(
            <p>Loading...</p>
        );
    }else{
        if(error){
            return(
                <p>Error ;-;</p>
            );
        }
        const dataList = data?.map(repo=>{
            const {full_name, description, id} = repo;
            return(
                <tr className="repos-table-row" key={id}>
                    <td>{id}</td>
                    <td>{full_name}</td>
                    <td>{description}</td>
                </tr>
            );
        })
        return(
            <table className="repos-table">
                <thead>
                    <tr className="repos-table-row" key="header">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList}
                </tbody>
            </table>
        );
    }
}