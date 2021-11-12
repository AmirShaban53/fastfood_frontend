import React, {useContext} from 'react';

import { FoodContext } from '../App';

const UserOrderTable = () => {
    const {userOrders} = useContext(FoodContext);
    let total = 0;
    return (
        <>
            <table className='table table-hover shadow rounded-3 css-serial'>
                <thead>
                    <tr>
                        <th className='col-1'>No.</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {userOrders.map(order => {
                        total += order.price;
                        return (
                            <tr key={order.id}>
                                <td></td>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th></th>
                        <th colSpan='1'>total</th>
                        <th>UGX: {total}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UserOrderTable;
