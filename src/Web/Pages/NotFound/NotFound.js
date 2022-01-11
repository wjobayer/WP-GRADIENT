import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../images/notfound.png'
const NotFound = () => {
    return (
        <div>
            <Container>
            <img className="w-100" src={img} alt="" />
            </Container>
        </div>
    );
};

export default NotFound;