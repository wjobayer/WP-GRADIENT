import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Firebase/useAuth';


const MyCart = () => {

    const {user}=useAuth();
    const [delivery, setDelivery] = useState([]);
  
    const [control, setControl] = useState(false);
  
    useEffect(() => {
      fetch(`https://wpgradient.herokuapp.com//${user.email}`)
        .then((res) => res.json())
        .then((data) => setDelivery(data));
    }, [control]);
    console.log(delivery);
  
    const handleDelete = (id) => {
      fetch(`https://wpgradient.herokuapp.com/deleteorder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            window.confirm("Do you really want to Delete?");
            setControl(!control);
           
          }
        });
      console.log(id);
    };
  

    return (
        <div>
        <Container className="my-5">
        <h1 className="my-5 text-secondary">My Orders History</h1>
   <div className="services">
     <div className="row">
       {delivery?.map((pd) => (
         <div className="col-md-4 my-2">
           <div className="service border border rounded-3 p-3">
             <div className="services-img ">
               <img className="w-25 mb-3" src={pd?.image} alt="" />
             </div>

             <h4 className="text-secondary title-font">{pd?.name}</h4>
             <p className="des-font">{pd?.description}</p>
             <div className="d-flex">
             <h6 className="text-secondary">$ {pd?.price}</h6>

             <button
               onClick={() => handleDelete(pd?._id)}
               className="btn btn-secondary btn-fs mx-auto"
             >
               Cancel
             </button>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
        </Container>
     </div>
    );
};

export default MyCart;