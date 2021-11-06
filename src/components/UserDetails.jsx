import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FoodContext } from '../App';

const UserDetails = () => {
    const {user} = useContext(FoodContext);
    return (
        <div className="user-detail rounded-3 shadow-lg p-3 my-5 row">
            <div className="col-2 col-sm-4  border-end position-relative">
                <FontAwesomeIcon className='display-1 user-icon' icon='user-circle'/>
            </div>
            <div className="col-10 col-sm-8 ">
                <div className=''>
                    <p className=' mb-0'>email:</p>
                    <p className='fw-bolder fs-4'>{user.email}</p>
                </div>
                <div className=''>
                    <p className=' mb-0'>role:</p>
                    <p className='fw-bolder fs-4'>{user.role}</p>
                </div>
                
            </div>
        </div>
    )
}

export default UserDetails;
