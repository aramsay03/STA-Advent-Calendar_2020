import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SpotDifferenceComponent.css";

function SpotDifferenceComponent({instructions, image1, image2}) {

  return (
    <Container fluid>
      <Row>
        <Col className="challenge-img" md={6}>
          <img
            className="d-block w-100"
            src={image1}
            alt=""
          />
        </Col>
        <Col className="challenge-img" md={6}>
          <img
            className="d-block w-100"
            src={image2}
            alt=""
          />
        </Col>
      </Row>
      <Row className="challenge-instructions">
        {instructions}
      </Row>
    </Container>
  );
}
export default SpotDifferenceComponent;
