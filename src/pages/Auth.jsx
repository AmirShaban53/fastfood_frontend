import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () =>{
    const bgImg = {backgroundImage: "url('/images/img3.jpg')"};
    const [login, setLogin] = useState(true);
    const handleBtnAuth = () => {
        setLogin(prev=> !prev);
    }
    return (
        <div className='container pt-5'>
            <div className="form mt-5 mx-md-2 mb-5 mx-lg-5">
                <div className="row mx-3 mx-md-2 mx-lg-5 shadow-lg rounded">
                    <div className="col-md-5 d-none d-md-block form-img" style={bgImg}>
                        <div className ='h-100 p-3 text-center text-white'>
                            {login && 
                                <div>
                                    <div>
                                        new here!
                                    </div>
                                    <div>
                                        <button 
                                            className='btn btn-outline-light w-50 rounded-pill'
                                            onClick={()=>{handleBtnAuth()}}
                                            >
                                            SIGN UP
                                        </button>
                                    </div>
                                    
                                </div>
                            }

                            {!login && 
                                <div>
                                    <div>
                                        welcome back!
                                    </div>
                                    <div>
                                        <button 
                                            className='btn btn-outline-light w-50 rounded-pill'
                                            onClick={()=>{handleBtnAuth()}}
                                        >
                                            LOGIN 
                                        </button>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                    <div className="col-12 col-md-7" >
                        {!login && <Register/>}
                        {login && <Login/>}
                        <div className='d-block text-center mt-5 mb-3 d-md-none'>
                            <button 
                                className='btn btn-outline-dark w-50 rounded-pill'
                                onClick={()=>{handleBtnAuth()}}
                            >
                                {login ? 'SIGN UP' : 'LOGIN' }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;