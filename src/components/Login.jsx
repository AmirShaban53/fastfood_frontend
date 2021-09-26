import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Login = ({handleAuthKey}) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const history = useHistory();
    const loginUser = async(event) => {
        try {
            event.preventDefault();
            const user = {
                email: userEmail,
                password: userPassword
            }
            const res = await axios.post('/auth/login', user);
            history.push('/');
            const authKey = {
                token: res.data.token,
                role: res.data.role
            }
            handleAuthKey(authKey);
        } 
        catch (error) {
            console.log("login failed", error);
        }
        
    }
    
    return (
        <div className="form-box px-2" >
            <form onSubmit={event=>{loginUser(event)}}>
                <input 
                    className="form-control border-0 border-bottom mb-3" 
                    type="email"
                    placeholder="email"
                    required
                    onChange={event=>{setUserEmail(event.target.value)}}
                />
                <input 
                    className="form-control border-0 border-bottom mb-3" 
                    type="password"
                    placeholder="password"
                    onChange={event=>{setUserPassword(event.target.value)}}
                    required
                />
                <div className='text-center mt-5'>

                    <button className="btn btn-warning" type="submit">login</button> 
                </div>

            </form>
        </div>
        
    )
}

export default Login;
