import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './CreateAdmin.css';
const CreateAdmin = () => {
    const [email, setEmail] = useState('');
    const {reset } = useForm();
    
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user ={email};
        fetch('https://wpgradient.herokuapp.com/addUserInfo/admin',{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                    alert('Wow,Congratulations');
                    reset();
                }
        })
        e.preventDefault()
    }
    return (
        <div className="add-product">
            <div>
            <h1 className="my-5 text-secondary">You Can Add An Admin</h1>
            <form className="mb-5" onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} name="" id="" placeholder="Set Email"/>
                <input className="btn btn-primary" type="submit" value="Post" />
                
            </form>
            </div>
        </div>
    );
};

export default CreateAdmin;