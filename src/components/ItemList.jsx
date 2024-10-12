import Item from './Item'

export default function ItemList({food, isloading}){

    return  <div>
    <ol>
        {isloading ? "Loading ingredients" : 
         food.extendedIngredients.map((item) =>
         <li key={item.id}>
            <Item   item={item} />
         </li>)}
    </ol>
</div>
}