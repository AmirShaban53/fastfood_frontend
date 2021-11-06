import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const history =useHistory();

    const handleSignUp = async(event) => {
        try {
            event.preventDefault();
            const newUserData = {email: email, password: password};
            const result =await axios.post('/auth/signup', newUserData);
            console.log(result.data);
            return history.push('/');
        } 
        catch (error) {
            console.log('auth failed', error);
        }
    }
    return (
        <div>
            <div>
                <form  className='p-3' onSubmit={(e)=>{handleSignUp(e)}}>
                
                    <h3 className='mb-3 text-center pb-2 border-bottom'>SIGN UP</h3>
                    <div className="form-group ">
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
                                type="text" 
                                className='form-control' 
                                placeholder='password' 
                                onChange={(e)=>{setPassword(e.target.value)}}
                                required
                            />
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-outline-warning w-50' type="submit">sign Up</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Register;
