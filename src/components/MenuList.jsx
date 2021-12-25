import React, { useContext } from 'react';
import { FoodContext } from '../App';
import FoodCard from './FoodCard';

const MenuList = () => {
    const {foodList, searchTerm} = useContext(FoodContext);
    
    console.log(foodList);
    return (
        <div className='row'>
            {foodList.length >= 1 ?
                // <p>hen there is stuff</p>
                foodList.filter(food=>{
                    if(searchTerm === ""){
                        return food;
                    }
                    else if(food.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return food;
                    }
                })
                .map(food=>{
                    return <FoodCard key={food.id} {...food}/>
                })
                 : 
                <p> there is no stuff yet</p>

            }
        </div>
    )
}

export default MenuList;
