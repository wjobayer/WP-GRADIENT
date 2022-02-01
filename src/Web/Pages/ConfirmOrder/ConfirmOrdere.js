import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../Firebase/useAuth';
import './ConfirmOrder.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';


const ConfirmOrdere = () => {
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   const {user}=useAuth();
   
 useEffect(() =>
      fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail._id==id)
        setSpecificDetail(matchedData);
    }

}

,[details]);


const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
    data.email = user.email;
    data.username  = user.displayName;
    data.imageURL =user.photoURL;
    data.status = "Sales";
    data.image = specificDetail?.img;
    data.description =specificDetail.description;
    data.price=specificDetail.price;
    data.name=specificDetail?.product_name;
    data.id=specificDetail?._id;


    fetch("http://localhost:5000/confirmorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
            alert('Order successfully');
            // reset();
        }
    });
    // console.log(data);
  };
    return (
        <div className='text-center'>
          <Header></Header>
          <Container>
              <h1 className="mt-5 text-primary">Proceed To Confirm Order</h1>
          <div className="row mt-5 mb-5">
          <div className="servicedetails rounded-3 shadow p-5">
          <h6 className="text-start text-light m-2"><span className="py-1 px-2 customround">{specificDetail?.tag}</span></h6>
          <img className="w-75 mt-5"  src={specificDetail?.img} alt="" />

           <h5 className="mt-1 text-danger title-font">{specificDetail?.product_name}</h5>
           <p className=" fw-lighter des-font">{specificDetail?.description}</p>
           <p className="title-font text-secondary">$ {specificDetail?.price}</p>
          </div>
          <div className="order-form  mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className="btn textarea-border" placeholder="Additional Notes For Your Bookmark.." {...register("comments")}  />
                <input className="btn btn-primary" type="submit" value="Bookmark" />
            </form>
            <a className='btn btn-primary' target='_blank '  href={specificDetail?.themeforest_link}>Buy From Themeforest</a>
          </div>
          </div>
          </Container>
          <Footer></Footer>
    </div>
    );
};

export default ConfirmOrdere;