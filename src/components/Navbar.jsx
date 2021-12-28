import React, {useState, useEffect, useContext} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FoodContext } from '../App';

const Navbar = () => {

    const {handleUserLogout, token} = useContext(FoodContext);
    const location = useLocation();
    const[darkNav, setDarkNav] = useState(false);
    const[PageURL, setPageURL] = useState('/');
    useEffect(()=>{
        console.log(PageURL)
            if(PageURL !== '/')setDarkNav(true);
            window.addEventListener('scroll',()=>{
                if(PageURL==='/' && window.scrollY <= 100){setDarkNav(false)}
                else {setDarkNav(true)};
            })
        return () => {
            window.removeEventListener('scroll',()=>{console.log('listener removed!')})
        }
    },[PageURL])

    useEffect(()=>{
        setPageURL(location.pathname);
        if(location.pathname==='/')setDarkNav(false);
        // eslint-disable-next-line
    },[location.pathname])

    return (
        <nav className={`navbar navbar-expand-md navbar-dark ${!darkNav && "bg-transparent"} ${darkNav && "bg-dark shadow"}`}>
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
                    <ul className="navbar-nav ms-auto text-center px-3">
                        <li className='nav-item'> <Link to="/menu" className='nav-link mx-3' >menu</Link> </li>
                        <li className='nav-item'> <Link to="/user" className='nav-link mx-3' >user</Link> </li>
                        {token === '' && <li className='nav-item'> <Link to="/auth" className='btn btn-outline-light mx-3' >login</Link> </li>}
                        {(token !== '' ) &&<li className='nav-item'> <Link to="/" onClick={()=>{handleUserLogout()}} className='btn btn-outline-light mx-3' >logout</Link> </li>}
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
