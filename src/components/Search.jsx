import { useEffect, useState } from "react"

export default function Search(){

    const [query, setQuery] = useState("")
    useEffect(()=>{
        function myfun(){console.log("The useeffect function was executed");}
        myfun();
    }, [query])
    return (

        <div>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text"></input>
        </div>
    )
}