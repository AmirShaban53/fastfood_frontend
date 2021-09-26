import React from 'react'

const FoodSearch = ({handleSearch}) => {
    return (
        <div className="row mb-5">
            <div className="col-md-6 mx-auto">
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="search..." 
                        className="form-control"
                        onChange={e => handleSearch(e)}    
                    />
                    <div className="input-group-text">@</div>
                </div>

            </div>
        </div>
    )
}

export default FoodSearch;
