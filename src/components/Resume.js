import React from "react";
import { Container, Row, Col, Button  } from "react-bootstarp";
import "../style/Resume.css";
import PDF from "../documentation/VidishaPatelResume.pdf";

//resume component
function Resume () {
    return (
        <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
          </Row>
          </Container>
        </section>
    );
}

//export resume
export default Resume;