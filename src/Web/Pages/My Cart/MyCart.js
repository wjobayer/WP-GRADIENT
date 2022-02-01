import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Firebase/useAuth';


const MyCart = () => {

    const {user}=useAuth();
    const [delivery, setDelivery] = useState([]);
  
    const [control, setControl] = useState(false);
  
    useEffect(() => {
      fetch(`http://localhost:5000/mycart/${user.email}`)
        .then((res) => res.json())
        .then((data) => setDelivery(data));
    }, [control]);
    console.log(delivery);
  
    const handleDelete = (id) => {
      fetch(`http://localhost:5000/deleteorder/${id}`, {
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
        <div className='ms-5'>
        <Container className="my-5">
        <h1 className="my-5 text-primary text-center">Bookmarked Themes</h1>
   <div className="services">
     <div className="row">
       {delivery?.map((pd) => (
         <div className="col-md-4 my-2">
           <div className="service border border rounded-3 p-3">
             <div className="services-img ">
               <img className="w-25 mb-3" src={pd?.image} alt="" />
             </div>

             <h4 className="text-primary title-font">{pd?.name}</h4>
             <p className="des-font">{pd?.description}</p>
             <div className="d-flex">
             <h6 className="text-primary">$ {pd?.price}</h6>

             <button
               onClick={() => handleDelete(pd?._id)}
               className="btn btn-primary btn-fs mx-auto"
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