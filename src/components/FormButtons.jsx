import React, { useState } from 'react';

const FormButtons = ({handleFormChange}) => {
    const [login, setLogin] = useState('start-0');
    
    return (
        <div className=' py-4 px-2'>
            <div className="w-100 mx-auto shadow position-relative  rounded row ">
                <div className={"position-absolute rounded h-100 w-50 "+login} id="btn-box"></div>
                <label 
                    className="btn  col" 
                    type="button"
                    onClick={()=>{
                        setLogin('start-0');
                        handleFormChange(true);
                    }}
                >
                    login
                </label>
                <label 
                    className="btn  col" 
                    type="button"
                    onClick={()=>{
                        setLogin('start-50');
                        handleFormChange(false);
                    }}
                >
                    register
                </label>
                    
            </div>
        </div>
    )
}

export default FormButtons;
