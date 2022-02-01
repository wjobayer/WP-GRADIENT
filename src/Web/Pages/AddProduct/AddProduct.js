import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../../images/6443064.jpg'
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product ms-5">
            <h1 className="my-5 text-primary text-center">Make Your Blog Post</h1>
           <div className='griddisplay'>
           <div>
           <img className="w-100" src={image} alt="" />
           </div>
            <div>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="" className='ms-2'>Blog Title</label>
                <input {...register("product_name", { required: true, maxLength: 100 })}className='form-control form-control-md w-100'/>
                <label htmlFor="" className='ms-2'>Description of Themes</label>
                <textarea {...register("description")} className='form-control form-control-md w-100' placeholder="" />
                <label htmlFor="" className='ms-2'>Themes price</label>
                <input type="number" {...register("price")} className='form-control form-control-md w-100' placeholder="" />
                <label htmlFor="" className='ms-2'>Themes image url</label>
                <input {...register("img")} className='form-control form-control-md w-100' placeholder="" />
                <label htmlFor="" className='ms-2'>ThemeForest Link</label>
                <input type="url" {...register("themeforest_link")} className='form-control form-control-md w-100' placeholder="" />
                <label htmlFor="" className='ms-2'>Categoies of Themes</label>
                <span>
                
                <input {...register("tag", { required: true })} type="radio" value="Free" /> 
                <span className='ms-2'>Free</span>
                </span>
                <span>
               
                <input {...register("tag", { required: true })} type="radio" value="Premium" /> 
                <span className='ms-2'>Premium</span>
                </span>
                <input className="btn btn-primary" type="submit" value="Post" />
            </form>
            </div>
           </div>
        </div>
    );
};

export default AddProduct;