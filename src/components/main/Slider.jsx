import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

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
            src="https://vk.com/doc34732150_585279243?hash=63c2c1daed99d85b03&dl=98156d2984e817df25"
            alt="First slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://vk.com/doc34732150_585279237?hash=d1df952e6c99085f2d&dl=a97cf52f65e3ce399a"
            alt="Second slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://vk.com/doc34732150_585279240?hash=eca9db76f717001323&dl=c5c418e62a917d074e"
            alt="Third slide"
            style={{ height: '400px', width: 'auto' }}
          />
        </CarouselItem>
      </Carousel>
    </>
  );
}

export default Slider;
