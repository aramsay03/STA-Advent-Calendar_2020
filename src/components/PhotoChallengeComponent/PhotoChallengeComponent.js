import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PhotoChallengeComponent({instructions, image}) {

  return (
    <Container fluid>
      <Row>
        <Col className="challenge-img" md={6}>
          <img
            className="d-block w-100"
            src={image}
            alt="Third slide"
          />
        </Col>
        <Col className="challenge-text" md={6}>
          <p>{instructions}</p>
        </Col>
      </Row>
    </Container>
  );
}
export default PhotoChallengeComponent;
