import React from 'react';
import OrderList from '../components/OrderList';

const Orders = ({userOrders}) => {
    return (
        <div>
            <div className="container my-3">
                
                <OrderList orders={userOrders}/>
            </div>
        </div>
    )
}

export default Orders;
