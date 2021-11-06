import React,{ useContext } from 'react';
import { FoodContext } from '../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserDetails from '../components/UserDetails';
import UserSection from '../components/UserSection';
import AdminSection from '../components/AdminSection';

const User = () => {
    const { user } = useContext(FoodContext);
    return (
        <div className='container'>
            <UserDetails email='exmaple@gmail.com' role='USER'/>
            {user.role === 'user' && <UserSection/>}
            {user.role === 'admin' && <AdminSection/>}
            {(user.role === '' || typeof user.role === 'undefined') &&
                <div>
                    you need to sign in to view orders!
                </div>
            }
        </div>
    )
}

export default User;