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
      <Carousel interval={null}>
        {carouselPages}
      </Carousel>
    </Col>
  );
}

export default CarouselComponent;
