import React from 'react';
import OrderTable from './OrderTable';
import FoodTable from './FoodTable';
import FoodForm from './FoodForm';
import FoodModal from './FoodModal';
import OrderModal from './OrderModal';

const AdminSection = () => {
    return (
        <div>
            <div>
                <h3>food list</h3>
                <p>list of all foods found on the menu</p>
                <div className="row g-5">
                    <div className="col-md-7">
                        [click on food to edit or delete]
                        <FoodTable/>
                    </div>
                    <div className="col-md-5">
                        <FoodForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <OrderTable/>
                    </div>
                </div>
            </div>
            <FoodModal/>
            <OrderModal/>
        </div>
    )
}

export default AdminSection;
