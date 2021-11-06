import React, {useContext} from 'react';
import { FoodContext } from '../App';

const FoodRow = ({id, name, price}) => {
    const {handleEditFood} = useContext(FoodContext);
    return (
        <tr 
            onClick={()=>{handleEditFood(id)}}
            data-bs-toggle='modal'
            data-bs-target='#foodModal'
        >
            <td></td>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default FoodRow;
