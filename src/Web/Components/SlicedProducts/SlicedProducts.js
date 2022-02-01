import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import './SlicedProducts.css'

const SlicedProducts = () => {
    const [product , setProduct]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="my-5 text-center">
            <Container className="my-5">
           <h1 className=" display-5 text-center">Ocean Of Themes</h1>
            <p className=" mb-5 text-center">Recently added in our Collection</p>
            <div className="product-collection">{
            product.slice(0, 6).map(product =><Product
                key={product.key}
                product={product}
            ></Product>
            )
        }
        </div>
           </Container>
        </div>
    );
};

export default SlicedProducts;