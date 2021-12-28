import React, { useState, useContext } from 'react';
import axios from 'axios';

import { FoodContext } from '../App';

const FoodForm = () => {
    const { token, getFoodList } = useContext(FoodContext);

    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState();
    const [foodImage, setFoodImage] = useState();
    
    const createNewFood = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', foodName);
        formData.append('price', foodPrice);
        formData.append('image', foodImage);
        const headers={
            'authorization': `bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
        try {
            await axios.post(`${process.env.REACT_APP_API}/menu`, formData, {headers: headers});
            getFoodList();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className='shadow pb-2 mb-3' onSubmit={(e)=>{createNewFood(e)}}>
                <h3 className=' text-center pb-2 border-bottom'>NEW FOOD</h3>
                <div className="form-group px-3">
                    <div className=' mb-3'>
                        <label className='form-label'>name:</label>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='food name' 
                            onChange={(e)=>{setFoodName(e.target.value)}}
                            required
                        />
                    </div>
                    <div className=' mb-3'>
                        <label className='form-label'>price:</label>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='food price' 
                            onChange={(e)=>{setFoodPrice(e.target.value)}}
                            required
                        />
                    </div>
                    <div className=' mb-5'>
                        <label className='form-label'>image:</label>
                        <input 
                            type='file' 
                            className='form-control' 
                            onChange={(e)=>{setFoodImage(e.target.files[0])}}
                            required
                        />
                    </div>

                    <div className=' text-center'>
                        <button 
                            className='btn btn-outline-success w-50 ' 
                            type="submit"
                        >
                            add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FoodForm;
