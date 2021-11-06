import React,{useContext} from 'react';

import { FoodContext } from '../App';

const OrderRow = ({id, name, quantity, price, status}) => {
    const { handleEditOrder} = useContext(FoodContext);
    return (
        <tr
            onClick={()=>{handleEditOrder(id)}}
            data-bs-toggle='modal'
            data-bs-target='#orderModal'
        >
            <td></td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            {status === true && <td className=' bg-success'></td>}
            {status === false && <td className='bg-danger'></td>}
        </tr>
    )
}

export default OrderRow;
