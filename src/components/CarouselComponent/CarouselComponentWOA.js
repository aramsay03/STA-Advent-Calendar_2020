import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

function CarouselComponentWOA() {

  const winners = {
                    "competitions": [
                      {
                        "#": 1,
                        "header": "Wall of Awesome",
                        "subheader": "STA's First Ever Pub Quiz Night",
                        "image": "./assets/STAPubQuizNight.png"
                      },
                      {
                        "#": 2,
                        "header": "STA Pub Quiz Night Winner",
                        "subheader": "Christopher McLellan",
                        "image": "./assets/ChristopherMcLellan.png"
                      }
                    ]
                  }

  const carouselPagesImages = winners.competitions.map((competition, index) => {

    return (
      <Carousel.Item  className="woa-carousel" key={index}>
        <h1>{competition.header}</h1>
        <h2>{competition.subheader}</h2>
        <img className="wall-of-awesome-image" src={competition.image}/>
      </Carousel.Item>
    );

  });

  return (
    <Col>
      <Carousel interval={null}>
        {carouselPagesImages}
      </Carousel>
    </Col>
  );
}

export default CarouselComponentWOA;
