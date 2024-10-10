import { useEffect, useState } from "react"
import axios from "axios";
import '../styles/search.css'

export default function Search({setfoodData}){
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "d29f727c64f3456a9a4360ea5f9474a9";
    const [query, setQuery] = useState("")
    //syntax of useeffect below
    useEffect(()=>{
        async function fetchFood(){
            try {
                  const res=  await axios.get(`${URL}`,{
                        params:{
                            query:query,
                            apiKey:API_KEY,
                        }
                    })
                    const data = res.data;
                    const itemlist = data.results;
                    console.log(itemlist);
                    setfoodData(itemlist);

            }catch(error){
                console.error("Error in getting food data: ",error)
            }
        }
       fetchFood();
    }, [query])
    return (

        <div className="search-container-styles">
            <input className="search-bar-styles" placeholder="Enter the food item here" value={query} onChange={(e)=>setQuery(e.target.value)} type="text"></input>
        </div>
    )
}