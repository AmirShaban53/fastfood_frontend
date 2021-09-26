import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container   ">
                <Link to="/" className="navbar-brand">SALSA.</Link>
                <label
                    type='button'
                    className='navbar-toggler'
                    data-bs-toggle='collapse'
                    data-bs-target='#mobileMenu'
                    aria-controls='mobileMenu'
                    aria-expanded='false'
                    aria-label='navigation bar'
                >
                    <span className="navbar-toggler-icon"></span>
                </label>
                <div className="collapse navbar-collapse" id="mobileMenu">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item"><Link to="/" className="nav-link">home</Link></li>
                        <li className="nav-item"><Link to="/menu" className="nav-link">menu</Link></li>
                        <li className="nav-item"><Link to="/orders" className="nav-link">orders</Link></li>
                        <li className="nav-item"><Link to="/admin" className="nav-link">admin</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
                        <li className="nav-item"><Link to="/auth" className="nav-link">login</Link></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;



