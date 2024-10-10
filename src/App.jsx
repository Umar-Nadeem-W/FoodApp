
import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import './App.css'
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  //foodData is defined here so that it cna be accessible to multiple components
  const [foodData, setfoodData] =useState([]);
  const [foodId, setfoodId] = useState("");
  //We will send setFoodData to the search componenet so we can change its value
return(<div>
    <Nav/>
    <Search setfoodData={setfoodData} />
    <Container>
      <InnerContainer>
      <FoodList foodData={foodData} setfoodId={setfoodId}/>
      </InnerContainer>
      <InnerContainer>
      <FoodDetails foodId= {foodId}/>
      </InnerContainer>
    </Container>
    
  </div>)
}

export default App
