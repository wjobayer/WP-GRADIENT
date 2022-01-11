import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import galleryone from'../../../images/ins1.png'
import gallerytwo from'../../../images/ins2.png'


const Welcome = () => {
    return (
        <div>
            <Container>

            </Container>
            <Container>
                <Row>
                <Col sm><img className="w-100" src={galleryone} alt="" /></Col>
                <Col sm className="d-flex align-items-center">
                   <div>
                   <h1>Professional WordPress<span className="text-danger">Themes</span></h1>
                    <p className="my-4">Discover the exceptional beauty, quality, and sparkle of our lab grown diamonds.</p>
                    <button className="btn btn-secondary"><FontAwesomeIcon icon={faShare} /> Explore The Collection</button>

                   </div>
                </Col>
                </Row>
                <Row>
                <Col sm className="d-flex align-items-center">
                    <div>
                    <h1>Website Templates for any project </h1>
                    <p className="my-4">Try our online ring builder today! Customise every aspect and create your PERFECT ring!</p>
                    <button className="btn btn-secondary"><FontAwesomeIcon icon={faShare} /> Explore The Collection</button>
                    </div>
                    </Col>
                <Col sm><img  className="w-100" src={gallerytwo} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;