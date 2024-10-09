
import { useState } from "react"
import Search from "./components/Search"
function App() {
  //foodData is defined here so that it cna be accessible to multiple components
  const [foodData, setfoodData] =useState([]);
  //We will send setFoodData to the search componenet so we can change its value
return(<div>
    <Search setfoodData={setfoodData} />
    {foodData.map((item)=> <h1>{item.title}</h1>)}
  </div>)
}

export default App
