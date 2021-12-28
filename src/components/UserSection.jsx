import React from 'react';
import UserOrderTable from './UserOrderTable';

const UserSection = () => {
    
    return (
        <div>
            <h3>order History</h3>
            <p>this is a list of your orders that have been completed</p>
            <div className="row">
                <div className="col-md-7">
                    <UserOrderTable/>
                </div>
            </div>
        </div>
    )
}

export default UserSection;
