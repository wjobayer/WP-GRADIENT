import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import admin from'../../../images/admin.jpg'

import './CreateAdmin.css';
const CreateAdmin = () => {
    const [email, setEmail] = useState('');
    const {reset } = useForm();
    
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user ={email};
        fetch('http://localhost:5000/addUserInfo/admin',{
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
            <h1 className="my-5 text-primary text-center">You Can Add An Admin</h1>
            <div className='d-flex align-items-center ms-5'>
            <div className='w-50'>
            <form className="mb-5" onSubmit={handleAdminSubmit}>
                <label htmlFor="" className='ms-2'>Add User Email To Create Admin</label>
                <input type="email" onBlur={handleOnBlur} name="" id="" className='form-control form-control-md w-100'/>
                <input className="btn btn-primary w-100 " type="submit" value="Post" />
                
            </form>
            </div>
            <div className='w-50'>
                <img src={admin} className='w-75 ms-5' alt="" />
            </div>
            </div>
            </div>
        </div>
    );
};

export default CreateAdmin;