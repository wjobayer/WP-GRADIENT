import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import design from '../../../images/1_8.png'
import designa from '../../../images/2_8.png'
import designb from '../../../images/3_8.png'
import './Inspiration.css'


const Inspiration = () => {
    return (
        <div className="my-5">
<Container>
  <Row>
    <Col sm className="my-2"><h4 className="mb-4">Themes & <span className="fw-bold">HTML Template</span></h4>
    <p className="custom-font text-start">Incorporating chevron shapes and symmetry, our designers sought to create dynamic designs that evoke balance and harmony. Chevrons, angles, and geometric outlines define the Geo Collection is refined yet bold aesthetic.</p>
    </Col>
    <Col sm><img className='w-100' src={design} alt="" /></Col>
    <Col sm><img className='w-100' src={designa} alt="" /></Col>
    <Col sm><img className='w-100' src={designb} alt="" /></Col>
  </Row>
</Container>
        </div>
    );
};

export default Inspiration;