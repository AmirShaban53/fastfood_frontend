import React, { useContext } from 'react';
import { FoodContext } from '../App';
import FoodCard from './FoodCard';

const MenuList = () => {
    const {foodList, searchTerm} = useContext(FoodContext);
    
    return (
        <div className='row'>
            {foodList && 
                foodList.filter(food=>{
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
            }
            hello love!
        </div>
    )
}

export default MenuList;
