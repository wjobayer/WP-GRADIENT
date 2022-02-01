import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Firebase/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './CreateReview.css';


const CreateReview = () => {
    const{user}=useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.email = user.email;
        data.username  = user.displayName;
        data.imageURL =user.photoURL;
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Commented');
                    reset();
                }
            })
    }

    return (

        <div>
            <Header></Header>
           <h1 className="text-secondary my-5"> You can provide your feedback and rate it!</h1>
        <form className="mb-5 pt-5" onSubmit={handleSubmit(onSubmit)}>
           
           <div className="bg-light">
           <img src={user.photoURL} className="owner-review-image my-3 rounded-circle" alt="" />
           <h6 className=" ms-3 d-inline">{user.displayName}</h6>
           </div>
            <textarea {...register("comment")} placeholder="Whats On Your Mind?" className="mt-0" />
            <div>
            <input className="btn btn-primary text-light my-2" type="number" {...register("ratingPoint")} defaultValue="0" />
            </div>
            <input className="btn btn-primary d-block mx-auto" type="submit" value="Post" />
            
        </form>
        <Footer></Footer>
        </div>
    );
};

export default CreateReview;