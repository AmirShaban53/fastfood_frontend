import React, {useContext} from 'react';
import { FoodContext } from '../App';

const FoodModal = () => {
    const {selectedFood, handleDeleteFood} = useContext(FoodContext);

    return (
        <>
            <div className='modal' id='foodModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className=' text-center'>DELETE FOOD</h3>
                            <button type="button" className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>
                        <div className="modal-body">
                            <div className=' text-center'>
                                <p>
                                    are you sure you would like to delete food!
                                </p>
                                <button 
                                    onClick={()=>{handleDeleteFood(selectedFood.id)}}
                                    className='btn btn-danger w-25 mx-3' 
                                    data-bs-dismiss='modal'
                                    type='button'
                                >
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodModal;
