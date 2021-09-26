import React from 'react';
import FoodList from '../components/FoodList';
import OrderList from '../components/OrderList';

const Admin = ({foodList, orderList}) => {
    return (
        <div>
            <div className="container">
                {/* users */}
                {/* view user order history */}

                {/* admin */}
                {/* view all foods */}
                <div className="my-3">
                    list of foods
                    <FoodList foodList={foodList}/>
                    list of orders
                    <OrderList orders={orderList}/>
                </div>
                {/* edit the foods */}

                {/* add new food */}

                {/* view all orders */}

                {/* accept or decline orders */}
            </div>
            

        </div>
    )
}

export default Admin;
