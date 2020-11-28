import React from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ActivityPage({ setPage, openWindow, setOpenWindow, currentDate }) {
  function handleClick() {
    setOpenWindow(null);
    setPage("calendar-page");
  }

  function activityComponentHeader() {
    return (
      <>
        <h2>{openWindow.Date}</h2>
        <h3>{openWindow.activity}</h3>
      </>
    );
  }

  function activityComponent() {
    if (openWindow.component === "VideoPlayer") {
      return <VideoPlayer url="https://www.youtube.com/watch?v=mcWp_17fAF4" />;
    } else {
      return <></>;
    }
  }

  return (
    <Container className="activity-page-container">
      <Row>
        <Col sm={12}>{activityComponentHeader()}</Col>
        <Col sm={12}>{activityComponent()}</Col>
        <Col sm={12}>
          <Button onClick={handleClick}>Back</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivityPage;
