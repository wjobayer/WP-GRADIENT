import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../../images/Wavy_Edu-04_Single-05.jpg'
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://wpgradient.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <h1 className="my-5 text-secondary">Make Your Blog Post</h1>
            <img className="w-50" src={image} alt="" />
            <div>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("product_name", { required: true, maxLength: 100 })} placeholder="Themes Name" />
                <textarea {...register("description")} placeholder="Description of Themes" />
                <input type="number" {...register("price")} placeholder="Themes price" />
                <input {...register("img")} placeholder="Themes image url" />
                <input {...register("themeforest_link")} placeholder="ThemeForest Link" />
                <input {...register("tag", { required: true, maxLength: 30 })} placeholder="Categoies of Themes" />
                <input className="btn btn-primary" type="submit" value="Post" />
                
            </form>
            </div>
        </div>
    );
};

export default AddProduct;