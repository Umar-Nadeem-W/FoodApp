import axios from "axios";
import '../styles/recipie.css'
import { useEffect, useState } from "react";
export default function FoodDetails({foodId}){

    const [food, setFood] = useState({})
    const [isloading, setloading] = useState(true) 
    

    const url =`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "d29f727c64f3456a9a4360ea5f9474a9";

    function priceAdjust(a){
        return a.toFixed(3);
    }
    
    useEffect(()=>{
        if(!foodId){return;}
        async function getRecipie(){
            try{
            const res =await axios.get(`${url}`, {
                params:{
                    apiKey: API_KEY
                }
            })
            const data = res.data;
            setFood(data);
            console.log(data);
            setTimeout(() => { console.log('Loading!') }, 5000)

            setloading(false);
        }catch(e){console.error("Error in fetching recipie: ",e)}
        }
        
        getRecipie();


    }, [foodId]) ;
    
    if(!foodId){
        return(<div></div>)
    }

    return(

        <div>
            
            <h1>{food.title}</h1>
            <img src={food.image} alt="" />
            <div className="Recipie-stats">
                <div>🕐 {food.preparationMinutes} minutes</div>
                <div>{food.vegetarian ? "🥦 Vegitarian":"🥩 Non-vegetarian"}</div>
                <div>{food.vegan ? "🐮 Vegan":"🍗 Non-vegan"}</div>
                <div>🍽️ Serves {food.servings}</div>
                <div>💵 $ {parseFloat( priceAdjust(food.pricePerServing/100)) }</div>
            </div>
            <h1>Instructions</h1>
            <div>
                <ol>
                    {isloading ? "Loading instructions..." : food.analyzedInstructions[0].steps.map((st)=> <li key={st.number}>{st.step}</li>)}
                </ol>
            </div>
        </div>
    
    


)
}

