import React, {useContext} from 'react';
import { FoodContext } from '../App';

const SearchBar = () => {
    const {setSearchTerm} = useContext(FoodContext);
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-sm-8 ">
                        <form className='text-center'>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='search food!'
                                onChange={(event)=>{setSearchTerm(event.target.value)}}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
