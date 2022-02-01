import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const{_id,product_name,img,tag,price}=product;
    return (
        <div className='text-center'>
        <div className="product m-2 p-3">
        <div className='d-flex'>
        <h6 className="text-start text-light m-2 w-50"><span className="py-1 px-2 customround">{tag}</span></h6>
        <h6 className="text-end text-light m-2 w-50"><span className="py-1 px-2 customround"><FontAwesomeIcon icon={faHeart} /></span></h6>
        </div>
        <img className="w-50 image" src={img} alt="" />
        <div className="details">
        <h6>{product_name}</h6>
        <h6 className="text-success">$ {price}</h6>
        <Link to={`/confirmorder/${_id}`}>
        <Button className="px-4 custom-btn">Add To Cart</Button>
        </Link>
        </div>
       
    </div>
    </div>
    );
};

export default Product;