import {Capitalize} from '../gloabalFunctions'


export default function Item({item}){
    return <strong>{Capitalize(item.name)}</strong> 
}