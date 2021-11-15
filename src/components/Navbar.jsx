import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className="container ">
                <Link to="/" className="navbar-brand fs-3 fw-bolder">SALSA</Link>
                <label
                    type='button'
                    className='navbar-toggler'
                    data-bs-toggle='collapse'
                    data-bs-target='#mobileMenu'
                    aria-controls='mobileMenu'
                    aria-expanded='false'
                    aria-label='navigation bar'
                >
                    <FontAwesomeIcon icon='bars'/>
                </label>
                <div className="collapse navbar-collapse" id="mobileMenu">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className='nav-item'> <Link to="/" className='nav-link' >menu</Link> </li>
                        <li className='nav-item'> <Link to="/user" className='nav-link' >user</Link> </li>
                        <li className='nav-item'> <Link to="/auth" className='btn btn-outline-light' >login</Link> </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
