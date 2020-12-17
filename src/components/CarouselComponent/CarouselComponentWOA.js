import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import "./CarouselComponent.css";

function CarouselComponentWOA() {
  const winners = {
    competitions: [
      {
        "#": 1,
        header: "STA's First Ever Pub Quiz Night",
        subheader: "Obligatory Group Zoom Photo!",
        image: "./assets/wallOfAwesome/STAPubQuizNight.png",
        imageDescription: "Group picture of particpants on zoom call",
      },
      {
        "#": 2,
        header: "STA Pub Quiz Night 2020",
        subheader: "Winner - Christopher M",
        image: "./assets/wallOfAwesome/ChristopherMcLellan.png",
        imageDescription: "Picture of the winner Christopher McLellan",
      },
      {
        "#": 3,
        header: "Best Christmas Jumper 2020",
        subheader: "Winner - Maud",
        image: "./assets/wallOfAwesome/Maud.jpg",
        imageDescription:
          "Picture of winner - Maud the mannequin in her christmas jumper",
      },
      {
        "#": 4,
        header: "Best Christmas Jumper 2020",
        subheader: "Runner Up - Alistair F",
        image: "./assets/wallOfAwesome/Alistair.jpg",
        imageDescription:
          "Picture of runner up - Alistair wearing his christmas jumper",
      },
      {
        "#": 5,
        header: "Best Christmas Jumper 2020",
        subheader: "Runner Up - Kirsty M",
        image: "./assets/wallOfAwesome/Kirstyjumper.jpg",
        imageDescription:
          "Picture of runner up - Kirsty wearing her christmas jumper",
      },
      {
        "#": 6,
        header: "Winter Photography Challenge 2020",
        subheader: "Submitted by Robin W",
        image: "./assets/wallOfAwesome/Robin1.jpg",
        imageDescription: "Picture of Scottish landscape",
      },
      {
        "#": 7,
        header: "Winter Photography Challenge 2020",
        subheader: "Submitted by Robin W",
        image: "./assets/wallOfAwesome/Robin2.JPG",
        imageDescription: "Picture of Scottish landscape",
      },
      {
        "#": 8,
        header: "Winter Photography Challenge 2020",
        subheader: "Submitted by Rhona H",
        image: "./assets/wallOfAwesome/Rhona.jpg",
        imageDescription: "Picture of snowman wearing a mask",
      },
    ],
  };

  const carouselPagesImages = winners.competitions.map((competition, index) => {
    return (
      <Carousel.Item className="woa-carousel" key={index}>
        <div className="woa-text">
          <h1>
            <b>Wall of Awesome</b>
          </h1>
          <h2>{competition.header}</h2>
          <h3>{competition.subheader}</h3>
        </div>
        <img
          className="wall-of-awesome-image"
          src={competition.image}
          alt={competition.imageDescription}
        />
      </Carousel.Item>
    );
  });

  return (
    <Col>
      <Carousel interval={null}>{carouselPagesImages}</Carousel>
    </Col>
  );
}

export default CarouselComponentWOA;
