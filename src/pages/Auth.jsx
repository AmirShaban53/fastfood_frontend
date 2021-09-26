import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import FormButtons from '../components/FormButtons';

const Auth = ({handleAuthKey}) => {
    const bgImage = {backgroundImage: 'url("/images/img2.jpg")'}
    const [login, setLogin] = useState(true);

    const handleFormChange = (login) => {setLogin(login)}
    
    return (
        <div className="auth-bg " style={bgImage}>
            <div className="container h-100">
                <div className="row h-100 position-relative">
                    <div className="col-md-4 h-75 position-absolute top-50 start-50 translate-middle">
                        <div className="bg-white w-100 h-100 rounded shadow">
                            <FormButtons handleFormChange={handleFormChange}/>
                            <div className="form-box">
                                
                                {login && <Login handleAuthKey={handleAuthKey}/>}
                                {!login && <Register/>}
                            </div>
                            
                            
                            

                        </div>
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Auth;
