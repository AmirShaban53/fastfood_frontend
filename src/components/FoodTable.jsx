import React, {useContext} from 'react';
import FoodRow from './FoodRow';

import {FoodContext} from '../App';
const FoodTable = () => {
    const {foodList} = useContext(FoodContext);
    return (
        <>
            <table className='table table-hover shadow rounded-3 css-serial border'>
                <thead>
                    <tr>
                        <th className='col-1'>No.</th>
                        <th className='col-2'>name</th>
                        <th className='col-2'>price</th>
                    </tr>
                </thead>
                <tbody>
                    {foodList.map((food)=>{
                        return <FoodRow key={food.id} {...food}/>
                    })}
                    
                    
                    
                </tbody>
            </table>
        </>
    )
}


export default FoodTable
