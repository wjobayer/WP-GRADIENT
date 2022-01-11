import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgone from '../../../images/bg1.png'
import bgtwo from '../../../images/bg2.png'
import bgthree from '../../../images/bg3.png'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade className="my-0">
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">Collection Of Wordpress Theme</h3>
      <p className="text-light">Choose your desired theme & build your dreams also.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgtwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">New Era Of Themes.</h3>
      <p className="text-light">Choose your desired theme & build your dreams also.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cw w-100"
      src={bgthree}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-light display-3 fw-bold">New Era Of Themes.</h3>
      <p className="text-light">Choose your desired theme & build your dreams also.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;