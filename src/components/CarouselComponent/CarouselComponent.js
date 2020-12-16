import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function CarouselComponent({day, page}) {

  const carouselPagesVideos = day.urls.map((url, index) => {

    return (
      <Carousel.Item  key={index}>
        <VideoPlayer url={url} />
      </Carousel.Item>
    );

  });

  return (
    <Col className="carousel-col">
      <Carousel interval={null}>
        {carouselPagesVideos}
      </Carousel>
      {day.instructions ? (<div className="video-instructions">
        {day.instructions ? (day.instructions) : (<></>)}
      </div>): (<></>)}
    </Col>
  );
}

export default CarouselComponent;
