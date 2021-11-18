import React from 'react';
import MenuList from '../components/MenuList';
import SearchBar from '../components/SearchBar';

const Menu = ({list}) => {
    return (
        <div className="container">
            <SearchBar/>
            {list && <MenuList/>}
        </div>
    )
}

export default Menu;
