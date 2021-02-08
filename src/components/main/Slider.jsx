import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import bicycle1 from '../../img/bicycle_1.jpg';
import bicycle2 from '../../img/bicycle_2.jpg';
import bicycle3 from '../../img/bicycle_3.jpg';

function Slider() {
  const carouselStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '70%',
    position: 'relative',
    margin: '0, auto',
  };
  return (
    <>
      <Carousel style={carouselStyle}>
        <CarouselItem>
          <img
            src={bicycle1}
            alt="First slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={bicycle2}
            alt="Second slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={bicycle3}
            alt="Third slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
      </Carousel>
    </>
  );
}

export default Slider;
