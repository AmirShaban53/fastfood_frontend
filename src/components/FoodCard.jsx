import React from 'react';

const FoodCard = ({name, price, image, postOrder}) => {
    
    

    const counter = false;
    const imageURL = `http://localhost:8080/${image}`
    return (
        <div className="col-md-4 my-3">
            <div className="card shadow ">
                <div className="food-card position-relative">
                    <img src={imageURL}  alt="this is food pic" className="img-fluid position-absolute top-50 start-50 translate-middle" />
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col ">
                            <h4 className=''>{name}</h4>
                            <p>UGX {price}</p>
                        </div>
                        <div className="col text-end">
                            <label 
                                className="btn btn-warning"
                                type="button"
                                onClick={()=>postOrder(name)}
                            >
                                order
                            </label>
                            {counter && <p className="">-counter-</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FoodCard;
