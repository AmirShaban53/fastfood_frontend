import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FoodContext } from '../App';

const FoodCard = ({name, price, image_URL}) => {
    const {handleAddOrder} = useContext(FoodContext);

    return (
        <div className='col-sm-6 col-md-4 mb-3'>
            <div className='card'>
                <div className=' food-card-img'>
                    <img className='card-img-top' src={`${image_URL}`} alt="food" />

                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7">
                        <p className='fw-light fs-4 mb-0'>{name}</p>
                        <p className='fw-bolder fs-3'>USD: {price}</p>
                        </div>
                        <div 
                            className="col-5 text-end p-2 add-btn"
                            onClick={()=> {handleAddOrder(name)}}
                        >
                            <FontAwesomeIcon className=' fs-3 mt-2 me-2' icon='plus'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FoodCard;
