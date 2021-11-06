import React, {useContext} from 'react';
import OrderRow from './OrderRow';

import { FoodContext } from '../App';

const OrderTable = () => {
    const {orderList} = useContext(FoodContext);
    let total = 0;
    return (
        <>
            <table className='table table-hover shadow rounded-3 css-serial'>
                <thead>
                    <tr>
                        <th className='col-1'>No.</th>
                        <th>name</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map(order => {
                        total += order.price;
                        return <OrderRow key={order.id} {...order}/>
                    })}
                    <tr>
                        <th></th>
                        <th colSpan='2'>total</th>
                        <th>UGX: {total}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OrderTable;
