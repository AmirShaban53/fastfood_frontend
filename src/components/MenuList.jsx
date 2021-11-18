import React, { useContext } from 'react';
import { FoodContext } from '../App';
import FoodCard from './FoodCard';

const MenuList = () => {
    const {foodList, searchTerm} = useContext(FoodContext);
    
    return (
        <div className='row'>
            {foodList && 
                foodList.map(food=>{
                    return <FoodCard key={food.id} {...food}/>
                })
            }
            hello love!
        </div>
    )
}

export default MenuList;
