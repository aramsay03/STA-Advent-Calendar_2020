import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SpotDifferenceComponent.css";
import Button from "react-bootstrap/Button";

function SpotDifferenceComponent({instructions, image1, image2, solution}) {

  const [showSolution, setShowSolution] = useState(false);

  function toggleSolution(showshowSolution) {
    const solutionStatus = () => {
      if (showSolution === true) {
        return false;
      } else {
        return true;
      }
    };
    setShowSolution(solutionStatus);
  }

  return (
    <Container fluid>
      <Row className="challenge-instructions">
        {instructions}
      </Row>
      <Row>
        <Col className="challenge-img" md={6}>
          <img
            className="d-block w-100"
            src={image1}
            alt=""
          />
        </Col>
        <Col className="challenge-img" md={6}>
          {showSolution ? (
                <img
                className="d-block w-100"
                src={solution}
                alt=""
                />
              ) : (
                <img
                className="d-block w-100"
                src={image2}
                alt=""
              />
              )}
        </Col>
      </Row>
      <Row>
        <Button onClick={toggleSolution}>
          {showSolution ? ( "Hide Answers" ) : ( "Show Answers" )}
        </Button>
      </Row>
    </Container>
  );
}
export default SpotDifferenceComponent;
