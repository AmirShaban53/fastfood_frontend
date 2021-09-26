import React from 'react';
import Food from './Food';

const FoodList = ({foodList}) => {

    return (
        
        
            <table className="table table-dark table-responsive ">
            <thead>
                <tr>
                    <th className="col-1">#id</th>
                    <th className="col-4">name</th>
                    <th className="col-4">pirce</th>
                    <th className="col-3">image</th> 
                    <th className="col-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {foodList.map(food=> {
                    return <Food key={food.food_id} {...food}/>
                })}
                
            </tbody>
            </table>
        

        
    )
}

export default FoodList;
