import React from "react";
import CarouselComponentWOA from "../components/CarouselComponent/CarouselComponentWOA";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function WallOfAwesome() {

  return (
    <Container className="awesome-container">
      <Row className="awesome">
        <CarouselComponentWOA />
      </Row>
    </Container>
  );
}

export default WallOfAwesome;
