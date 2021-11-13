import React, { useContext } from 'react';
import { FoodContext } from '../App';
import FoodCard from './FoodCard';

const MenuList = () => {
    const {foodList, searchTerm} = useContext(FoodContext);
    const foodElement = foodList
    .filter(food=>{
        if(searchTerm === ''){
            return food;
        }
        else if(food.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return food;
        }
    })
    .map(food=>{
        return <FoodCard key={food.id} {...food}/>
    })
    return (
        <div className='row'>
            {foodElement}
        </div>
    )
}

export default MenuList;
