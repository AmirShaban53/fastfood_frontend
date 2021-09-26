import React from 'react';

import FoodCol from './FoodCol';
const Food = (props) => {
    const {
        food_id,
        name,
        price,
        image
    }= props;
    return (
        <tr>
            <td>
            <label >{food_id}</label>
            </td>
            <FoodCol labelName={name} type="text"/>
            <FoodCol labelName={price} type="text"/>
            <FoodCol labelName={image} type="file"/>
            <td>
            <label type="button" className="btn btn-danger border-0">delete</label>
            </td>
        </tr>
    )
}

export default Food;
