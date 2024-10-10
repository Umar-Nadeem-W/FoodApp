import FoodCard from "./FoodCard"
export default function FoodList({foodData, setfoodId}){
    return <div>
        {
            foodData.map((food)=> 
                
                <FoodCard key={food.id} food={food} setfoodId={setfoodId}/> 
              
            )
        }
    </div>
}