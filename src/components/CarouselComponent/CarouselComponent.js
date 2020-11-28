import React from "react";
import Carousel from "react-bootstrap/Carousel";
import config from "../../config.json";
import Col from "react-bootstrap/Col";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function CarouselComponent({day}) {

  const carouselPages = day.urls.map((url, index) => {

    return (
      <Carousel.Item>
        <VideoPlayer url={url} />
      </Carousel.Item>
    );

  });

  return (
    <Col>
      <Carousel>
        {carouselPages}
      </Carousel>
    </Col>
  );
}

export default CarouselComponent;

// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src="assets/christmas-cake-992651_640.jpg"
//     alt="Third slide"
//   />
//
//   <Carousel.Caption className="carousel-caption">
//     <h3>Christmas Recipe 2</h3>
//     <p>Photo submitted by Jack Frost</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src="assets/christmas-cookies-1051884_640.jpg"
//     alt="Third slide"
//   />
//
//   <Carousel.Caption>
//   <h3>Christmas Recipe 3</h3>
//   <p>Photo submitted by Rudolph</p>
//   </Carousel.Caption>
// </Carousel.Item>
