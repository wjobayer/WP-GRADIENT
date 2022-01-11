import React from 'react';
import { RatingView } from 'react-simple-star-rating'
import './Review.css'

const Review = ({product}) => {
    const{username,comment,imageURL,ratingPoint}=product;
    
    return (
        <div className="text-light">
             <img className="review-img" src={imageURL} alt="" />
            <h6 className="fw-bold">{username}</h6>
            <p className="w-75 mx-auto">{comment}</p>
            <RatingView ratingValue={ratingPoint} /* RatingView Props */ />
           
        </div>
    );
};

export default Review;