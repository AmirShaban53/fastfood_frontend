import React, { useState } from 'react';
import Foods from '../components/Foods';
import FoodSearch from '../components/FoodSearch';

const Menu = ({foodList, postOrder}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="container-fluid">
            <div className="container pt-5 position-relative">
            this is the menu page
                <FoodSearch handleSearch={handleSearch}/>
                <Foods foodList={foodList} postOrder={postOrder} searchTerm={searchTerm}/>
            </div>
        </div>
    )
}

export default Menu;
