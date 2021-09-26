import React from 'react';
import Order from './Order';

const OrderList = ({orders}) => {
    
  
    return (
        <div>
            the order list
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope='col' className='col-2'>name</th>
                        <th scope='col' className='col-3'>quantity</th>
                        <th scope='col' className='col-2'>price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {return <Order key={order.order_id} {...order}/>})}
                    
                    <tr>
                        <th className='col' colSpan="2">total</th>
                        <td>-total price-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderList;
