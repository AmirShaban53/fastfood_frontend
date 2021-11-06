import React from 'react';
import MenuList from '../components/MenuList';
import SearchBar from '../components/SearchBar';

const Menu = () => {
    return (
        <div>
            <div className="container">
                <SearchBar/>
                <MenuList/>

            </div>
        </div>
    )
}

export default Menu;
