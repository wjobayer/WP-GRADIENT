import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faBook, faBookReader, faStreetView} from '@fortawesome/free-solid-svg-icons';
import { faBuyNLarge, faSellcast } from '@fortawesome/free-brands-svg-icons';

const DashboardHome = () => {
    const [product , setProduct]=useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
        const [review , setReview]=useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/reviews')
            .then(res=>res.json())
            .then(data=>setReview(data))
        },[])
        useEffect(() => {
            fetch("http://localhost:5000/allorders")
              .then((res) => res.json())
              .then((data) => setOrders(data));
          }, []);
        useEffect(() => {
            fetch("http://localhost:5000/users")
              .then((res) => res.json())
              .then((data) => setUsers(data));
          }, []);
    return (
        <div className='text-center'>
            <Container>
            <h1 className="text-primary">WP Gradient - At a glance.</h1>
            
            
            
            
            <div className="my-5 ms-5">
                <div className="row">
                    <div className="col bg-primary text-light rounded-3 p-3 mx-3">
                        <h3> User</h3>
                    <h3>{users.length}</h3>
                    </div>
                    <div className="col bg-warning text-light rounded-3 p-3">
                        <h3>Blog Post</h3>
                    <h3>{product.length}</h3>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col bg-warning text-light rounded-3 p-3 mx-3">
                        <h3>Sell From Us</h3>
                    <h3>{orders.length}</h3>
                    </div>
                    <div className="col bg-primary text-light rounded-3 p-3">
                    <h3>Review</h3>
                    <h3>{review.length}</h3>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default DashboardHome;