import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from '../../Firebase/useAuth';
import './CheckOutAllOrder.css'

const CheckOutAllOrder = () => {

    const {user}=useAuth();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");
    const [control, setControl] = useState(false);
  
    const handleStatus = (e) => {
      setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
      fetch("https://wpgradient.herokuapp.com/allorders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
  
    // const status = "apporved";
    const handleUpdate = (id) => {
      fetch(`https://wpgradient.herokuapp.com/updatestatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (id) {
        alert("Status Updated Successfully");
        setControl(!control);
        console.log(id);
       
      }
     
    };

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
        <div className="my-5 w-100 all-font">
           <Container>
           <h1 className="text-secondary">All Order From Us</h1>
            <div className="container">
      <h5 className="text-secondary">Orders Queue {orders.length}</h5>

      <div>
      <Table striped bordered hover className="custom-size">
        <thead>
          <tr className="bg-secondary text-light">
            <th>S.N</th>
            <th>Themes</th>
            <th>Gallery</th>
            <th>User Information</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td><h6 className="text-start text-light m-2"><span className="py-1 px-2 customround">{pd.status}</span></h6> <img width="90px" src={pd.image} alt="" /> </td>
              <td className="fw-lighter">

                <p>{pd.username}</p>
                <p>{pd.email}</p>
                <img width="50px" className="rounded-circle" src={pd.imageURL} alt="" />
              </td>
              
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                  className="btn btn-outline-secondary"
                />
              </td>
              <div className="d-flex my-5">
              <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2 text-light btn-fs">Erase</button>
              <button
                onClick={() => handleUpdate(pd?._id)}
                className="btn bg-success p-2 ms-5 text-light btn-fs"
              >
                Update
              </button>
              </div>
            </tr>
          </tbody>
        ))}
      </Table>
      </div>
    </div>
           </Container>
        </div>
    );
};

export default CheckOutAllOrder;