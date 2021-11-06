import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import axios from 'axios';

import { FoodContext } from '../App';

const Login = () => {
    const history = useHistory();
    const {setToken, setUser} = useContext(FoodContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(event) => {
        try {
            event.preventDefault();
            const userLoginData = {email: email, password: password};
            const auth = await axios.post('/auth/login', userLoginData);

            if(auth.data){
                setToken(auth.data.token);
                const userData = jwt.verify(auth.data.token, process.env.REACT_APP_JWT_KEY);
                setUser(userData);
                return history.push('/');
            }
        } 
        catch (error) {
            console.log('auth failed', error);
        }
    }

    return (
        <div>
            <div>
                <form  className='p-3' onSubmit={e=>{handleLogin(e)}}>
                
                    <h3 className='mb-5 text-center pb-2 border-bottom'>LOGIN IN</h3>
                    <div className="form-group px-3">
                        <div className=' mb-3'>
                            <label className='form-label'>email:</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='eg. exmaple@gmail.com' 
                                onChange={(e)=>{setEmail(e.target.value)}}
                                required
                            />
                        </div>
                        <div className=' mb-5'>
                            <label className='form-label'>password:</label>
                            <input 
                                type="password" 
                                className='form-control' 
                                placeholder='password' 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required
                            />
                        </div>

                        <div className=' mb-3 text-center'>
                            <button 
                                className='btn btn-outline-warning w-50' 
                                type="submit"
                            >
                                login
                            </button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login;
