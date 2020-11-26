import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ActivityPage({ setPage }) {
  function handleClick() {
    setPage("calendar-page");
  }
  return (
    <Container className="activity-page-container">
      <Row>
        <Col sm={12}>
          <VideoPlayer url="https://www.youtube.com/watch?v=mcWp_17fAF4" />
        </Col>
        <Col sm={12}>
          <Button onClick={handleClick}>Close</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivityPage;
