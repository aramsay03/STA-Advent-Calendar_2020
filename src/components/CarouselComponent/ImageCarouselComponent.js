import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import "./CarouselComponent.css";

function ImageCarouselComponent({day, page}) {

  const carouselPagesImages = day.images.map((url, index) => {

    return (
      <Carousel.Item  key={index}>
        <img src={url} alt={url} />
      </Carousel.Item>
    );

  });

  return (
    <Col className="carousel-col">
      <Carousel interval={null}>
        {carouselPagesImages}
      </Carousel>
      {day.instructions ? (<div className="video-instructions">
        {day.instructions ? (day.instructions) : (<></>)}
      </div>): (<></>)}
    </Col>
  );
}

export default ImageCarouselComponent;
