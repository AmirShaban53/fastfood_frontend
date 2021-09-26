import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const Register = () => {

    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confrimPassword, setConfrimPassword] = useState("");
    const history = useHistory();

    const registerUser = async(event) => {
        try {
            event.preventDefault();
            if(newPassword === confrimPassword){
                const user = {email: newEmail, password: newPassword};
                const res = await axios.post('/auth/signup', user);
                console.log(res.data);
                history.push('/');
            }
            else{
                console.error("the password is not the same");
            }
        } 
        catch (error) {
            console.log("login failed", error);
        }
        
    }

    useEffect(() => {
        if(newPassword === confrimPassword)
        {
            console.log("the password is the same");
        }
        else{
            console.log("the password is not the same");
        }
    }, [newPassword, confrimPassword]);

    return (
        <div className="form-box px-2">
            <form onSubmit={event=>{registerUser(event)}}>
                <input 
                    className="form-control border-0 border-bottom mb-3" 
                    placeholder="email"
                    type="email"
                    required
                    onChange={event=>{setNewEmail(event.target.value)}}
                />
                <input 
                    className="form-control border-0 border-bottom mb-3" 
                    placeholder="password"
                    type="password"
                    required
                    onChange={event=>{setNewPassword(event.target.value)}}
                />
                <input 
                    className="form-control border-0 border-bottom mb-3" 
                    placeholder="confrim password"
                    type="password"
                    required
                    onChange={event=>{setConfrimPassword(event.target.value)}}
                />
                <div>
                    <input type="checkbox" className='me-3' name="" id="" />
                    <span className='text-muted'>i agree to the terms and conditions</span>
                </div>
                <div className='text-center mt-5'>
                    <button className="btn btn-warning" type="submit">register</button> 
                </div>
            </form>
        </div>
        
    )
}

export default Register;
