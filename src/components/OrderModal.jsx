import React, {useContext} from 'react';
import { FoodContext } from '../App';

const OrderModal = () => {
    const {selectedOrder,handleConfrimOrder} = useContext(FoodContext);
    return (
        <>
            <div className='modal' id='orderModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className=' text-center'>CONFRIM ORDER </h3>
                            <button type="button" className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>
                        <div className="modal-body">
                            <div className=' text-center'>
                                <p>
                                    only confrim orders that have been compeleted
                                </p>
                                <button 
                                    onClick={()=>{handleConfrimOrder(selectedOrder.id)}}
                                    className='btn btn-success w-25 mx-3'
                                    data-bs-dismiss='modal'
                                    type='button'
                                >
                                    confrim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderModal;
