import React from 'react';
import FoodCard from './FoodCard';

const Foods = ({foodList, postOrder, searchTerm}) => {
    

    
    return (
        <div className='row'>
            {foodList
            .filter((foods)=>{
                if(searchTerm === "" || searchTerm === undefined){return foods}
                else if(foods.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return foods;
                }
                
            })
            .map((food)=>{
                return <FoodCard key={food.food_id} {...food} postOrder={postOrder}/>
            }
        )}
            
            
        </div>
    )
}

export default Foods;
