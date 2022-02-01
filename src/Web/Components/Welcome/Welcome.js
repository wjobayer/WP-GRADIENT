import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import galleryone from'../../../images/ins1.png'
import gallerytwo from'../../../images/ins2.png'


const Welcome = () => {
    return (
        <div className='text-center'>
            <Container>

            </Container>
            <Container>
                <Row>
                <Col sm><img className="w-100" src={galleryone} alt="" /></Col>
                <Col sm className="d-flex align-items-center">
                   <div>
                   <h1>Professional WordPress<span className="text-danger">Themes</span></h1>
                    <p className="my-4">Discover the exceptional beauty, quality, and sparkle of our lab grown diamonds.</p>
                    <Nav.Link><Link className="btn btn-primary px-5" to="/products"><FontAwesomeIcon icon={faShare} /> EXPLORE<Link/></Link></Nav.Link>

                   </div>
                </Col>
                </Row>
                <Row>
                <Col sm className="d-flex align-items-center">
                    <div>
                    <h1>Website Templates for any project </h1>
                    <p className="my-4">Try our online ring builder today! Customise every aspect and create your PERFECT ring!</p>
                    <Nav.Link><Link className="btn btn-primary px-5" to="/products"><FontAwesomeIcon icon={faShare} /> EXPLORE<Link/></Link></Nav.Link>
                    </div>
                    </Col>
                <Col sm><img  className="w-100" src={gallerytwo} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;