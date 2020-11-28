import React from "react";
import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import PhotoChallengeComponent from "../components/PhotoChallengeComponent/PhotoChallengeComponent";
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
        <h3>{openWindow.Date}</h3>
        <h4>{openWindow.activity}</h4>
      </>
    );
  }

  function activityComponent() {
    if (openWindow.component === "VideoPlayer") {
      return <VideoPlayer url="" />;
    } else if (openWindow.component === "CarouselComponent") {
      return <CarouselComponent day={openWindow}/>;
    } else if (openWindow.component === "PhotoChallengeComponent") {
      return (
        <PhotoChallengeComponent
          instructions={openWindow.instructions}
          image={openWindow.image}
        />
      );
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
