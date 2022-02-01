import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product , setProduct]=useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[control]);

    const handleDelete = (id) => {
      fetch(`http://localhost:5000/deleteproduct/${id}`, {
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
            
            <div className="my-5">
            <h1 className="text-primary text-center">Manage Themes Collection</h1>
            <h6 className='text-center text-primary'>Total Blog Post: {product.length}</h6>
            <Table striped bordered hover className="custom-size ms-5">
        <thead>
          <tr className="bg-primary text-light">
            <th>S.N</th>
            <th>Themes Name</th>
            <th>Image</th>
            <th>Catagories</th>
            {/* <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        {product?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>
                 <p className="title-font text-primary">{pd.product_name}</p>
                 <p className="des-font">{pd.price} $</p>
                 <p className="des-font scrolling-para">{pd.description}</p>
            </td>
              <td> <img width="150px" className="mx-5" src={pd.img} alt="" /> </td>
              <td className="fw-lighter"><h6 className="mx-5 text-primary">{pd.tag}</h6></td>
              {/* <td>
                <input
                  
                  type="text"
                  defaultValue={pd.status}
                />
              </td> */}
              <div className="d-flex my-5 mx-5">
              <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2 text-light btn-fs">Delete</button>
              </div>
            </tr>
          </tbody>
        ))}
      </Table>
            </div>
        </div>
    );
};

export default ManageProducts;