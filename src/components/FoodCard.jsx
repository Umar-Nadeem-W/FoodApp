import '../styles/foodcard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function FoodCard({food, setfoodId}){

    return <div className='item-container'>
        <img className='item-image' src={food.image} alt="" />
        <h1 className='item-name'>{food.title}</h1>
        <Button variant='primary' onClick={()=>{ setfoodId(food.id); console.log(food.id)}}>View recipie</Button>
    </div>
}